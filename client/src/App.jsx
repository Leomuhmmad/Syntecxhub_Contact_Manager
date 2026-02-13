import React, { createContext } from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'


export const UserContext = createContext(null);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
