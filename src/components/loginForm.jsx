import React, { useState } from "react";
import '../mysite.css';
import { Link } from "react-router-dom";
import ModalWin from "./modalWindow";


const LoginForm = () => {

    const [modalHeader, setModalHeader] = useState("");
    const [modalType, setModalType] = useState("txt");
    const [modalText, setModalText] = useState("");

    const login = (e) => {

        e.preventDefault();

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
                if ('data' in result) {
                    localStorage.setItem("token", result.data.token);
                    setModalHeader("Успех");
                    setModalText("Вы вошли. Ваш токен: " + localStorage.getItem("token"));
                    setModalType("txt");
                }
                else
                    if (result.error.code == 401) {
                        setModalHeader("Ошибка");
                        setModalText("Почта или пароль неправильные");
                        setModalType("txt");
                    }
                    else if (result.error.code == 422) {
                        setModalHeader("Ошибка");
                        setModalText("Не все поля заполнены верно");
                        setModalType("txt");
                    }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="reg-window">
            <h2>Вход</h2>
            <form className="form-reg" id="form-login" onSubmit={login}>
                <input name="email" className="form-control" type="email" placeholder="Почта" required />
                <input name="password" className="form-control" type="password" placeholder="Пароль" required />
                <div style={{ "display": "flex" }}>
                    <p>Забыли пароль?</p><Link to={"/"} className="reg-a">Восстановить</Link>
                </div>
                {
                /*
                   <div>
                    <input type="checkbox" id="sogl" required />
                    <label htmlFor="sogl">Согласие на обработку персональных данных</label>
                </div>
                */
                }

                <button className="btn primary-color2 btn-primary m-auto" data-bs-toggle="modal" data-bs-target="#Modal" >Регистрация</button>
            </form>
            <div style={{ "display": "flex" }}>
                <p>Еще не зарегистрировались? </p><Link to={"/registr"} className="reg-a">Регистрация</Link>
            </div>

            <ModalWin header={modalHeader} type={modalType} text_body={modalText} />
        </div>
    );
};

export default LoginForm;