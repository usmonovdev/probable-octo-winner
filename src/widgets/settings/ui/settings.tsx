import CITIES from '@/shared/constants/cities';
import { useTheme } from '@/shared/contexts/theme/ThemeProvider';
import useWeatherData from '@/shared/hooks/use-weather-data';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Separator } from '@/shared/ui/separator';
import { Switch } from '@/shared/ui/switch';
import { Moon, SettingsIcon, Sun } from 'lucide-react';

const Settings = () => {
  const {
    selectedCity,
    changeCity,
    unit,
    toggleUnit,
    displayOptions,
    toggleDisplayOptions,
  } = useWeatherData();
  const { setTheme, theme } = useTheme();

  const onChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'icon'} className="rounded-full" variant={'outline'}>
          <SettingsIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-1">
          <DialogTitle className="mb-4">Weather app settings</DialogTitle>
          {/* Location start */}
          <div className="flex flex-row w-full justify-between">
            <p className="text-sm">Location</p>
            <Select
              defaultValue={selectedCity}
              key={selectedCity}
              onValueChange={(value) => changeCity(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="City" />
              </SelectTrigger>
              <SelectContent>
                {!CITIES.includes(selectedCity) && (
                  <SelectItem value={selectedCity}>
                    {selectedCity} (search)
                  </SelectItem>
                )}
                {CITIES.map((e) => (
                  <SelectItem key={e} value={e}>
                    {e}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Location end */}

          {/* Temperature unit start */}
          <div className="flex flex-row w-full justify-between">
            <p className="text-sm">Temperature unit</p>
            <Select
              defaultValue={unit}
              onValueChange={(value) =>
                toggleUnit(value as 'celsius' | 'fahrenheit')
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Temperature unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'fahrenheit'}>Fahrenheit (°F)</SelectItem>
                <SelectItem value={'celsius'}>Celsius (°C)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Temperature unit end */}

          {/* Temperature unit start */}
          <div className="flex flex-row w-full justify-between">
            <p className="text-sm">Dark mode</p>
            <div className="flex flex-row gap-2 items-center">
              <Sun className="size-6 text-muted-foreground" />
              <Switch onClick={onChangeTheme} checked={theme === 'dark'} />
              <Moon className="size-6 text-muted-foreground" />
            </div>
          </div>
          {/* Temperature unit end */}
          <Separator />
          {/* Display options start */}
          <div>
            <p className="text-sm font-medium text-start">Display options</p>
            <div className="space-y-4 mt-4">
              <div className="flex flex-row w-full justify-between">
                <p className="text-sm">Show Humidity</p>
                <Switch
                  checked={displayOptions.showHumidity}
                  onClick={() =>
                    toggleDisplayOptions({
                      ...displayOptions,
                      showHumidity: !displayOptions.showHumidity,
                    })
                  }
                />
              </div>

              <div className="flex flex-row w-full justify-between">
                <p className="text-sm">Show Wind Speed</p>
                <Switch
                  checked={displayOptions.showWindSpeed}
                  onClick={() =>
                    toggleDisplayOptions({
                      ...displayOptions,
                      showWindSpeed: !displayOptions.showWindSpeed,
                    })
                  }
                />
              </div>

              <div className="flex flex-row w-full justify-between">
                <p className="text-sm">Show Visibility</p>
                <Switch
                  checked={displayOptions.showVisibility}
                  onClick={() =>
                    toggleDisplayOptions({
                      ...displayOptions,
                      showVisibility: !displayOptions.showVisibility,
                    })
                  }
                />
              </div>

              <div className="flex flex-row w-full justify-between">
                <p className="text-sm">Show Pressure</p>
                <Switch
                  checked={displayOptions.showPressure}
                  onClick={() =>
                    toggleDisplayOptions({
                      ...displayOptions,
                      showPressure: !displayOptions.showPressure,
                    })
                  }
                />
              </div>

              <div className="flex flex-row w-full justify-between">
                <p className="text-sm">Show UV Index</p>
                <Switch
                  checked={displayOptions.showUVIndex}
                  onClick={() =>
                    toggleDisplayOptions({
                      ...displayOptions,
                      showUVIndex: !displayOptions.showUVIndex,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* Display options end */}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
