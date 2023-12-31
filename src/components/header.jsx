import React, { useState } from "react";
import logo from '../img/logo.png';
import { Link, useNavigate} from "react-router-dom";

const Header = () => {

	const navigate = useNavigate()

	let path = window.location.pathname;

	function position(paths, root) {
		return paths.includes(root);
	}

	let search = (e) => {
		e.preventDefault();
		let qu = document.getElementById("fast-search").value;
		navigate('/catalog/1' + (qu !== "" ? '/query=' + qu : ""));
	}



	//debounce
	const [tips,setTips] =useState([]);
	var requestOptions = {
		method: 'GET'
	};
	function loadPets() {
		let quest = document.getElementById("fast-search").value;
		fetch("https://pets.сделай.site/api/search?query="+quest, requestOptions)
			.then(response => response.json())
			.then(result => {
				console.log(result);
				//setPets(result);
				setTips(result.data.orders.map((order, index) => { return <option value={order.description}></option> }))
			})
			.catch(error => console.log('error', error));
	}

	let loadTips = (e) => {
		if (e.target.value.length > 3) {
			setTimeout(
				loadPets()
				, 1000
			)
		}
		else{
			setTips([])
		}
	}


	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link to={'/main'} className="navbar-brand" href="index.html"><img src={logo} className="w-25 rounded-3" alt="logo" /></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to={'/main'} className={"nav-link " + (position(path, 'main') ? "active" : "")} aria-current="page" href="index.html">Главная</Link>
							</li>
							<li className="nav-item">
								<Link to={(!localStorage.getItem("token") || localStorage.getItem("token") === "") ? "/login" : '/cabinet/1'} className={"nav-link " + (position(path, 'cabinet') ? "active" : "")} href="cabinet.html">Личный кабинет</Link>
							</li>
							<li className="nav-item">
								<Link to={'/registr'} className={"nav-link " + (position(path, 'registr') || position(path, 'login') ? "active" : "")} href="registr.html">Регистрация</Link>
							</li>
							<li className="nav-item">
								<Link to={'/addpet'} className={"nav-link " + (position(path, 'addpet') ? "active" : "")} href="addpet.html">Добавить объявление</Link>
							</li>
							<li className="nav-item">
								<Link to={'/catalog/order/1'} className={"nav-link " + (position(path, 'catalog') ? "active" : "")} href="#">Поиск по объявлениям</Link>
							</li>
						</ul>
						<form onSubmit={search} className="d-flex" noValidate>
							<input onChange={(e)=>loadTips(e)} list="dtl" id="fast-search" className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" />
							<datalist id="dtl">
								{tips}
							</datalist>
							<button className="btn btn-primary primary-color2" type="submit">Поиск</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;