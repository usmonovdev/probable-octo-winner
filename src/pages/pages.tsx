import Weather from '@/features/home/ui/Weather';
import MainLayout from '@/layouts/main';
import { Route, Routes } from 'react-router-dom';

const Pages = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<Weather />} />
        <Route path="/forecast" element={<p>forecast</p>} />
        <Route path="/statistics" element={<p>statistics</p>} />
        <Route path="*" element={<p>404 not found</p>} />
      </Route>
    </Routes>
  );
};

export default Pages;
