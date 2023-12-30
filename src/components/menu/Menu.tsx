import "./menu.scss"
import { Link } from 'react-router-dom';
import {menu} from "../../data";
const Menu = () => {
  return (
    //menu 
    <div className="menu">
      {menu.map((item) =>(
         <div className="item" key={item.id}>
         <span className="title">{item.title}</span>   
         {/* menu lateral del dashboard (inicio)*/}  
         {item.listItems.map((listItem) =>(
         <Link to="/" className="listItem" key={listItem.id}>   
           <img src={listItem.icon} alt="" />
           <span className="lisitemTitle">{listItem.title}</span>   
         </Link>  
         ))}
       </div>
      ))}
    </div>
  );
};

export default Menu