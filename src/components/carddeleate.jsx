import React from "react";
import '../mysite.css';
import { Link, useNavigate } from "react-router-dom";

const CardDel = (props) => {
    console.log(props)

    const statuses = { "onModeration": "на рассмотрении", "active": "активный", "wasFound": "хозяин найден", "archive": "в архиве" }

    const navigate = useNavigate();

    return (
        <div className="col">
            <div className="card h-100" onClick={()=>navigate("/pet/"+props.data.id,{state:props.data.id})}>
                <img src={"https://pets.сделай.site" + props.data.photos} className="card-img-top" alt={props.data.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.data.kind}  id: {props.data.id}</h5>
                    <hr />
                    <p className="card-text">Описание: {props.data.description} </p>
                    <p className="card-text">  Место нахожения: {props.data.district} </p>
                    <p className="card-text">
                        Статус: {statuses[props.data.status]} <br />
                        Дата публикации: {props.data.date}
                    </p>
                    <div className="btn-cardd">
                        <button className="btn btn-primary primary-color2 text-break">Изменить</button>
                        <button className="btn btn-primary primary-color2 text-break">Удалить</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDel;