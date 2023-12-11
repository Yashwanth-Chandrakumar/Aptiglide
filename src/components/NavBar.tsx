import DarkModeToggle from "./DarkMode";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
function NavBar() {
  let navigate = useNavigate();
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    localStorage.setItem("auth", "false");
    console.log("auth removed");
    navigate("/");
    e.preventDefault();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand" >
            Aptiglide
          </span>
          <span className="dm">
          <DarkModeToggle/>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav" id="navlinks">
            
              <li className="nav-item">
                <span className="nav-link live" aria-current="page" >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link align-text-bottom">
                  Quizes
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  Reference
                </span>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={handleClick}>
                      
                        Logout
                        
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
