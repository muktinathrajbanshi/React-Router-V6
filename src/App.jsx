import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movie';
import { Contact } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { getMoviesData } from './api/GetAPIData';
import { MovieDetails } from './components/UI/MovieDetails';
import { getMovieDetails } from './api/GetMovieDetails';
// import { NotFound } from './pages/NotFound';

export const App = () => {

  const router = createBrowserRouter([

    {
      path:"/",
      element:<AppLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element:<Home />
        },
        {
          path: "/about",
          element:<About />
        },
        {
          path: "/movie",
          element:<Movie />,
          loader: getMoviesData,
        },
        {
          path: "/movie:movieID",
          element:<MovieDetails />,
          loader:getMovieDetails,
        },
        {
          path: "/contact",
          element:<Contact />,
        },
        // {
        //   path:"*",
        //   element:<NotFound />
        // }
      ],
    },

    
  ]);


    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route>
    //       <Route path = "/" element={<Home />} />
    //       <Route path = "/about" element={<About />} />
    //       <Route path = "/movie" element={<Movie />} />
    //       <Route path = "/contact" element={<Contact />} />                   
    //     </Route>
    //   )
    // );

  return <RouterProvider router={router} />;
};
