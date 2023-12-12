import AddPetForm from "../components/addPetForm";
import Footer from "../components/footer";
import Header from "../components/header";

const Addpet = () => {
    return ( 
        <div>
            <Header/>
            <main className="container py-5">
                <div className="container">
                    <AddPetForm />
                </div>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Addpet;