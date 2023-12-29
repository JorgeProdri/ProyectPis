
//ventanas
import Inicio from './pages/home/Inicio';
import Finca from './pages/finca/Finca';
import Lotes from './pages/lotes/usuario/Lotes';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const Layout = ()=> {
    return (
      <div className="main">
      
      </div>
    )   
  }

  //ruteo o moverse entre las ventanas
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Inicio/> 
      ),
    },
    {
      path: "finca",
      element: <Finca/> 
    },
    {
      path: "lotes",
      element: <Lotes/> 
    },
  ]);

  return (
   <RouterProvider router={router}/>
  )
}

export default App
