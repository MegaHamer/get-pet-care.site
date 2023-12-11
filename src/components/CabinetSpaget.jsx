import React, { useEffect, useState } from "react";
import '../mysite.css';
import CardDel from "./carddeleate";
import img2 from '../img/animals/puppy.png';
import img1 from '../img/animals/maxwel.png';
import img3 from '../img/animals/citty.png';
import img4 from '../img/animals/gratcat.png';
import img5 from '../img/animals/bigdog.png';
import img6 from '../img/animals/doggy.png';

const CabinSpaget = () => {
    const card1 ={
        img:img1,
        alt:'фото',
        title:'Найдена кошка, Боровское ш., Мск',
        text:'Найдена Кошка. Чëрная с белой грудкой, лапками и усами. На вид около 10 лет. Имеет небольшой избыточный вес. К лотку приучена.',
        tel:'+7923122345',
        name:'Олег',
        email:''
    }
    const card2 ={
        img:img2,
        alt:'фото',
        title:'Найдена собака: Щелково, Кармолино',
        text:'МО, Щелковский р-он, деревня Кармолино, замечен щенок в ошейнике, месяца 4 на вид.',
        tel:'+79778047843',
        name:'Юлия',
        email:''
    }
    const card3 ={
        img:img3,
        alt:'фото',
        title:'Найдена кошка: Соколиной Горы, 8к1',
        text:'Кошечку подбросили в подъезд, очень стресует. Породистая.',
        tel:'+7923122345',
        name:'Андрей',
        email:'pochta@mail.ru'
    }
    const card4 ={
        img:img4,
        alt:'фото',
        title:'Кошечку подбросили в подъезд, очень стресует. Породистая.',
        text:'Город Подольск, ул.Народная 29А, 3-й подъезд, на площадке девятого этажа. 29.11.2023.',
        tel:'+7923122345',
        name:'Васелиса',
        email:''
    }
    const card5 ={
        img:img5,
        alt:'фото',
        title:'Найдена собака, Ясеневая ул., Москва',
        text:'С коричневым кожаным ошейником, бегает ищет следы. На контакт не пошел',
        tel:'+7923122345',
        name:'Олеся',
        email:''
    }
    const card6 ={
        img:img6,
        alt:'фото',
        title:'Найдена собака: Строгинский б-р, 1 к2',
        text:'В магазине Перекресток сидел пес. По словам сотрудников – находился в магазине очень долго. Спокойный, с ошейником.',
        tel:'+7923122345',
        name:'Абрам',
        email:''
    }

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