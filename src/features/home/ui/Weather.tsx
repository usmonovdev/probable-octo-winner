import useWeatherData from '@/shared/hooks/use-weather-data';

const Weather = () => {
  const data = useWeatherData();

  console.log('data', data);

  return <div>Weather</div>;
};

export default Weather;
