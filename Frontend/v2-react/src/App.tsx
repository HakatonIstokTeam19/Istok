import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import Home from './routes/Home/Home.tsx';
import About from './routes/About/About.tsx'
import Header from './components/Layout/Header/Header.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout header={<Header/>} sidebar={<SideMenu />}/>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
