import FindPet from "../components/findPet";
import Footer from "../components/footer";
import Header from "../components/header";
import MainSpaget from "../components/mainSpaget";
import Pagination from "../components/pagination";

const Catalog = () => {
    return ( 
        <div>
            <Header/>
            <main>
            <section style={{"background-color":"#eee"}}>
                    <div className="container py-5">
                        <div className="row">
                            <FindPet/>
                            <h2 class="row">Размещенные объявления</h2>
                            <MainSpaget/>
                            <Pagination/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Catalog;