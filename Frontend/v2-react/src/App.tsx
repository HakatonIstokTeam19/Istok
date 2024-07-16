import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from 'src/components';
import { Home } from './routes/Home/Home.tsx';
import { About } from './routes/About/About.tsx'
import Furniture from './routes/Furniture/Furniture.tsx';
import RequestSelect from './routes/RequestSelect/RequestSelect.tsx';
import Profile from './routes/Profile/Profile.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'furniture', element: <Furniture /> },
      { path: 'requestSelect', element: <RequestSelect /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
