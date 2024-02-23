import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        {
          // Poner rutas aquí para que sean públicas y privadas
          //<Route path='login' element={<LoginPage />} />
        }

        <Route path='login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

      </Routes>
    </>
  )
}
