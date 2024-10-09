import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import RootLaout from './Layout/RootLaout';
import Home from './Pages/Home';
import Message from './Pages/Message';
import Notification from './Pages/Notification';
import Setting from './Pages/Setting';
import { routes } from './router/routes';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
        <Route  path={routes.signin} element={<SignIn />} />
        <Route path={routes.signup} element={<SignUp />} />
        <Route path={routes.home} element={<RootLaout/>}>
          <Route index element={<Home />} />
          <Route path={routes.message} element={<Message />} />
         <Route path={routes.notificaiton} element={<Notification />} />
         <Route path={routes.settings} element={<Setting />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
