import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import HomePage from '../pages/HomePage.jsx';
import PhotoPage from '../pages/PhotoPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import DashboardPage from '../pages/DashboardPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="foto/:id" element={<PhotoPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;