const getWeatherIcon = (condition: string): string => {
  const iconMap: Record<string, string> = {
    thunderstorm: '/weather-icons/thunderstorm.svg',
    drizzle: '/weather-icons/light_rain.svg',
    rain: '/weather-icons/rainy.svg',
    snow: '/weather-icons/snow.svg',
    mist: '/weather-icons/fog.svg',
    smoke: '/weather-icons/fog.svg',
    haze: '/weather-icons/fog.svg',
    dust: '/weather-icons/fog.svg',
    fog: '/weather-icons/fog.svg',
    sand: '/weather-icons/fog.svg',
    ash: '/weather-icons/fog.svg',
    squall: '/weather-icons/windy.svg',
    tornado: '/weather-icons/windy.svg',
    clear: '/weather-icons/clear.svg',
    clouds: '/weather-icons/cloudy.svg',
  };

  return iconMap[condition.toLowerCase()] || '/weather-icons/clear.svg';
};

export default getWeatherIcon;
