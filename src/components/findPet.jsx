import { useEffect, useState } from "react";
import Card from "./card";

const FindPet = () => {
    

    return (
        <div className="row">
            <h2>Поиск по объявлениям</h2>
            <form className="form-reg">
                <input id="search-for-desc" className="form-control" type="text" placeholder="Отличительные особенности питомца" />
                <p className="btn primary-color2 btn-primary m-auto">Поиск</p>
            </form>
        </div>
    );
}

export default FindPet
