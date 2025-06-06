import CITIES from '@/shared/constants/cities';
import useWeatherData from '@/shared/hooks/use-weather-data';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { MapPinIcon } from 'lucide-react';

const CitySelector = () => {
  const { selectedCity, changeCity } = useWeatherData();

  return (
    <div className="flex flex-row items-center gap-2">
      <MapPinIcon className="text-primary" />
      <Select
        key={selectedCity}
        defaultValue={selectedCity}
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
  );
};

export default CitySelector;
