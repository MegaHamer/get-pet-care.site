import React from "react";
import '../mysite.css';
import { Link } from "react-router-dom";

const Card = (props) => {
    if (props.index>=0)
    return (
        <div className="col" id={"card"+props.index}>
            <Link to={"/pet"} style={{"textDecoration":"none"}}>
                <div className="card h-100">
                    <img src={"https://pets.сделай.site"+props.data.photos} className="card-img-top" alt={props.data.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.kind}</h5>
                        <p className="card-text">Отличительные черты: {props.data.description}. Место нахождения: {props.data.district}. Тел.: {props.data.phone}. Имя нашедшего: {props.data.name}. Клеймо: {props.data.mark} Дата: {props.data.date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
    else
    return (
        <div className="col">
            <Link to={"/pet"} style={{"textDecoration":"none"}}>
                <div className="card h-100">
                    <img src={"https://pets.сделай.site"+props.data.photos} className="card-img-top" alt={props.data.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.kind}</h5>
                        <p className="card-text">Отличительные черты: {props.data.description}. Место нахождения: {props.data.district}. Тел.: {props.data.phone}. Имя нашедшего: {props.data.name}. Клеймо: {props.data.mark} Дата: {props.data.date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;