import React from "react";
import '../mysite.css';
import { Link } from "react-router-dom";

const login = () => {
    

var formdata = new FormData(document.getElementById("form-login"));

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://pets.сделай.site/api/login", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    localStorage.setItem("token",result.data.token);
  })
  .catch(error => console.log('error', error));
}
const LoginForm = () => {


    return (
        <div className="reg-window">
            <h2>Вход</h2>
            <form className="form-reg" id="form-login">
                <input name="email" className="form-control" type="email" placeholder="Почта" required />
                <input name="password" className="form-control" type="password" placeholder="Пароль" required />
                <div style={{ "display": "flex" }}>
                    <p>Забыли пароль?</p><Link to={"/"} className="reg-a">Восстановить</Link>
                </div>

                <div>
                    <input type="checkbox" id="sogl" required />
                    <label htmlFor="sogl">Согласие на обработку персональных данных</label>
                </div>
                <p className="btn primary-color2 btn-primary m-auto" onClick={login}>Регистрация</p>
            </form>
            <div style={{ "display": "flex" }}>
                <p>Еще не зарегистрировались? </p><Link to={"/registr"} className="reg-a">Регистрация</Link>
            </div>

        </div>
    );
};

export default LoginForm;