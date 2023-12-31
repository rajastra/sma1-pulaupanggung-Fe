import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HomeLayoutWithNavbar, Landing } from './pages';
import Profile from './pages/Profile';
import RequireLogin from './auth/RequireLogin';

import Dashboard from './pages/Dashboard';
import Kelas from './pages/Kelas';

import Murid from './pages/Murid';

import Admin from './pages/Admin';

import GuruTendik from './pages/GuruTendik';
import Struktur from './pages/struktur';
import Login from './pages/Login';
import KelolaPost from './pages/KelolaPost';
import KelolaGuru from './pages/KelolaGuru';
import News from './pages/News';
import Kegiatan from './pages/Kegiatan';
import NewsDetail from './pages/NewsDetail';
import KeloProfile from './pages/KelolaProfile';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutWithNavbar />,

    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'Profile',
        element: <Profile />,
      },
      {
        path: '/gurutendik',
        element: <GuruTendik />,
      },
      {
        element: <Struktur />,
        path: '/struktur',
      },
      {
        element: <News />,
        path: '/berita',
      },
      {
        element: <Kegiatan />,
        path: '/kegiatan',
      },
      {
        element: <NewsDetail />,
        path: '/berita/detail/:id',
      },
    ],
  },
  {
    element: <RequireLogin><Dashboard /></RequireLogin>,
    path: '/Dashboard',
  },
  {
    element: <RequireLogin><Kelas /></RequireLogin>,
    path: '/kelas',
  },
  {
    element: <RequireLogin><Murid /></RequireLogin>,
    path: '/murid',
  },
  {
    element: <RequireLogin><Admin /></RequireLogin>,
    path: '/admin',
  },
  {
    element: <Login />,
    path: '/login',
  },
  {
    element: <RequireLogin><KelolaPost /></RequireLogin>,
    path: '/postingan',
  },
  {
    element: <RequireLogin><KelolaGuru /></RequireLogin>,
    path: '/guruandtendik',
  },
  {
    element: <RequireLogin><KeloProfile /></RequireLogin>,
    path: '/kelolaprofile',
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// update deploy
export default App;
