import Footer from "../components/footer";
import Header from "../components/header";
import LoginForm from "../components/loginForm";

const Login = () => {
    return ( 
        <div>
            <Header/>
            <main>
                <LoginForm/>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Login;