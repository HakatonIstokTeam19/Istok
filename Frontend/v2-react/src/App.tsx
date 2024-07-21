import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Layout } from 'src/components';
import { Home } from './routes/Home/Home.tsx';
import { About } from './routes/About/About.tsx'
import { Furniture } from './routes/Furniture/Furniture.tsx';
import RequestSelect from './routes/RequestSelect/RequestSelect.tsx';
import Profile from './routes/Profile/Profile.tsx';
import { furnitureCategories, routes } from './configs/linksData.ts';
import { furnitureLoader, furnitureAction } from './routes/Furniture/loaders.ts';
import { MainContent } from './routes/Furniture/MainContent/MainContent.tsx';
import { ErrorElement } from './components/Error/Error.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Home /> },
      { path: routes.about, element: <About /> },
      {
        path: routes.furniture, element: <Furniture />,
        loader: furnitureLoader,
        action: furnitureAction,
        children: [
          {
            index: true,
            element: <Navigate to={furnitureCategories.popular} replace />,
          },
          { 
            path: `:id`,
            element: <MainContent />,
          }
        ],

      },
      { path: routes.requestSelect, element: <RequestSelect /> },
      { path: routes.profile, element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
