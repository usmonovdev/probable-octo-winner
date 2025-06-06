/**
 * Birinchi temperaturadan ikkinchi temperaturaga o'tkazish
 * @param temp Temperatura
 * @param from Qanaqa formatdan
 * @param to Qanaqa formatga
 * @returns
 */
const convertTemperature = (
  temp: number,
  from: 'celsius' | 'fahrenheit',
  to: 'celsius' | 'fahrenheit',
): number => {
  if (from === to) return temp;

  if (from === 'celsius' && to === 'fahrenheit') {
    return (temp * 9) / 5 + 32;
  }

  if (from === 'fahrenheit' && to === 'celsius') {
    return ((temp - 32) * 5) / 9;
  }

  return temp;
};

/**
 * Tempera belgisini formatlash
 * @param temp raqam yuboriladi
 * @param unit formati yuboriladi
 * @returns formatlangan temp
 */
const formatTemperature = (
  temp: number,
  unit: 'celsius' | 'fahrenheit',
): string => {
  const symbol = unit === 'celsius' ? '°C' : '°F';
  return `${Math.round(temp)}${symbol}`;
};

export { convertTemperature, formatTemperature };
