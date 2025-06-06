import Forecast from '@/features/forecast';
import Home from '@/features/home';
import MainLayout from '@/layouts/main';
import { Route, Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/statistics" element={<p>statistics</p>} />
        <Route path="*" element={<p>404 not found</p>} />
      </Route>
    </Routes>
  );
};

export default Pages;
