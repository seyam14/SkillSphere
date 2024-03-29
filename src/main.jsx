import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Layout/Main';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import AddCourse from './Dashboard components/AddCourse/AddCourse';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import AboutPage from './Pages/AboutPage/AboutPage';
import Dashboard from './Layout/Dashboard';
import UserHome from './Dashboard components/UserHome/UserHome';
import ActivityLog from './Dashboard components/ActivityLog/ActivityLog';
import UserProfileSettings from './Dashboard components/UserProfileSettings/UserProfileSettings';
import AdminHome from './Dashboard components/AdminHome/AdminHome';
import AllUsers from './Dashboard components/AllUsers/AllUsers';
import {
  QueryClient,
  QueryClientProvider
  // useQuery,
} from '@tanstack/react-query'
import PrivateRoute from './Route/PrivateRoute';
import CarrerRoadmap from './features pages/carrer roadmap/CarrerRoadmap';
import Recommendations from './features pages/Recommendations/Recommendations';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader : () => fetch('http://localhost:5000/addcourse'),
      },
      {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
      path: '/courses',
      element: <Courses></Courses>,
      loader : () => fetch('http://localhost:5000/addcourse'),
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
    {
      path: '/about',
      element:<AboutPage></AboutPage>
    },
    {
      path: '/roadMap',
      element:<CarrerRoadmap></CarrerRoadmap>
    },
    {
      path: '/recommendations',
      element:<Recommendations></Recommendations>
    },
    ],
  },
  {
    path: "dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
    children: [
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'activity',
        element: <ActivityLog></ActivityLog>
      },
      {
        path: 'settings',
        element: <UserProfileSettings></UserProfileSettings>
      },
      
        // admin 
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome> 
        },
        {
          path: 'users',
          element:<AllUsers></AllUsers>
        },
        {
          path: 'addcourse',
          element: <AddCourse></AddCourse>
        },
    ],
  }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
</React.StrictMode>,
)
