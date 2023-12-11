import React from "react";
import logo from '../img/logo.png';
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
				<Link to={'/'} className="navbar-brand" href="index.html"><img src={logo} className="w-25 rounded-3" alt="logo"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link to={'/'} className="nav-link " aria-
                        current="page" href="index.html">Главная</Link>
					</li>
					<li className="nav-item">
						<Link to={localStorage.getItem("token")==""?"/login":'/cabinet/'+localStorage.getItem("token")} className="nav-link" href="cabinet.html">Личный кабинет</Link>
					</li>
					<li className="nav-item">
						<Link to={'/registr'} className="nav-link active" href="registr.html">Регистрация</Link>
					</li>
					<li className="nav-item">
						<Link to={'/addpet'} className="nav-link" href="addpet.html">Добавить объявление</Link>
					</li>
					<li className="nav-item">
						<Link to={'/catalog/1'} className="nav-link" href="#">Поиск по объявлениям</Link>
					</li>
					</ul>
					<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
					<button className="btn btn-primary primary-color2" type="submit">Поиск</button>
					</form>
				</div>
				</div>
			</nav>
        </header>
    );
};

export default Header;