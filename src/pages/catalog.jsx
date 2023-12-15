import { useEffect, useState } from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagination from "../components/pagination";
import SearchSpaget from "../components/searchSpaget";
import { useNavigate, useParams } from "react-router-dom";
import Spiner from "../components/spiner";

const Catalog = () => {

    //pagination
    let navigate = useNavigate();


    const err = useParams(); //[page,(query)]

    let path = window.location.pathname;
    function position (paths,root){
		return paths.includes(root);
	}

    console.log(err);

    

    function request( setPets, query="") { // получаем животных

        let requestOptions = {  
            method: 'GET'
        };

        if (position(path,"/catalog/order/")){
            //тяжелый
            fetch("https://pets.сделай.site/api/search/order?"+(err.query ? err.query : ""), requestOptions)
            .then(response => response.json())
            .then(response => {setPets(response)
                if (response.data.orders.length===0) document.getElementById("noth").classList.remove("d-none")
            else document.getElementById("noth").classList.add("d-none")})
            .then(() => { document.getElementById('spin').style.display = 'none' })
        }
        else{
            //быстрый
            fetch("https://pets.сделай.site/api/search?"+(err.query ? err.query : ""), requestOptions)
            .then(response => response.json())
            .then(response => {setPets(response)
                if (response.data.orders.length===0) document.getElementById("noth").classList.remove("d-none")
                else document.getElementById("noth").classList.add("d-none")})
            .then(() => { document.getElementById('spin').style.display = 'none' })
        }

        
    }

    let search = ()=>{
        if (position(path,"/catalog/order/")){
        let qu1 = document.getElementById("search-for-kind").value;
        let qu2 = document.getElementById("search-for-dist").value;
            navigate("/catalog/order/1/"+(qu2!==""?"district="+qu2:"")+(qu1!=="" && qu2!==""?"&":"")+(qu1!==""?"kind="+qu1:""))
        }
        else{
            let qu = document.getElementById("search-for-desc").value;
            navigate('/catalog/1'+(qu!==""?'/query='+qu:""));
        }
        
    }

    const [pets, setPets] = useState({ data: { orders: [] } }); // все животные

    useEffect(() => { request( setPets) }, [path]) 

    const cards = pets.data.orders.map((pet, index) => {
        return <Card data={pet} key={"card"+index} />
    });

    console.log(cards)

    return (
        <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header />
            <main style={{display:"flex",flexDirection:"column",flex:"1 0 auto"}}>
                <section style={{ "backgroundColor": "#eee",flex:"1" }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="row">
                                <h2>Поиск по объявлениям</h2>
                                <form className="form-reg">
                                    {position(path,"/catalog/order/")?<div className="form-reg"><input id="search-for-kind" className="form-control" type="text" placeholder="Вид питомца" />
                                    <input id="search-for-dist" className="form-control" type="text" placeholder="Место нахождения" /></div>:
                                    <input id="search-for-desc" className="form-control" type="text" placeholder="Характерные черты" />}
                                    <p className="btn primary-color2 btn-primary m-auto" onClick={search}>{position(path,"/catalog/order/")?"Поиск":"Быстрый поиск"}</p>
                                </form>
                            </div>
                            <h2 className="row">Размещенные объявления</h2>
                            <div id="spin" className="position-relative py-3">
                                    <Spiner/>
                                </div>
                                <div id="noth" >
                                    <h3>Объявлений не найдено</h3>
                                </div>
                            <SearchSpaget cards={cards} paginCount={6} activePage={err.page}/>
                            <Pagination countCards={cards.length} paginCount={6} activePage={err.page} navigate={position(path,"/catalog/order/")?"/catalog/order/":"/catalog/"} query={err.query}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Catalog;