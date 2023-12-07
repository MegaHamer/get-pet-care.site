import React from "react";
import '../mysite.css';
import { Link } from "react-router-dom";

const registr = () =>{
    var formdata = new FormData(document.getElementById("form-registr"));

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://pets.сделай.site/api/register", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

const RegistrForm = () => {
    return (
        <div className="reg-window">
            <h2>Регистрация</h2>
            <form className="form-reg" id="form-registr">
                <input name="name" className="form-control" type="text" placeholder="Имя пользователя" required />
                <input name="phone" className="form-control" type="tel" placeholder="Телефон"  required />
                <input name="email" className="form-control" type="email" placeholder="Почта" required />
                <input name="password" className="form-control" type="password" placeholder="Пароль" required />
                <input name="password_confirmation" className="form-control" type="password" placeholder="Подтверждение пароля" required />
                <div>
                    <input name="confirm" type="checkbox" id="sogl" required />
                    <label htmlFor="sogl">Согласие на обработку персональных данных</label>
                </div>
                <p className="btn primary-color2 btn-primary m-auto" onClick={registr}>Регистрация</p>
            </form>
            <div style={{"display":"flex"}}>
                <p>Уже зарегистрировались?</p><Link to={"/login"} className="reg-a">Войти</Link>
            </div>
            
        </div>
    );
};

export default RegistrForm;