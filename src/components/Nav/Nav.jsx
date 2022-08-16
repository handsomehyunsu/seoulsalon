import React from "react";

const Nav = () => {
  {
  }
  return (
    <body id="page-top">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand" href="#page-top">
            <img src="../../public/assets/img/header-bg.jpg" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars ms-1"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#delivery">
                  Delivery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  Sister Company
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Reservation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  );
};

export default Nav;
