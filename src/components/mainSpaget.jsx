import React, { useEffect, useState } from "react";
import '../mysite.css';
import Card from "./card";
import img2 from '../img/animals/puppy.png';
import img1 from '../img/animals/maxwel.png';
import img3 from '../img/animals/citty.png';
import img4 from '../img/animals/gratcat.png';
import img5 from '../img/animals/bigdog.png';
import img6 from '../img/animals/doggy.png';

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
        return <Card data={pet}/>
    })

    console.log(cards)

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards}
        </div>
    );
};

export default MainSpaget;