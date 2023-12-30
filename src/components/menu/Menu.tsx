import "./menu.scss"
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    //menu 
    <div className="menu">
      <div className="item">
        <span className="title">Principal</span>   
        {/* menu lateral del dashboard (inicio)*/}  
        <Link to="/">   
          <img src="/home.svg" alt="" />
          <span className="lisitem">home</span>   
        </Link>  
        {/* menu lateral de finca*/}  
        <Link to="/">   
          <img src="/note.svg" alt="" />
          <span className="lisitem">finca</span>   
        </Link>  
      </div>
      <div className="item">
        <span className="title">Principal</span>   
        {/* menu lateral del dashboard (inicio)*/}  
        <Link to="/">   
          <img src="/home.svg" alt="" />
          <span className="lisitem">home</span>   
        </Link>  
        {/* menu lateral de finca*/}  
        <Link to="/">   
          <img src="/note.svg" alt="" />
          <span className="lisitem">finca</span>   
        </Link>  
      </div>
    </div>
  )
}

export default Menu