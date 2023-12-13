import Footer from "../components/footer";
import Header from "../components/header";
import RegistrForm from "../components/registrForm";

const Registr = () => {
    return ( 
        <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header/>
            <main style={{display:"flex",flexDirection:"column",flex:"1 0 auto"}}>
                <RegistrForm/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Registr;