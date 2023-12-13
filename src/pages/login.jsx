import Footer from "../components/footer";
import Header from "../components/header";
import LoginForm from "../components/loginForm";
import ModalWin from "../components/modalWindow";

const Login = () => {
    return ( 
        <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header/>
            <main style={{display:"flex",flexDirection:"column",flex:"1 0 auto"}}>
                <LoginForm/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Login;