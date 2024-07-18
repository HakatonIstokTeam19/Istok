import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'src/components';
import { Home } from './routes/Home/Home.tsx';
import { About } from './routes/About/About.tsx'
import Furniture from './routes/Furniture/Furniture.tsx';
import RequestSelect from './routes/RequestSelect/RequestSelect.tsx';
import Profile from './routes/Profile/Profile.tsx';
import { routes } from './configs/linksData.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: routes.about, element: <About /> },
      { path: routes.furniture, element: <Furniture /> },
      { path: routes.requestSelect, element: <RequestSelect /> },
      { path: routes.profile, element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
