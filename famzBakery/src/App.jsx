import React  from 'react';
import './App.css'
import AppWrapper from './appWrapper/AppWrapper';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppWrapper />}>
      <Route index element={<Home />}/>
    </Route>
  )
) 
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
