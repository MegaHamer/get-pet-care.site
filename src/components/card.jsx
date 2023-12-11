import React from "react";
import '../mysite.css';
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {

    const navigate = useNavigate();

    return (
        <div className="col">
            <div className="card h-100" onClick={() => navigate("/pet/" + props.data.id, { state: props.data.id })}>
                <img src={"https://pets.сделай.site" + props.data.photos} className="card-img-top" alt={props.data.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.data.kind}</h5>
                    <p className="card-text">Отличительные черты: {props.data.description}. Место нахождения: {props.data.district}. Тел.: {props.data.phone}. Имя нашедшего: {props.data.name}. Клеймо: {props.data.mark} Дата: {props.data.date}</p>
                </div>
            </div>
        </div>
    )
};

export default Card;