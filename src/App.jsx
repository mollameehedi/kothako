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
