import useWeatherData from '@/shared/hooks/use-weather-data';
import calculateWeatherStats from '@/shared/lib/calculateWeahterStats';
import { convertTemperature } from '@/shared/lib/convertTemperature';
import { Skeleton } from '@/shared/ui/skeleton';
import { motion } from 'motion/react';

const Statistics = () => {
  const { forecast, unit, loading, error } = useWeatherData();

  if (loading) {
    return (
      <div className="custom-container space-y-6">
        <div className="w-full flex justify-center items-center gap-2 flex-col">
          <Skeleton className="h-[36px] w-[160px]" />
          <Skeleton className="h-[24px] w-[110px]" />
        </div>
        <div className="max-w-sm mx-auto flex flex-col w-full gap-3">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <Skeleton key={i} className="h-[92px] w-full rounded-xl" />
            ))}
        </div>
      </div>
    );
  }

  if (error || !forecast || forecast.length === 0) {
    return (
      <div className="text-center text-destructive">
        <p className="text-lg font-semibold">No data for visualization</p>
      </div>
    );
  }

  const weatherStats = calculateWeatherStats(forecast);
  const unitSymbol = unit === 'celsius' ? '°C' : '°F';

  return (
    <div className="custom-container space-y-6">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-4xl font-semibold leading-none">Statistics</h1>
        <p className="text-muted-foreground">5-day statistics</p>
      </div>
      <div className="max-w-sm mx-auto flex flex-col w-full gap-3">
        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="p-4 bg-accent rounded-xl flex flex-col justify-between gap-2"
        >
          <h1 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Average Temperature
          </h1>
          <p className="text-2xl font-bold">
            {Math.round(
              convertTemperature(weatherStats.avgTemp, 'celsius', unit),
            )}
            {unitSymbol}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.1 },
          }}
          className="p-4 bg-accent rounded-xl flex flex-col justify-between gap-2"
        >
          <h1 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Temperature Range
          </h1>
          <p className="text-2xl font-bold">
            {Math.round(
              convertTemperature(weatherStats.minTemp, 'celsius', unit),
            )}
            ° -{' '}
            {Math.round(
              convertTemperature(weatherStats.maxTemp, 'celsius', unit),
            )}
            {unitSymbol}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 5, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.2 },
          }}
          className="p-4 bg-accent rounded-xl flex flex-col justify-between gap-2"
        >
          <h1 className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Average Humidity
          </h1>
          <p className="text-2xl font-bold">
            {Math.round(weatherStats.avgHumidity)}%
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;
