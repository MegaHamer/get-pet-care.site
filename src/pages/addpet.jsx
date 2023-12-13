import AddPetForm from "../components/addPetForm";
import Footer from "../components/footer";
import Header from "../components/header";

const Addpet = () => {
    return ( 
        <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header/>
            <main className="container py-5" style={{display:"flex",flexDirection:"column",flex:"1 0 auto"}}>
                <div className="container">
                    <AddPetForm />
                </div>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Addpet;