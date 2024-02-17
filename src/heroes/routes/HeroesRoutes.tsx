import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { DcPage, MarvelPage, SearchPage } from '../pages';
import { HeroPage } from '../pages/HeroPage';

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='hero' element={<HeroPage />} />

        <Route path='/' element={<Navigate to='/marvel' />} />
      </Routes>
    </div>
    </>
  )
}
