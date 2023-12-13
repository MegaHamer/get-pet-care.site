import { useEffect, useState } from "react";
import CabinSpaget from "../components/CabinetSpaget";
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

    const [info, setInfo] = useState({})

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
                setPets(response)
                console.log(pets)
            })
            .then (()=>{document.getElementById('spiner').style.display='none'})
    }


    const [pets, setPets] = useState({ data: { orders: [] } });

    

    const cards = pets.data.orders.map((pet, index) => {
        return <CardDel data={pet} modal={showModal}/>
    })

    const [modalHeader, setModalHeader] = useState("");
    const [modalType, setModalType] = useState("btn");
    const [modalText, setModalText] = useState("Вы уверенны что хотите удалить объявление?");
    const [field, serField] = useState("");
    const [inpValue, setInpValue] = useState("");

    const [myModal, setMyModal] = useState();
    function showModal() {
        if (myModal._isShown) {
            myModal.hide();
        }
        else {
            myModal.show();
            
        }
    }

    useEffect(() => { enter(); loadUserCards(pets, setPets);setMyModal(new Modal(document.getElementById("Modal"))) }, [])

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
                            <div>
                                <SearchSpaget cards={cards} paginCount={6} activePage={err.page} />
                                <Pagination countCards={cards.length} paginCount={6} activePage={err.page} navigate={'/cabinet/'} />
                            </div>
                            <Spiner />
                        </div>
                    </div>
                </section>
                <ModalWin header={modalHeader} inpvalue={inpValue} type={modalType} text_body={modalText} idd={field} show={showModal} />
            </main>
            <Footer />
        </div>
    );
}

export default Cabinet;