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
      <Route path="*" element={<p>404 not found</p>} />
    </Routes>
  );
};

export default Pages;
