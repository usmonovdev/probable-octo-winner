import { Button } from '@/shared/ui/button';
import { ChartLine, CloudSun, TrendingUpDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PageTabs = () => {
  const { pathname } = useLocation();

  return (
    <div className="custom-container">
      <div className="flex flex-row max-sm:flex-col w-full gap-2">
        <div className="w-full">
          <Button
            className="w-full"
            variant={pathname === '/' ? 'default' : 'outline'}
            size={'lg'}
            asChild
          >
            <Link to={'/'}>
              <CloudSun /> Current weather
            </Link>
          </Button>
        </div>
        <div className="w-full">
          <Button
            className="w-full"
            variant={pathname === '/forecast' ? 'default' : 'outline'}
            size={'lg'}
            asChild
          >
            <Link to={'/forecast'}>
              <TrendingUpDown /> Forecast
            </Link>
          </Button>
        </div>
        <div className="w-full">
          <Button
            className="w-full"
            variant={pathname === '/statistics' ? 'default' : 'outline'}
            size={'lg'}
            asChild
          >
            <Link to={'/statistics'}>
              <ChartLine /> Statistics
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageTabs;
