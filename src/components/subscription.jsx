import { useState } from "react";

const Sub = () => {

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

    const [isSub, setIsSub] = useState("none");

    let subscribe = ((e) => {

        e.preventDefault();
        
        var myHeaders = new Headers();

        var formdata = new FormData(document.getElementById("subscribe"));

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/subscription", requestOptions)
            .then(response => response.status())
            .then(result => {
                console.log(result)
                if (!"error" in result) {
                    //прошло
                    setIsSub("true")
                    setAnswer("Вы успешно подписались")
                }
                else {
                    //не прошло
                    setIsSub("false")
                }
            })
            .catch(error => console.log('error', error));

    })

    const [answer,setAnswer]=useState("");

    return (
        <div className="sub">
            <h2 className="text-center text-white primary-color">Подсписка на рассылку</h2>
            <form id="subscribe" onSubmit={subscribe} className="sub-form needs-validation" noValidate>
                <p>Введите адрес электронной почты</p>
                <input name="email" className="form-control me-2" type="email" placeholder="Почта" aria-label="Search" required />
                <div className="invalid-feedback">
                    Введите правильную почту
                </div>
                <div className="valid-feedback">
                    {answer}
                </div>
                <button className="btn btn-primary primary-color2" type="submit">Подписаться</button>
            </form>
        </div>
    );
}

export default Sub;