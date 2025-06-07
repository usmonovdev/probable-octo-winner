import Forecast from '@/features/forecast';
import Home from '@/features/home';
import Statistics from '@/features/statistics';
import MainLayout from '@/layouts/main';
import { Route, Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/statistics" element={<Statistics />} />
      </Route>
      <Route
        path="*"
        element={
          <div className="w-full h-screen flex items-center justify-centerf">
            404 not found
          </div>
        }
      />
    </Routes>
  );
};

export default Pages;
