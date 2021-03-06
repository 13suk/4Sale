import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import Combined from './Combined.css';
import { Link } from 'react-router-dom';

const Newnavbar2 = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light navbarCustom">
                <div class="container-fluid">
                    <a class="navbar-brand logo" href="#">4Sale</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 e">
                            <div className = "container d-flex justify-content:space-around">
                            <li class="nav-item navBarItems">
                                <a class="nav-link active navBarItems" aria-current="page" href="#"><Link to= "/">Home</Link></a>
                            </li>
                            <li class="nav-item navBarItems">
                                <a class="nav-link active navBarItems" aria-current="page" href="#"><Link to= "/buy">Buy</Link></a>
                            </li>
                            <li class="nav-item navBarItems">
                                <a class="nav-link active navBarItems" aria-current="page" href="#"><Link to= "/sell">Sell</Link></a>
                            </li>
                            <li class="nav-item navBarItems">
                                <a class="nav-link active navBarItems" aria-current="page" href="#"><Link to= "/contactUs">Contact Us</Link></a>
                            </li>
                            <li class="nav-item navBarItems">
                                <a class="nav-link navBarItems" href="#"><Link to="/aboutUs">About Us</Link></a>
                            </li>
                            </div>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Categories
                                </a>
                                </li>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Sports</a></li>
                                    <li><a class="dropdown-item" href="#">Books</a></li>
                                    <li><a class="dropdown-item" href="#">Games</a></li>
                                    <li><a class="dropdown-item" href="#">Utilities</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
    </div>
  </div>
</nav>
                </div>
                )
}

                export default Newnavbar2
