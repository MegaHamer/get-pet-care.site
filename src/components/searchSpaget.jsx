import { useEffect, useState } from "react";
import Card from "./card";
import Spiner from "./spiner";

const SearchSpaget = (props) => {
    //[cards, paginCount, activePage]

    let cards = props.cards;
    let pagin = Number(props.paginCount);
    let actPage =Number(props.activePage);

    let totalCards = cards.slice((actPage-1)*pagin,actPage*pagin);

    /*function request(pets, setPets) {

        let requestOptions = {
            method: 'GET'
        };
        fetch("https://pets.сделай.site/api/search", requestOptions)
            .then(response => response.json())
            .then(response => setPets(response))
    }


    const [pets, setPets] = useState({ data: { order: [] } });

    useEffect(() => request(pets, setPets), [])



    const cards = pets.data.order.map((pet, index) => {
        return <Card data={pet} index={index}/>
    })

    console.log(cards)*/

    return (
        <div className="row row-cols-1 row-cols-md-3 py-3" id="search-content">
            {totalCards}
        </div>
    );
}

export default SearchSpaget;