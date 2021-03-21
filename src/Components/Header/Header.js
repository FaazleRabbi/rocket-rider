import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../App";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const handleLoginBtn = () => {
    history.push("login");
  };
  const handleSignupBtn = () => {
    history.push("signup");
  };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light rocket-nav rounded d-md-flex justify-content-around">
        <div>
          <Link to='/' class="navbar-brand text-info font-weight-bolder" >
            <span className="">Rocket Rider</span>
          </Link>
        </div>
        <div>
          <button
            class="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id=""
          >
            <Link to="/home" className="nav-item nav-link  h6 active">
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link to="/destination" className="nav-item nav-link h6 active">
              Destination
            </Link>
            <Link to="/blog" className="nav-item nav-link h6 active">
              Blog
            </Link>
            <Link to="/contact" className="nav-item nav-link h6 active">
              Contact
            </Link>
            <button onClick={handleLoginBtn} className="btn btn-primary  ml-2">
              Login
            </button>
            <button onClick={handleSignupBtn} className="btn btn-primary  ml-2">
              signup
            </button>
            {loggedInUser && loggedInUser.email && (
              <h6 className="nav-item nav-link h6 active">
                welcome{" "}
                <span className="text-success h5">
                  {" "}
                  {" " + loggedInUser.email}
                </span>
              </h6>
            )}
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Header;
