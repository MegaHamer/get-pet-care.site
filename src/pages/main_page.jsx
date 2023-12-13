import Footer from "../components/footer";
import Header from "../components/header";
import MainSlider from "../components/mainSlider";
import MainSpaget from "../components/mainSpaget";
import Sub from "../components/subscription";



const MainPage = () => {
    return (
        <div style={{display:"flex",flexDirection:"column",minHeight:"100vh"}}>
            <Header />
            <main style={{display:"flex",flexDirection:"column",flex:"1 0 auto"}}>
                <div>
                    <h2 className="text-center text-white primary-color">Вернувшиеся животные</h2>
                    <MainSlider />
                    <h2 className="text-center text-white primary-color">Найденные животные</h2>
                    <MainSpaget />
                    <Sub />
                </div>
            </main>
            <Footer/>
        </div>

    );
}

export default MainPage;