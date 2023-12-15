import React, { useState } from "react";
import '../mysite.css';
import { Link, useNavigate } from "react-router-dom";



const CardDel = (props) => {

    const statuses = { "onModeration": "на рассмотрении", "active": "активный", "wasFound": "хозяин найден", "archive": "в архиве" }
    let status = props.data.status;

    const navigate = useNavigate();

    const modalShow = props.modal;

    let setId = props.setId

    function deleteOrder(id) {
        setId(id)
        modalShow()
    }

    let [change, setChange] = useState(false);

    function changeOrder() {
        console.log("rtg", change)
        setChange(!change);
    }
    function saveChanges() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var formdata = new FormData();
        if (document.getElementById("kindinp").value!=""){
            formdata.append("kind", document.getElementById("kindinp").value);
        }
        if (document.getElementById("description").value!=""){
            formdata.append("description", document.getElementById("description").value);
        }
        if (document.getElementById("markinp").value!=""){
            formdata.append("mark", document.getElementById("markinp").value);
        }
        if (document.getElementById("formFile1").value!=""){
            formdata.append("photos1", document.getElementById("formFile1").files[0], "[PROXY]");
        }
        if (document.getElementById("formFile2").value!=""){
            formdata.append("photos2", document.getElementById("formFile2").files[0], "[PROXY]");
        }
        if (document.getElementById("formFile3").value!=""){
            formdata.append("photos3", document.getElementById("formFile3").files[0], "[PROXY]");
        }

        
        //formdata.append("photos1", fileInput.files[0], "[PROXY]");
        //formdata.append("mark", "tjuky");
        //formdata.append("description", "hth");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/pets/"+props.data.id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                let rel = props.reload;
                rel();
                changeOrder();
            })
            .catch(error => console.log('error', error));
    }

    function inputVision(idTop, idBot) {
        let inpTop = document.getElementById(idTop);
        let inpBot = document.getElementById(idBot);
        console.log(idTop, inpTop.value, idBot, inpBot.valu)
        console.log(idTop, (inpTop.value != ""), idBot, (inpBot.value != ""))
        if ((inpTop.value) == "" && (inpBot.value) == "") {
            inpBot.classList.add("d-none")
        }
        else {
            inpBot.classList.remove("d-none")
        }
    }

    return (
        <div className="col">
            <div className="card h-100" >
                <img src={"https://pets.сделай.site" + props.data.photos} className="card-img-top p-3" alt={props.data.alt} onClick={() => navigate("/pet/" + props.data.id, { state: props.data.id })} />
                {!change && (<div className="card-body">
                    <div className="overflow-auto mb-2" style={{ height: "16rem" }}>
                        <h5 className="card-title">{props.data.kind}  id: {props.data.id}</h5>
                        <hr />
                        <p className="card-text">Описание: {props.data.description} </p>
                        <p className="card-text">  Место нахожения: {props.data.district} </p>
                        <p>
                            Статус: {statuses[status]} <br />
                            Дата публикации: {props.data.date}
                        </p>
                        <p>
                            Клеймо: {props.data.mark}
                        </p>
                    </div>

                    {status == ("onModeration" || "active") && (<div className="btn-cardd">
                        <button onClick={() => changeOrder()} className="btn btn-primary primary-color2 text-break">Изменить</button>
                        <button onClick={() => deleteOrder(props.data.id)} className="btn btn-primary primary-color2 text-break">Удалить</button>
                    </div>)}
                </div>)}
                {change && (<div className="card-body d-flex flex-column">
                    <div className="flex-fill overflow-auto mb-2" style={{ height: "16rem" }}>
                        <label htmlFor="kindinp" className="form-label">Вид животного</label>
                        <input defaultValue={props.data.kind} name="kind" id="kindinp" className="form-control mb-2" type="text" placeholder="Вид животного" />
                        <label htmlFor="formFile1" className="form-label">Изображения</label>
                        <input name="photos1" className="form-control mb-2" type="file" id="formFile1" />
                        <input name="photos2" className="form-control mb-2" type="file" id="formFile2" />
                        <input name="photos3" className="form-control mb-2" type="file" id="formFile3" />
                        <label htmlFor="markinp" className="form-label">Клеймо</label>
                        <input defaultValue={props.data.mark} name="mark" id="markinp" className="form-control" type="text" placeholder="Клеймо" required />
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Описание</label>
                        <textarea defaultValue={props.data.description} name="description" className="form-control" id="description" rows="3" required ></textarea>
                    </div>


                    {status == ("onModeration" || "active") && (<div className="btn-cardd">
                        <button onClick={() => saveChanges()} className="btn btn-primary primary-color2 text-break">Сохранить</button>
                        <button onClick={() => changeOrder()} className="btn btn-primary primary-color2 text-break">Отмена</button>
                    </div>)}

                </div>)}
            </div>

        </div>
    );
};

export default CardDel;