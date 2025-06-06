import type { ForecastData, WeatherData } from '@/shared/types/weather';

export interface WeatherState {
  currentWeather: WeatherData | null;
  forecast: ForecastData[] | null;
  selectedCity: string;
  unit: 'celsius' | 'fahrenheit';
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  displayOptions: {
    showHumidity: boolean;
    showWindSpeed: boolean;
    showVisibility: boolean;
    showPressure: boolean;
    showUVIndex: boolean;
  };
}

export type WeatherAction =
  | { type: 'FETCH_WEATHER' }
  | {
      type: 'FETCH_WEATHER_SUCCESS';
      payload: { weather: WeatherData; forecast: ForecastData[] };
    }
  | { type: 'FETCH_WEATHER_ERROR'; payload: string }
  | { type: 'CHANGE_CITY'; payload: string }
  | { type: 'TOGGLE_UNIT'; payload: 'celsius' | 'fahrenheit' }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' }
  | {
      type: 'DISPLAY_OPTIONS';
      payload: {
        showHumidity: boolean;
        showWindSpeed: boolean;
        showVisibility: boolean;
        showPressure: boolean;
        showUVIndex: boolean;
      };
    };

export interface WeatherStatistics {
  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  avgHumidity: number;
  avgWindSpeed: number;
}
