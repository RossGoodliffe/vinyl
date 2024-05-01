import { useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SingleAlbumPage from './pages/SingleAlbumPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

import MainLayout from './layouts/MainLayout';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/albums/:id' element={<SingleAlbumPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
        )
);

  return <RouterProvider router={router} />;
}

export default App
