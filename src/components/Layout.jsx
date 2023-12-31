import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
const Layout = (props) => {
  return (
    <div>
    <header className="p-2 bg-success bg-opacity-75 text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Navbar.Brand href="/" className=" fw-bold fs-4 fst-italic">e-Commerce Template</Navbar.Brand>
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li className="px-3">
          <NavLink to="/" className="nav-link px-2 fw-bold fs-5" style={({ isActive }) =>
                isActive
                  ? { color: "#008000",borderBottom:"3px solid red"}
                  : { color: "#FFFFFF"}
              }>Home</NavLink>
           </li>
          <li className="px-3">
          <NavLink to="/contactPage" className="nav-link px-2 fw-bold fs-5" style={({ isActive }) =>
                isActive
                  ? { color: "#008000",borderBottom:"3px solid red"}
                  : { color: "#FFFFFF"}
              }>Contact</NavLink>
          </li>
          <li className="px-3">
          <NavLink to="/blogPage" className="nav-link px-2 fw-bold fs-5" style={({ isActive }) =>
                isActive
                ? { color: "#008000",borderBottom:"3px solid red"}
                : { color: "#FFFFFF"}
              }>Blog</NavLink>
          </li>
        
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form>
        <div className="text-start">
          <NavLink to="/cartPage" className="btn btn-success me-2 position-relative" data-bs-toggle="tooltip" title="Cart">
          <i className="bi bi-cart4">
          <span className="position-absolute top-0 start-100  translate-middle badge rounded-pill bg-danger">0</span>
          </i></NavLink>
          <NavLink to="/wishPage" className="btn btn-success me-2 position-relative" data-bs-toggle="tooltip" title="Wish List">
          <i className="bi bi-heart">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
          </i></NavLink>
          
        </div>
        <div className="text-end">
          <NavLink to="/loginPage" className="btn btn-light me-2 btn-outline-success">Login</NavLink>
          <NavLink to="/signInPage" className=" btn btn-primary">Sign-up</NavLink>
        </div>
      </div>
    </div>
  </header>
      {props.children}
    </div>
  );
};
export default Layout;
