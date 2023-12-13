import { useLocation, useParams } from "react-router-dom";
import PetDescription from "../components/descriptPet";
import Footer from "../components/footer";
import Header from "../components/header";
import PetSlider from "../components/petSlider";
import '../mysite.css';
import { useEffect, useState } from "react";

const Pet = () => {

    const err = useParams();
    
    function loadInfo() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("https://pets.сделай.site/api/pets/"+err.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                setInfo(result);
                console.log(result);
            })
            .catch(error => console.log('error', error));
    }
    const [info,setInfo]=useState({data: {pet: {} } });

    useEffect(()=>{loadInfo()},[])


    return (
        <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}> 
            <Header />
            <main style={{display:"flex",flexDirection:"column",flex:"1 0 auto"}}>
                <div className="col">
                    <div className="card h-100">
                        <PetSlider photos={[info.data.pet.photos1,info.data.pet.photos2,info.data.pet.photos3]} alt={[info.data.pet.kind]}/>
                        <PetDescription data={info.data.pet} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Pet;