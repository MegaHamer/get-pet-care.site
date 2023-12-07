import AddPetForm from "../components/addPetForm";
import Footer from "../components/footer";
import Header from "../components/header";

const Addpet = () => {
    return ( 
        <div>
            <Header/>
            <main>
                <AddPetForm/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Addpet;