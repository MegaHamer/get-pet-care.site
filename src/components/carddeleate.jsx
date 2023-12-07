import React from "react";
import '../mysite.css';
import { Link } from "react-router-dom";

const CardDel = (props) => {
    return (
        <div className="col">
            <Link to={"/pet"} style={{"textDecoration":"none"}}>
                <div className="card h-100">
                    <img src={props.data.img} className="card-img-top" alt={props.data.alt} />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.title}</h5>
                        <p className="card-text">{props.data.text} Для связи : {props.data.tel}, {props.data.name}, {props.data.email}</p>
                        <div className="btn-cardd">
                            <Link to={"/cabinet"} className="btn btn-primary primary-color2">Изменить</Link>
                            <Link to={"/cabinet"} className="btn btn-primary primary-color2">Удалить</Link>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default CardDel;