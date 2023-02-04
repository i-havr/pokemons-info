import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';
// import { Loader } from 'components/Loader/Loader';

export default function Layout() {
  return (
    <Box display="flex" justifyContent="start">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
