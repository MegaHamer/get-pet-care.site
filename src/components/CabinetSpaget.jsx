import React, { useEffect, useState } from "react";
import '../mysite.css';
import CardDel from "./carddeleate";
import img2 from '../img/animals/puppy.png';
import img1 from '../img/animals/maxwel.png';
import img3 from '../img/animals/citty.png';
import img4 from '../img/animals/gratcat.png';
import img5 from '../img/animals/bigdog.png';
import img6 from '../img/animals/doggy.png';

const CabinSpaget = (props) => {
   //[cards,paginCount,activePage]



    function loadUserCards(pets,setPets){

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        let requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        fetch("https://pets.сделай.site/api/users/orders", requestOptions)
        .then (response=>response.json())
        .then (response=>{
            setPets(response)
            console.log(pets)
        })
    }
    

    const [pets,setPets] = useState({data: {orders: [] } });
    
    useEffect(()=>loadUserCards(pets,setPets),[])

    

    const cards = pets.data.orders.map((pet,index)=>{ 
        return <CardDel data={pet}/>
    })

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {cards}
        </div>
    );
};

export default CabinSpaget;