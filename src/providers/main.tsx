import { ThemeProvider } from '@/shared/contexts/theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Pages from '@/pages/pages';
import { WeatherProvider } from '@/shared/contexts/weather/WeatherProvider';

const MainProvider = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <WeatherProvider>
          <Pages />
        </WeatherProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default MainProvider;
