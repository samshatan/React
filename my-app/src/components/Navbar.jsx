import { Link } from "react-router-dom";

function Navbar(props) {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to='/About'>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Contact">Contact Us</Link>
              </li>
              </ul>
              {props.searchBar ? <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> : "No serach Bar"}
          </div>
        </div>
      </nav>
    );
}
export default Navbar;