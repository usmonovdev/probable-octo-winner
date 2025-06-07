/* eslint-disable */

import {
  mockForecastData,
  mockWeatherData,
} from '@/shared/constants/weather-mock';
import type { ForecastData, WeatherData } from '@/shared/types/weather';

class WeatherService {
  private apiKey: string = import.meta.env.VITE_WEATHERMAP_API_KEY || '';
  private baseUrl: string =
    import.meta.env.VITE_WEATHERMAP_API_URL ||
    'https://api.openweathermap.org/data/2.5';

  /**
   * Ob-havoni aniqlash
   * @param city Ob-havosi aniqlanadigan shaxar nomi
   * @returns promise
   */
  async getCurrentWeather(city: string): Promise<WeatherData> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (this.apiKey) {
      try {
        const response = await fetch(
          `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`,
        );

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        return {
          temperature: data.main.temp,
          feelsLike: data.main.feels_like,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          windSpeed: data.wind?.speed || 0,
          windDirection: data.wind?.deg || 0,
          visibility: data.visibility || 10000,
          uvIndex: 5,
          condition: data.weather[0].main.toLowerCase(),
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          timestamp: new Date(),
        };
      } catch (error) {
        throw new Error(`Failed to fetch weather data for ${city}`);
      }
    } else {
      // Api key bo'lmasa custom data ishlatiladi
      return { ...mockWeatherData[city], timestamp: new Date() };
    }
  }

  /**
   * 5 Kunlik taxminiy ob havo ma'lumotlarini olish
   * @param city Kerakli shaxar nomi
   * @returns promise
   */
  async getForecast(city: string): Promise<ForecastData[]> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (this.apiKey) {
      try {
        const response = await fetch(
          `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`,
        );

        if (!response.ok) {
          throw new Error(`Forecast API error: ${response.status}`);
        }

        const data = await response.json();

        const dailyForecasts: Record<string, any> = {};

        data.list.forEach((item: any) => {
          const date = item.dt_txt.split(' ')[0];
          if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
              date,
              temps: [],
              humidity: [],
              windSpeed: [],
              conditions: [],
              descriptions: [],
              icons: [],
            };
          }

          dailyForecasts[date].temps.push(item.main.temp);
          dailyForecasts[date].humidity.push(item.main.humidity);
          dailyForecasts[date].windSpeed.push(item.wind?.speed || 0);
          dailyForecasts[date].conditions.push(
            item.weather[0].main.toLowerCase(),
          );
          dailyForecasts[date].descriptions.push(item.weather[0].description);
          dailyForecasts[date].icons.push(item.weather[0].icon);
        });

        return Object.values(dailyForecasts)
          .slice(0, 5)
          .map((day: any) => ({
            date: day.date,
            maxTemp: Math.max(...day.temps),
            minTemp: Math.min(...day.temps),
            humidity: Math.round(
              day.humidity.reduce((a: number, b: number) => a + b, 0) /
                day.humidity.length,
            ),
            windSpeed:
              Math.round(
                (day.windSpeed.reduce((a: number, b: number) => a + b, 0) /
                  day.windSpeed.length) *
                  10,
              ) / 10,
            condition: day.conditions[0],
            description: day.descriptions[0],
            icon: day.icons[0],
          }));
      } catch (error) {
        throw new Error(`Failed to fetch forecast data for ${city}`);
      }
    } else {
      // Agar api key bo'lmasa mock data ishlatiladi
      return mockForecastData[city];
    }
  }
}

const weatherService = new WeatherService();
export { weatherService };
