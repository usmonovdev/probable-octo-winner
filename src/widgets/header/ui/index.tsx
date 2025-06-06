import CitySelector from '@/widgets/city-selector/ui/city-selector';
import SearchLocation from '@/widgets/search-location/ui/search-location';
import Settings from '@/widgets/settings/ui/settings';
import ThemeToggle from '@/widgets/theme-toggle/ui/theme-toggle';

const Header = () => {
  return (
    <header className="custom-container h-[90px] flex items-center justify-between">
      <CitySelector />
      <div className="flex flex-row items-center gap-2">
        <ThemeToggle />
        <SearchLocation />
        <Settings />
      </div>
    </header>
  );
};

export default Header;
