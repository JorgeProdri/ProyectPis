
//ventanas
import Inicio from './pages/home/Inicio';
import Finca from './pages/finca/Finca';
import Lotes from './pages/lotes/usuario/Lotes';
import Usuario from './pages/usuario/Usuario';
import Login from './pages/login/Login';
//navb and menu
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';

//stilos
import "./styles/global.scss"

//rutas
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


function App() {

  const Layout = ()=> {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          
          <div className="menucontainer">
            <Menu/>
          </div>
          <div className="contencontainer">
            <Outlet/>

          </div>
          
        </div>
        <Footer/>   
      </div>
    )   
  }

  //ruteo o moverse entre las ventanas
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Inicio/>
        },
        {
          path: "/finca",
          element: <Finca/>
        },
        {
          path: "/lotes",
          element: <Lotes/>
        },
        {
          path: "/usuario",
          element: <Usuario/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
   
  ]);

  return <RouterProvider router={router}/>
  
}

export default App
