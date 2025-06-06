import useWeatherData from '@/shared/hooks/use-weather-data';
import { convertTemperature } from '@/shared/lib/convertTemperature';
import { getWeatherIcon } from '@/shared/lib/weatherIcons';
import { Skeleton } from '@/shared/ui/skeleton';
import { Droplets, Eye, Gauge, Thermometer, Wind } from 'lucide-react';

const Home = () => {
  const { currentWeather, unit, selectedCity, loading, error } =
    useWeatherData();

  if (loading) {
    return (
      <div className="custom-container space-y-14">
        <div className="flex flex-row gap-2 items-center mx-auto w-fit">
          <Skeleton className="size-24 rounded-full" />
          <div className="flex flex-col gap-3">
            <Skeleton className="w-36 h-6" />
            <Skeleton className="w-20 h-4" />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-full h-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-[70px] w-full" />
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

  if (!currentWeather) {
    return (
      <div className="custom-container w-full h-full flex items-center justify-center">
        <p>No weather data avaliable</p>
      </div>
    );
  }

  const feelsLike = convertTemperature(
    currentWeather.feelsLike,
    'celsius',
    unit,
  );
  const temperature = convertTemperature(
    currentWeather.temperature,
    'celsius',
    unit,
  );
  const unitSymbol = unit === 'celsius' ? '°C' : '°F';

  return (
    <section className="custom-container space-y-14">
      {/* Header start */}
      <div className="flex flex-row gap-2 items-center justify-center">
        <img src={getWeatherIcon(currentWeather.condition)} className="w-22" />
        <div className="felx flex-col items-start">
          <p className="text-sm text-muted-foreground">{selectedCity}</p>
          <p className="text-5xl uppercase font-semibold">
            {temperature} {unitSymbol}
          </p>
          <h1 className="text-lg">
            Feels like {feelsLike} {unitSymbol}
          </h1>
        </div>
      </div>
      {/* Header end */}

      {/* Weather details start */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
          <Droplets className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Humidity
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {currentWeather.humidity}%
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
          <Wind className="h-5 w-5 text-green-600 dark:text-green-400" />
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Wind Speed
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {currentWeather.windSpeed} m/s
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
          <Eye className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Visibility
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {(currentWeather.visibility / 1000).toFixed(1)} km
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
          <Gauge className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Pressure
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {currentWeather.pressure} hPa
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
          <Thermometer className="h-5 w-5 text-red-600 dark:text-red-400" />
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              UV Index
            </div>
            <div className="font-semibold text-gray-900 dark:text-white">
              {currentWeather.uvIndex}
            </div>
          </div>
        </div>
      </div>
      {/* Weather details end */}
    </section>
  );
};

export default Home;
