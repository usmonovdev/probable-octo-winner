import CitySelector from '@/widgets/city-selector/ui/city-selector';
import SearchLocation from '@/widgets/search-location/ui/search-location';
import Settings from '@/widgets/settings/ui/settings';
import ThemeToggle from '@/widgets/theme-toggle/ui/theme-toggle';

const Header = () => {
  return (
    <header className="custom-container h-[90px] flex items-center gap-2 justify-between">
      <div className="flex flex-row items-center gap-2">
        <CitySelector />
        <SearchLocation />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div className="max-sm:hidden">
          <ThemeToggle />
        </div>
        <Settings />
      </div>
    </header>
  );
};

export default Header;
