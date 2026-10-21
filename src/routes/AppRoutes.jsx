import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import PhotoPage from '../pages/PhotoPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="foto/:id" element={<PhotoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;