import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../components/Home';
import Login from '../pages/Login';
import UpdateProfile from '../pages/UpdateProfile';
import Register from '../pages/Register';
import AdventureDetails from '../pages/AdventureDetails';
import MyProfile from '../pages/MyProfile';
import PrivetRoute from './PrivetRoute';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/fakeData.json'),
      },
      {
        path: '/update',
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/details/:id',
        element: (
          <PrivetRoute>
            <AdventureDetails></AdventureDetails>
          </PrivetRoute>
        ),
        loader: () => fetch('/fakeData.json'),
      },
      {
        path: '/profile',
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
