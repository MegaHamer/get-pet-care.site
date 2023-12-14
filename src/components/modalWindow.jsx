import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from 'bootstrap/js/dist/modal';
import { type } from "@testing-library/user-event/dist/type";


const ModalWin = (props) => {
    const navigate = useNavigate();

    const [inputt,setInputt] = useState(props.inpvalue);

    let innn = props.inpvalue

    const submt = ((e)=>{
        e.preventDefault();
        changeUser();
    }
    )

    let show = props.show

    function changeUser (){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            redirect: 'follow'
        };

        let inputValue = document.getElementById("modalInput").value;
       
        fetch("https://pets.сделай.site/api/users/"+props.idd+"?"+props.idd+"="+inputValue, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if ('error' in result){
                    //ошибка
                }
                else 
                if ('data' in result){
                    //прошло
                    //setInputt("");
                    
                    let upd = props.update;
                    upd();
                    
                    show()
                    
                    //navigate('/cabinet',)
                }
            })
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

    let deletee = props.delete;
    
    let bodys = props.type === "input" ? <form className="needs-validation input-group" onSubmit={submt} id="changeForm" noValidate> 
    {props.idd=="phone"? <input pattern="^[\+]?[0-9]{1,12}$" aria-describedby="inputGroupText" type={props.idd === "email" ? "email" : "text"} defaultValue={props.inpvalue} onChange={(e)=>setInputt(e.target.value)} className="form-control" id="modalInput" name={props.idd} placeholder={props.text_body} required/>:
    <input aria-describedby="inputGroupText" type={props.idd === "email" ? "email" : "text"} defaultValue={props.inpvalue} onChange={(e)=>setInputt(e.target.value)} className="form-control" id="modalInput" name={props.idd} placeholder={props.text_body} required/>}
    <button className="btn btn-outline-secondary" type="submit" id="inputGroupText">Сохранить изменения</button>
    </form> : (props.type == ( "btn") || props.type == ( "txt") ? props.text_body : "");
    
    let buttons = <div className="modal-footer">
        <button onClick={()=>show()} type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        {props.type == "btn" &&<button form="changeForm" onClick={()=>deletee()} type="button" className="btn btn-primary">Удалить</button>}
    </div>;
    

    return (
        <div>
            {
                /*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal">
                Запустите демо модального окна
            </button>*/
            }


            <div className="modal fade" id={props.modalid ?props.modalid:"Modal"} tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalLabel">{props.header}</h1>
                            <button onClick={()=>show()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body text-wrap text-break">
                            {bodys}
                        </div>
                        {buttons}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalWin;