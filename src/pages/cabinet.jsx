import { useEffect, useState } from "react";
import CabinSpaget from "../components/CabinetSpaget";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagination from "../components/pagination";
import UserInfo from "../components/userInfo";

const Cabinet = () => {

    const [info,setInfo] = useState ({})

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
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => { enter() }, [])

    return (
        <div>
            <Header />
            <main>
                <section style={{ "backgroundColor": "#eee" }}>
                    <div className="container py-5">
                        <div className="row">
                            <UserInfo data={info} />
                            <h2 className="row">Размещенные объявления</h2>
                            <CabinSpaget />
                            <Pagination />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Cabinet;