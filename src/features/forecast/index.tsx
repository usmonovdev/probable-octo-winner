import useWeatherData from '@/shared/hooks/use-weather-data';
import { convertTemperature } from '@/shared/lib/convertTemperature';
import getWeatherIcon from '@/shared/lib/weatherIcons';
import { Skeleton } from '@/shared/ui/skeleton';

const Forecast = () => {
  const { forecast, unit, loading, error } = useWeatherData();

  if (loading) {
    return (
      <div className="custom-container space-y-6">
        <div className="flex flex-col gap-2 mx-auto w-fit items-center">
          <Skeleton className="w-[150px] h-[36px]" />
          <Skeleton className="w-[110px] h-[24px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="w-full h-[236px] rounded-2xl" />
            ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 dark:text-red-400">
        <p className="text-lg font-semibold">Error Loading Weather Data</p>
        <p className="text-sm mt-2">{error}</p>
      </div>
    );
  }

  if (!forecast) {
    return (
      <div className="custom-container w-full h-full flex items-center justify-center">
        <p>No forecast data avaliable</p>
      </div>
    );
  }

  const unitSymbol = unit === 'celsius' ? '°C' : '°F';

  return (
    <section className="custom-container space-y-6">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-4xl font-semibold leading-none">Forecast</h1>
        <p className="text-muted-foreground">5-day forecast</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {forecast.slice(0, 5).map((day, index) => {
          const maxTemp = convertTemperature(day.maxTemp, 'celsius', unit);
          const minTemp = convertTemperature(day.minTemp, 'celsius', unit);

          return (
            <div key={index} className="bg-accent rounded-2xl">
              <div className="p-4">
                <div className="text-center space-y-3">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {new Date(day.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>

                  <img
                    src={getWeatherIcon(day.condition)}
                    className="w-20 mx-auto"
                  />

                  <div className="space-y-1">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {Math.round(maxTemp)}° / {Math.round(minTemp)}
                      {unitSymbol}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {day.description}
                    </div>
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>💧 {day.humidity}%</span>
                    <span>💨 {day.windSpeed} m/s</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Forecast;
