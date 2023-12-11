import React, { useEffect, useState } from "react";
import '../mysite.css';
import { Link, useNavigate } from "react-router-dom";
import ModalWin from "./modalWindow";
import Modal from 'bootstrap/js/dist/modal';

const registr = () => {
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

    const navigate = useNavigate();

    const [modalHeader, setModalHeader] = useState("Ошибка");
    const [modalType, setModalType] = useState("txt");
    const [modalText, setModalText] = useState("Не все поля заполнены верно");


    const registr = (e) => {

        e.preventDefault();


        if (document.getElementById("form-registr").classList.contains('was-validated')) {
            var formdata = new FormData(document.getElementById("form-registr"));

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/register", requestOptions)
                .then(response => response.status)
                .then(result => {
                    console.log(result);
                    if (result==204) {
                        localStorage.setItem("token","")
                        setModalHeader("Успех");
                        setModalText("Вы зарегистрировались.");
                        setModalType("txt");
                        let myModal = document.getElementById("Modal")
                        myModal.addEventListener('hidden.bs.modal', function (event) {
                            navigate("/login")
                        })
                    }
                    else
                        if (result == 401) {
                            setModalHeader("Ошибка");
                            setModalText("Почта или пароль неправильные");
                            setModalType("txt");
                        }
                        else if (result == 422) {
                            setModalHeader("Ошибка");
                            setModalText("Не все поля заполнены верно");
                            setModalType("txt");
                        }
                    showModal(true);
                })
                .catch(error => console.log('error', error));
        }
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
    const [myModal, setMyModal] = useState(/*new Modal (document.getElementById("Modal"))*/);
    function showModal(show) {
        if (show) {
            myModal.show();
        }
        else {
            myModal.hide();

            /*let gg = new Modal.getOrCreateInstance(do)
            $("#Modal").modal({backdrop:true})*/
        }
    }
    useEffect(() => { setMyModal(new Modal(document.getElementById("Modal"))) }, [])

    return (
        <div className="reg-window">
            <h2>Регистрация</h2>
            <form onSubmit={registr} className="form-reg needs-validation" id="form-registr" noValidate>
                <input name="name" className="form-control" type="text" placeholder="Имя пользователя" required />
                <input name="phone" className="form-control" type="tel" placeholder="Телефон" required />
                <input name="email" className="form-control" type="email" placeholder="Почта" required />
                <input name="password" className="form-control" type="password" placeholder="Пароль" required pattern="(?=^.{7,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"/>
                <input name="password_confirmation" className="form-control" type="password" placeholder="Подтверждение пароля" required pattern="(?=^.{7,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"/>
                <div>
                    <input name="confirm" type="checkbox" id="sogl" required />
                    <label htmlFor="sogl">Согласие на обработку персональных данных</label>
                </div>
                <button className="btn primary-color2 btn-primary m-auto">Регистрация</button>
            </form>
            <div style={{ "display": "flex" }}>
                <p>Уже зарегистрировались?</p><Link to={"/login"} className="reg-a">Войти</Link>
            </div>
            <ModalWin header={modalHeader} type={modalType} text_body={modalText} />
        </div>
    );
};

export default RegistrForm;