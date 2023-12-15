import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagination from "../components/pagination";
import UserInfo from "../components/userInfo";
import { useNavigate, useParams } from "react-router-dom";
import SearchSpaget from "../components/searchSpaget";
import CardDel from "../components/carddeleate";
import Spiner from "../components/spiner";
import ModalWin from "../components/modalWindow";
import Modal from 'bootstrap/js/dist/modal';

const Cabinet = () => {

    const [modalHeader, setModalHeader] = useState("Удалить");
    const [modalType, setModalType] = useState("btn");
    const [modalText, setModalText] = useState("Вы уверенны что хотите удалить объявление?");
    const [field, setField] = useState("eee");
    const [inpValue, setInpValue] = useState("");

    const [info, setInfo] = useState({registrationDate:0})

    const navigate = useNavigate();

    function enter() {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://pets.сделай.site/api/users", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setInfo(result)
                if ("error" in result) {
                    //window.location.reload();
                    navigate("/login");

                }
            })
            .catch(error => console.log('error', error));
    }

    function loadUserCards(pets, setPets) {

        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        let requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        fetch("https://pets.сделай.site/api/users/orders", requestOptions)
            .then(response => response.json())
            .then(response => {
                setPets(response);
                console.log(response);
                if (response.data.orders.length===0) document.getElementById("noth").classList.remove("d-none")
                else document.getElementById("noth").classList.add("d-none");
            })
            .then(() => { document.getElementById('spin').style.display = 'none' })
            //.then(response => {if (response.data.orders.length==0) document.getElementById("noth").classList.add("d-block")})
    }


    const [pets, setPets] = useState({ data: { orders: [] } });

    const [idCard, setIdCard] = useState("");

    let reload = ()=>loadUserCards(pets, setPets);

    const cards = pets.data.orders.map((pet, index) => {
        return <CardDel key={"card"+index} reload={reload} setId={setIdCard} data={pet} modal={showModal} />
    })




    const [myModal, setMyModal] = useState();

    function showModal() {
        if (myModal._isShown) {
            myModal.hide();
        }
        else {
            myModal.show();

        }
    }


    let deletee = () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("token"));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
          };
          
        fetch("https://pets.сделай.site/api/users/orders/"+idCard, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                loadUserCards(pets, setPets)
                showModal()
            })
            .catch(error => console.log('error', error));
        
    }


    useEffect(() => {
        enter(); loadUserCards(pets, setPets); setMyModal(new Modal(document.getElementById("modalCard")));


    }, [])

    const err = useParams(); //[id,page]

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ display: "flex", flexDirection: "column", flex: "1 0 auto" }}>
                <section style={{ "backgroundColor": "#eee", flex: "1" }}>
                    <div className="container py-5">
                        <div className="">
                            <UserInfo data={info} update={enter} />
                            <h2 className="row">Размещенные объявления</h2>
                            <div >
                                <div id="spin" className="position-relative py-3">
                                    <Spiner/>
                                </div>
                                <div id="noth" className="d-none">
                                    <h3>Объявлений не найдено</h3>
                                </div>
                                <SearchSpaget cards={cards} paginCount={6} activePage={err.page} />
                                <Pagination countCards={cards.length} paginCount={6} activePage={err.page} navigate={'/cabinet/'} />
                            
                            </div>
                        </div>
                    </div>
                </section>
                <ModalWin delete={deletee} modalid={"modalCard"} header={modalHeader} inpvalue={inpValue} type={modalType} text_body={modalText} idd={field} show={showModal} />
            </main>
            <Footer />
        </div>
    );
}

export default Cabinet;