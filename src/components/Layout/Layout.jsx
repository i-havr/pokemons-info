import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';
import { Footer } from 'components/Footer/Footer';
// import { Loader } from 'components/Loader/Loader';

export default function Layout() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
        <Footer />
      </Suspense>
    </Box>
  );
}
