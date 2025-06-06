const getWeatherIcon = (condition: string): string => {
  const iconMap: Record<string, string> = {
    sunny: '../../../public/weather-icons/sunny.svg',
    clear: '../../../public/weather-icons/clear.svg',
    cloudy: '../../../public/weather-icons/cloudy.svg',
    'partly cloudy': '../../../public/weather-icons/party_cloudy.svg',
    overcast: '../../../public/weather-icons/overcast.svg',
    rainy: '../../../public/weather-icons/rainy.svg',
    'light rain': '../../../public/weather-icons/light_rain.svg',
    'moderate rain': '../../../public/weather-icons/moderate_rain.svg',
    'heavy rain': '../../../public/weather-icons/heawy_rain.svg',
    thunderstorm: '../../../public/weather-icons/thunderstorm.svg',
    snow: '../../../public/weather-icons/snow.svg',
    fog: '../../../public/weather-icons/fog.svg',
    mist: '../../../public/weather-icons/mist.svg',
    windy: '../../../public/weather-icons/windy.svg',
  };

  return (
    iconMap[condition.toLowerCase()] ||
    '../../../public/weather-icons/sunny.svg'
  );
};

const getWeatherColor = (condition: string): string => {
  const colorMap: Record<string, string> = {
    sunny: '#f59e0b',
    clear: '#f59e0b',
    cloudy: '#6b7280',
    'partly cloudy': '#94a3b8',
    overcast: '#4b5563',
    rainy: '#3b82f6',
    'light rain': '#60a5fa',
    'moderate rain': '#2563eb',
    'heavy rain': '#1d4ed8',
    thunderstorm: '#7c3aed',
    snow: '#e5e7eb',
    fog: '#9ca3af',
    mist: '#9ca3af',
    windy: '#10b981',
  };

  return colorMap[condition] || '#6b7280';
};

export { getWeatherIcon, getWeatherColor };
