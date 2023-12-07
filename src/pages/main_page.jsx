import Footer from "../components/footer";
import Header from "../components/header";
import MainSlider from "../components/mainSlider";
import MainSpaget from "../components/mainSpaget";
import Sub from "../components/subscription";



const MainPage = () => {
    return (
        <div>
            <Header />
            <main>
                <h2 className="text-center text-white primary-color">Вернувшиеся животные</h2>
                <MainSlider />
                <h2 className="text-center text-white primary-color">Найденные животные</h2>
                <MainSpaget/>
                <Sub/>
            </main>
            <Footer/>
        </div>

    );
}

export default MainPage;