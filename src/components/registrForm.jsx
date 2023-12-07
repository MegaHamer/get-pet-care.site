import React from "react";
import '../mysite.css';
import { Link } from "react-router-dom";

const registr = () =>{
    var formdata = new FormData();
formdata.append("name", "");
formdata.append("phone", "");
formdata.append("email", "");
formdata.append("password", "");
formdata.append("password_confirmation", "");
formdata.append("confirm", "");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://pets.сделай.site/api/registr", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

const RegistrForm = () => {
    return (
        <div className="reg-window">
            <h2>Регистрация</h2>
            <form className="form-reg" >
                <input name="name" className="form-control" type="text" placeholder="Имя пользователя" required />
                <input className="form-control" type="tel" placeholder="Телефон"  required />
                <input className="form-control" type="email" placeholder="Почта" required />
                <input className="form-control" type="password" placeholder="Пароль" pattern="^[a-zA-Z0-9!/.,*-+()#$@;:&?]{2}$" required />
                <input className="form-control" type="password" placeholder="Подтверждение пароля" pattern="^[a-zA-Z0-9!/.,*-+()#$@;:&?]{2}$" required />
                <div>
                    <input type="checkbox" id="sogl" required />
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