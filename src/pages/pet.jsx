import PetDescription from "../components/descriptPet";
import Footer from "../components/footer";
import Header from "../components/header";
import PetSlider from "../components/petSlider";
import '../mysite.css';

const Pet = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="col">
                    <div className="card h-100">
                            <PetSlider />
                            <PetDescription/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Pet;