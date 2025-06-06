import { weatherService } from '@/services/weather';
import { useWeatherContext } from '@/shared/contexts/weather/WeatherProvider';
import { useCallback, useEffect } from 'react';

const useWeatherData = () => {
  const { state, dispatch } = useWeatherContext();

  const changeCity = useCallback((city: string) => {
    dispatch({ type: 'CHANGE_CITY', payload: city });
  }, []);

  const toggleUnit = useCallback((unit: 'celsius' | 'fahrenheit') => {
    dispatch({ type: 'TOGGLE_UNIT', payload: unit });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  const fetchWeather = useCallback(async (city: string) => {
    dispatch({ type: 'FETCH_WEATHER' });

    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city),
      ]);

      dispatch({
        type: 'FETCH_WEATHER_SUCCESS',
        payload: { weather: weatherData, forecast: forecastData },
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_WEATHER_ERROR',
        payload:
          error instanceof Error
            ? error.message
            : 'Failed to fetch weather data',
      });
    }
  }, []);

  useEffect(() => {
    if (state.selectedCity) {
      fetchWeather(state.selectedCity);
    }
  }, [state.selectedCity, fetchWeather]);

  return {
    ...state,
    changeCity,
    toggleUnit,
    clearError,
    fetchWeather,
  };
};

export default useWeatherData;
