import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import SignIn from './Components/pages/SignIn';
import SignUp from './Components/pages/SignUp';
import RootLaout from './Components/Layout/RootLaout';
import Home from './Components/pages/Home';
import Message from './Components/pages/Message';
import Notification from './Components/pages/Notification';
import Setting from './Components/pages/Setting';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<RootLaout/>}>
        <Route index element={<Home />} />
        <Route path='message' element={<Message />} />
        <Route path='notification' element={<Notification />} />
        <Route path='settings' element={<Setting />} />
      </Route>
    </Route>
  )
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
