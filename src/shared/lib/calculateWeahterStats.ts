import type {
  ForecastData,
  WeatherStatisticsModel,
} from '@/shared/types/weather';

/**
 * Statistikani hisoblash uchun funksiya
 * @param forecast 5 kunlik taxminiy ob-havo
 * @returns avgTemp, minTemp, maxTemp, avgHumidity
 */
const calculateWeatherStats = (
  forecast: ForecastData[],
): WeatherStatisticsModel => {
  if (!forecast || forecast.length == 0) {
    return {
      avgTemp: 0,
      minTemp: 0,
      maxTemp: 0,
      avgHumidity: 0,
    };
  }

  const maxTemp = forecast.map((e) => e.maxTemp);
  const minTemp = forecast.map((e) => e.minTemp);
  const humidity = forecast.map((e) => e.humidity);

  const avgMaxTemp =
    maxTemp.reduce((sum, temp) => sum + temp, 0) / maxTemp.length;
  const avgMinTemp =
    minTemp.reduce((sum, temp) => sum + temp, 0) / minTemp.length;

  return {
    avgTemp: (avgMaxTemp + avgMinTemp) / 2,
    minTemp: Math.min(...minTemp),
    maxTemp: Math.max(...maxTemp),
    avgHumidity:
      humidity.reduce((sum, humidity) => sum + humidity, 0) / humidity.length,
  };
};

export default calculateWeatherStats;
