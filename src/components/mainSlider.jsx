import React, { useEffect, useState } from "react";
import '../mysite.css';
import Slide from "./slide";
import Spiner from "./spiner";



const MainSlider = () => {
    
    function request(setPets){

        let reqiestOptions = {
            method:'GET'
        };

        fetch("https://pets.сделай.site/api/pets/slider",reqiestOptions)
        .then (response=>response.json())
        .then (response=>setPets(response))
        .then (()=>{document.getElementById('spin').style.display='none'})
    }

    const [pets,setPets] = useState({data: {pets: [] } });
    
    useEffect(()=>request(setPets),[])

    const slides = pets.data.pets.map((pet,index)=>{
        console.log(<Slide data={pet} active={true} key={'slide'+index}/>)
        if (index === 0) return <Slide data={pet} active={true} key={'slide'+ index}/>
        return <Slide key={'slide'+index} data={pet} />
    })

    const captions = pets.data.pets.map((pet,index)=>{
        if (index === 0)
        return <button key={'button'+index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0? " active " : ""} aria-current="true" aria-label={"Slide "+(index+1)}></button>
        return <button key={'button'+index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-label={"Slide "+(index+1)}></button>
    })

    

    return (
        <div id="carouselExampleCaptions" className="carousel slide m-auto bg-opacity-25 p-3 obrez secondary-color" >
            <div className="carousel-indicators">
                {captions}
            </div>
            <div className="carousel-inner">
                {slides}
                <div id="spin">
                    <Spiner/>
                </div>
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
};

export default MainSlider;