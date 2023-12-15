import { useEffect, useState } from "react";

const AddPetForm = () => {

    const [regOpen, setRegOpen] = useState(false);


    function autoField() {
        let token = localStorage.getItem("token")
        if (token && token != "") {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://pets.сделай.site/api/users", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setUser(result)
                })
                .catch(error => console.log('error', error));


        }
    }

    const [user, setUser] = useState({});

    useEffect(() => autoField(), []);

    const submitt = (e) => {

        e.preventDefault();

        console.log(localStorage.getItem("token"))

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        let formdata = new FormData(document.getElementById("addPetform"))

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/pets", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

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

    return (
        <div className="container">
            <h2>Добавить объявление</h2>
            <form id="addPetform" className="form-reg needs-validation" onSubmit={submitt} noValidate>
                <div >
                    <label htmlFor="nameinp" className="form-label">Имя</label>
                    <input name="name" id="nameinp" className="form-control" type="text" placeholder="Имя" pattern="^[а-яА-ЯЁё \-]{1,18}" required defaultValue={user.name} />
                </div>
                <div>
                    <label htmlFor="telinp" className="form-label">Телефон</label>
                    <input name="phone" id="telinp" className="form-control" type="tel" placeholder="Телефон" pattern="^[\+]?[0-9]{1,12}$" required defaultValue={user.phone} />
                </div>
                <div>
                    <label htmlFor="mailinp" className="form-label">Почта</label>
                    <input name="email" id="mailinp" className="form-control" type="email" placeholder="Почта" required defaultValue={user.email} />
                </div>

                <details className="reg-add-pet" >
                    <summary onClick={() => setRegOpen(!regOpen)}>
                        <strong>Регистрация</strong>
                    </summary>
                    {regOpen &&
                        (<div><hr />
                            <div className="form-reg">
                                <input name="password" className="form-control" type="password" placeholder="Пароль" pattern="(?=^.{7,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" required />
                                <input name="password_confirmation" className="form-control" type="password" placeholder="Подтверждение пароля" pattern="(?=^.{7,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$" required />
                            </div>
                            <hr />
                        </div>)
                    }
                </details>
                <div>
                    <label htmlFor="kindinp" className="form-label">Вид животного</label>
                    <input name="kind" id="kindinp" className="form-control" type="text" placeholder="Вид животного" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="formFile1" className="form-label">Изображения</label>
                    <input name="photos1" className="form-control" type="file" id="formFile1" required />
                </div>
                <div className="mb-3">
                    <input name="photos2" className="form-control" type="file" id="formFile2" />
                </div>
                <div className="mb-3">
                    <input name="photos3" className="form-control" type="file" id="formFile3" />
                </div>
                <div>
                    <label htmlFor="markinp" className="form-label">Клеймо</label>
                    <input name="mark" id="markinp" className="form-control" type="text" placeholder="Клеймо" required />
                </div>
                <div>
                    <label htmlFor="distinp" className="form-label">Место нахождения</label>
                    <input name="district" id="distinp" className="form-control" type="text" placeholder="Место нахождения"  required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Описание</label>
                    <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" required ></textarea>
                </div>
                <div>
                    <input name="confirm" type="checkbox" id="sogl" required />
                    <label htmlFor="sogl">Согласие на обработку персональных данных</label>
                    <div className="invalid-feedback">
                        Это обязательное поле.
                    </div>
                </div>
                <button className="btn primary-color2 btn-primary" type="submit">Регистрация</button>
            </form>
        </div>
    );
}

export default AddPetForm;