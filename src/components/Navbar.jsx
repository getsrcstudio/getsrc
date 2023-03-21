import React, { useState, useEffect } from "react";

export default function Navbar(props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        show ? "bg-white animate__animated animate__slideInDown" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{ fontWeight: "bold" }}>
          {props.title}
        </a>
        <button
          className="nav navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
