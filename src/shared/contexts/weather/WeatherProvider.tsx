import type {
  WeatherAction,
  WeatherState,
} from '@/shared/contexts/weather/weather-context.model';
import { createContext, useContext, useReducer, type ReactNode } from 'react';

const initialState: WeatherState = {
  currentWeather: null,
  forecast: null,
  selectedCity: 'London',
  unit: 'celsius',
  loading: false,
  error: null,
  lastUpdated: null,
};

function weatherReducer(
  state: WeatherState,
  action: WeatherAction,
): WeatherState {
  switch (action.type) {
    case 'FETCH_WEATHER':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        currentWeather: action.payload.weather,
        forecast: action.payload.forecast,
        loading: false,
        error: null,
        lastUpdated: new Date(),
      };
    case 'FETCH_WEATHER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'CHANGE_CITY':
      return {
        ...state,
        selectedCity: action.payload,
        currentWeather: null,
        forecast: null,
      };
    case 'TOGGLE_UNIT':
      return {
        ...state,
        unit: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

const WeatherContext = createContext<{
  state: WeatherState;
  dispatch: React.Dispatch<WeatherAction>;
} | null>(null);

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
}
