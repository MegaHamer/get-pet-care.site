import { useEffect, useState } from "react";

const Sub = () => {

    

    const [isSub, setIsSub] = useState("none");

    let subscribe = ((e) => {

        e.preventDefault();
        console.log(document.getElementById("subscribe").classList.contains('was-validated'));
        if (document.getElementById("subscribe").classList.contains('was-validated')){
            var myHeaders = new Headers();
            console.log("dffef")
            var formdata = new FormData(document.getElementById("subscribe"));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/subscription", requestOptions)
            .then(response => response.status)
            .then(result => {
                console.log(result)
                if (result == 204) {
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
        }
    })

    const [answer, setAnswer] = useState("");

    function val() {
        'use strict'
        
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission

        console.log(forms)
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                console.log(form)
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } 

                    form.classList.add('was-validated')
                }, false)
            })
    }

    useEffect(()=>{val()},[])

    return (
        <div className="py-5">
            <div className="sub">
                <h2 className="text-center text-white primary-color">Подсписка на рассылку</h2>
                <form id="subscribe" onSubmit={subscribe} className="sub-form needs-validation" noValidate>
                    <p>Введите адрес электронной почты</p>
                    <input name="email" id="subInp" className="form-control me-2" type="email" placeholder="Почта" aria-label="Search" required />
                    <div className="invalid-feedback">
                        Введите правильную почту
                    </div>
                    <div className="valid-feedback">
                        {answer}
                    </div>
                    <button className="btn btn-primary primary-color2" type="submit">Подписаться</button>
                </form>
            </div>
        </div>

    );
}

export default Sub;