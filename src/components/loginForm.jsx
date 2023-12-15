import React, { useEffect, useState } from "react";
import '../mysite.css';
import { Link } from "react-router-dom";
import ModalWin from "./modalWindow";
import { useNavigate } from "react-router-dom";
import Modal from 'bootstrap/js/dist/modal';

const LoginForm = () => {

    const navigate = useNavigate();

    const [modalHeader, setModalHeader] = useState("Ошибка");
    const [modalType, setModalType] = useState("txt");
    const [modalText, setModalText] = useState("Не все поля заполнены верно");


    const login = (e) => {

        e.preventDefault();

        console.log("button click")

        if(document.getElementById("form-login").classList.contains('was-validated'))

        {var formdata = new FormData(document.getElementById("form-login"));

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
                    setModalText("Вы вошли.");
                    setModalType("txt");
                    let myModal = document.getElementById("Modal")
                    myModal.addEventListener('hidden.bs.modal', function (event) {
                        navigate("/cabinet/1")
                    })
                }
                else
                if (result.error.code === 401) {
                    setModalHeader("Ошибка");
                    setModalText("Почта или пароль неправильные");
                    setModalType("txt");
                }
                else if (result.error.code === 422) {
                    setModalHeader("Ошибка");
                    setModalText("Не все поля заполнены верно");
                    setModalType("txt");
                }
                showModal();
            })
            .catch(error => console.log('error', error));}
    }

    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()
    const [myModal,setMyModal] = useState(/*new Modal (document.getElementById("Modal"))*/);
    function showModal (){
        if (myModal._isShown) {
            myModal.hide();
        }
        else {
            myModal.show();
            
        }
    }
    useEffect(()=>{setMyModal(new Modal (document.getElementById("Modal")))},[])

    return (
        <div className="reg-window">
            <h2>Вход</h2>
            <form className="form-reg needs-validation" id="form-login" onSubmit={login} noValidate>
                <input name="email" className="form-control" type="email" placeholder="Почта" required />
                <input name="password" className="form-control" type="password" placeholder="Пароль" required pattern="(?=^.{7,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"/>
                <div className="invalid-feedback">
                    Пароль состоит не менее из 7 символов. Обязательно должны присутствовать 1 цифра, 1 строчная, 1 зашлваная буквы.
                </div>
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

                <button className="btn primary-color2 btn-primary m-auto"  data-bs-target="#Modal" >Вход</button>
            </form>
            <div style={{ "display": "flex" }}>
                <p>Еще не зарегистрировались? </p><Link to={"/registr"} className="reg-a">Регистрация</Link>
            </div>

            <ModalWin header={modalHeader} type={modalType} text_body={modalText} />
        </div>
    );
};

export default LoginForm;