import useWeatherData from '@/shared/hooks/use-weather-data';
import debounce from '@/shared/lib/debounce';
import validateCity from '@/shared/lib/validateCity';
import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { ArrowUpRight, Search } from 'lucide-react';
import { useCallback, useState } from 'react';

const OTHER_CITIES = [
  'Toshkent',
  'Samarqand',
  'Buxoro',
  'Delhi',
  'Mumbai',
  'Bangalore',
];

const SearchLocation = () => {
  const { changeCity } = useWeatherData();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      const validation = validateCity(term);
      if (!validation.isValid) {
        setSearchError(validation.error || '');
      } else {
        setSearchError('');
      }
    }, 300),
    [],
  );

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleSearchSubmit = () => {
    const validation = validateCity(searchTerm);
    if (validation.isValid) {
      changeCity(searchTerm);
      setSearchTerm('');
      setSearchError('');
      setDialogOpen(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button size={'icon'} variant={'outline'} className="rounded-full">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Search city</DialogTitle>
        <div>
          <Input
            placeholder="Enter city name..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full"
            onKeyPress={(e) => e.key === 'Enter' && handleSearchSubmit()}
          />
        </div>
        {searchError && (
          <p className="text-sm text-center text-red-600 dark:text-red-400">
            {searchError}
          </p>
        )}
        <div>
          <p className="text-xs font-medium mb-2 text-muted-foreground">
            Cities
          </p>
          {OTHER_CITIES.map((e) => (
            <div
              role="button"
              onClick={() => {
                changeCity(e);
                setSearchTerm('');
                setSearchError('');
                setDialogOpen(false);
              }}
              key={e}
              className="flex flex-row justify-between items-center py-1 group hover:text-primary rounded-xl transition-colors cursor-pointer"
            >
              <p>{e}</p>
              <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary" />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchLocation;
