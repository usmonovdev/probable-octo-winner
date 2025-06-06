import Footer from '@/widgets/footer/ui/Footer';
import Header from '@/widgets/header/ui';
import PageTabs from '@/widgets/page-tabs/ui/page-tabs';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <PageTabs />
      <div className="h-full min-h-[700px] mt-8">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
