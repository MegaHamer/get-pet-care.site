import React, { useEffect, useState } from "react";
import dog1 from '../img/animals/dog1.png';
import dog2 from '../img/animals/dog2.png';
import cat1 from '../img/animals/cat1.png';
import cat2 from '../img/animals/cat2.png';
import '../mysite.css';
import Slide from "./slide";



const MainSlider = () => {
    const slide1={
        img:dog1,
        alt:'dog',
        title:'Нашли собаку! Ул. Рокоссовского, 20',
        text:'Cобака, возраст более шести лет, беспородная.',
        active: true
    }
    const slide2={
        img:cat1,
        alt:'cat',
        title:'Кошка найдена: ул. Советской Армии',
        text:'Кот белого цвета с серыми пятнами. Очень ласковый, пухлый, тянется к людям. Прибился к офисному зданию в поисках тепла.',
        active: false
    }
    const slide3={
        img:cat2,
        alt:'cat',
        title:'Нашли кошку: Камская ул., 37',
        text:'Рыжий окрас,возраст 3 года',
        active: false
    }
    const slide4={
        img:dog2,
        alt:'dog',
        title:'Найден пёс: Новое Кюмлено, СПб',
        text:'Здравствуйте Всеволожский район Посёлок новое Кюмлено Город :Санкт-Петербург Найден пёс Прибился к дому , в сильную метель Скорее всего Швейцарская овчарка Хозяева , откликнитесь Ошейника нет Виктория https://vk.com/starnoita',
        active: false
    }

    function request(pets,setPets){

        let reqiestOptions = {
            method:'GET'
        };
        fetch("https://pets.сделай.site/api/pets/slider",reqiestOptions)
        .then (response=>response.json())
        .then (response=>setPets(response))
        /*.then(()=>{document.getElementById('download').style.display='none'})*/
    }

    const [pets,setPets] = useState({data: {pets: [] } });
    
    useEffect(()=>request(pets,setPets),[])

    const slides = pets.data.pets.map((pet,index)=>{
        if (index == 0) return <Slide data={pet} active={true}/>
        return <Slide data={pet} />
    })

    const captions = pets.data.pets.map((pet,index)=>{
        if (index == 0)
        return <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index == 0? " active " : ""} aria-current="true" aria-label={"Slide "+(index+1)}></button>
        return <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} aria-label={"Slide "+(index+1)}></button>
    })

    

    return (
        <div id="carouselExampleCaptions" className="carousel slide m-auto bg-opacity-25 p-3 obrez secondary-color" >
            <div className="carousel-indicators">
                {captions}
            </div>
            <div className="carousel-inner">
                {slides}
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