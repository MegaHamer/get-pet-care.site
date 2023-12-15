import React, { useEffect, useState } from "react";
import '../mysite.css';
import Card from "./card";

const MainSpaget = () => {
    

    function request(pets,setPets){

        let requestOptions = {
            method:'GET'
        };
        fetch("https://pets.сделай.site/api/pets", requestOptions)
        .then (response=>response.json())
        .then (response=>setPets(response))
    }
    

    const [pets,setPets] = useState({data: {orders: [] } });
    
    useEffect(()=>request(pets,setPets),[])

    

    const cards = pets.data.orders.map((pet,index)=>{ 
        return <Card data={pet} key={'card'+index}/>
    })

    console.log(cards)

    return (
        <div className="container m-auto row row-cols-1 row-cols-md-3 g-4 py-4">
            {cards}
        </div>
    );
};

export default MainSpaget;