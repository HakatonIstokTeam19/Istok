import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import Home from './routes/Home/Home.tsx';
import About from './routes/About/About.tsx'
import Header from './components/Layout/Header/Header.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';
import Furniture from './routes/Furniture/Furniture.tsx';
import RequestSelect from './routes/RequestSelect/RequestSelect.tsx';
import Profile from './routes/Profile/Profile.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout header={<Header/>} sidebar={<SideMenu />}/>,
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
