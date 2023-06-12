import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { LayoutStyled } from './Layout.styled';
// import { Loader } from 'components/Loader/Loader';

export default function Layout() {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
        <Footer />
      </Suspense>
    </LayoutStyled>
  );
}
