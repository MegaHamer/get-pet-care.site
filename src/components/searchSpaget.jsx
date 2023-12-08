import { useEffect, useState } from "react";
import Card from "./card";

const SearchSpaget = (props) => {
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
        <div className="row row-cols-1 row-cols-md-3 g-4" id="search-content">
            {props.cards}
        </div>
    );
}

export default SearchSpaget;