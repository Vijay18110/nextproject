import React from "react";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="#">
             Logo
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-3 fw-semibold">
              <li className="nav-item"><a className="nav-link" href="#">New</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Collections</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Furniture</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Outdoor</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Decor</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Lightings</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Ready to Ship</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Shop By Style</a></li>
              <li className="nav-item"><a className="nav-link text-danger" href="#">Warehouse Sale</a></li>
            </ul>

            <div className="d-flex gap-3 align-items-center">
              <i className="bi bi-person fs-5"></i>
              <i className="bi bi-search fs-5"></i>
              <i className="bi bi-heart fs-5"></i>
              <i className="bi bi-bag fs-5"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="offcanvas offcanvas-start" id="mobileMenu">
        <div className="offcanvas-header">
          <h5 className="fw-bold">Menu</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav fw-semibold">
            <li className="nav-item"><a className="nav-link" href="#">New</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Collections</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Furniture</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Outdoor</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Decor</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Lightings</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ready to Ship</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Shop By Style</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#">Warehouse Sale</a></li>
          </ul>
        </div>
      </div>

     
 
    </>
  );
}