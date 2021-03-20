import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../App";
import './Header.css'

const Header = () => {
  const history = useHistory();
  const handleLoginBtn = ()=>{
    history.push('login')
  }
  const [loggedInUser,setLoggedInUser] = useContext(userContext)
  console.log('hesder',loggedInUser)
  return (
    <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-around">
      <div>
        <Link to="/home" className="logoText h2 ">
          Rocket Rider
        </Link>
      </div>
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-item nav-link  h6 active" href="#">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/destination" className="nav-item nav-link h6 active" href="#">
              Destination
            </Link>
            <Link to="/blog" className="nav-item nav-link h6 active" href="#">
              Blog
            </Link>
            <Link to="/contact" className="nav-item nav-link h6 active"  href="#">
              Contact
            </Link>
              <button onClick={handleLoginBtn} className="btn btn-primary  ml-2">Login</button>
              {
                loggedInUser && loggedInUser.displayName && <h6 className="nav-item nav-link h6 active" >welcome <span className = 'text-success h5'> { ' '+ loggedInUser.displayName}</span></h6>
              }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
