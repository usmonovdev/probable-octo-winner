export interface WeatherData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  visibility: number;
  uvIndex: number;
  condition: string;
  description: string;
  icon: string;
  timestamp: Date;
}

export interface ForecastData {
  date: string;
  maxTemp: number;
  minTemp: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  description: string;
  icon: string;
}
