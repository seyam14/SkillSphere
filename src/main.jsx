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
import AddCourse from './Pages/AddCourse/AddCourse';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import FAQ from './Pages/FAQ/FAQ';

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
      path: '/addcourse',
      element: <AddCourse></AddCourse>
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
      path: '/faq',
      element: <FAQ></FAQ>
    },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
