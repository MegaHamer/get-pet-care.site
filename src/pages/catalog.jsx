import { useEffect, useState } from "react";
import Card from "../components/card";
import FindPet from "../components/findPet";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagination from "../components/pagination";
import SearchSpaget from "../components/searchSpaget";
import { useParams } from "react-router-dom";

const Catalog = () => {

    function request(pets, setPets, query="") { // получаем животных

        let requestOptions = {  
            method: 'GET'
        };

        fetch("https://pets.сделай.site/api/search?query="+query, requestOptions)
            .then(response => response.json())
            .then(response => setPets(response))
    }

    let search = ()=>{
        let qu = document.getElementById("search-for-desc").value;
        request(pets,setPets,qu);
    }

    const [pets, setPets] = useState({ data: { order: [] } }); // все животные

    useEffect(() => { request(pets, setPets) }, []) // загрузка при входе на страницу

    const cards = pets.data.order.map((pet, index) => {
        return <Card data={pet} index={index} />
    });

    console.log(cards)

    //pagination

    const err = useParams(); //[page,(query)]

    console.log(err);




    return (
        <div>
            <Header />
            <main>
                <section style={{ "backgroundColor": "#eee" }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="row">
                                <h2>Поиск по объявлениям</h2>
                                <form className="form-reg">
                                    <input id="search-for-desc" className="form-control" type="text" placeholder="Отличительные особенности питомца" />
                                    <p className="btn primary-color2 btn-primary m-auto" onClick={search}>Поиск</p>
                                </form>
                            </div>
                            <h2 className="row">Размещенные объявления</h2>
                            <SearchSpaget cards={cards} paginCount={6} activePage={err.page}/>
                            <Pagination countCards={cards.length} paginCount={6} activePage={err.page}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Catalog;