const getWeatherIcon = (condition: string): string => {
  const iconMap: Record<string, string> = {
    sunny: '/weather-icons/sunny.svg',
    clear: '/weather-icons/clear.svg',
    cloudy: '/weather-icons/cloudy.svg',
    'partly cloudy': '/weather-icons/party_cloudy.svg',
    overcast: '/weather-icons/overcast.svg',
    rainy: '/weather-icons/rainy.svg',
    'light rain': '/weather-icons/light_rain.svg',
    'moderate rain': '/weather-icons/moderate_rain.svg',
    'heavy rain': '/weather-icons/heawy_rain.svg',
    thunderstorm: '/weather-icons/thunderstorm.svg',
    snow: '/weather-icons/snow.svg',
    fog: '/weather-icons/fog.svg',
    mist: '/weather-icons/mist.svg',
    windy: '/weather-icons/windy.svg',
  };

  return iconMap[condition.toLowerCase()] || '/weather-icons/sunny.svg';
};

export default getWeatherIcon;
