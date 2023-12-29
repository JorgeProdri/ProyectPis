
import "./navbar.scss"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logoC.svg" alt="" />
        <span>Cacaoweb</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        {/* se borre posiblemente */}
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" 
          alt="" />
        </div>
        <img src="settings.svg" alt="" className="icon" />
        {/* se borre posiblemente */}
      </div>

    </div>
  )
}

export default Navbar