import CabinSpaget from "../components/CabinetSpaget";
import Footer from "../components/footer";
import Header from "../components/header";
import Pagination from "../components/pagination";
import UserInfo from "../components/userInfo";

const Cabinet = () => {
    const info={
        name:'Чуркин Артем',
        userName:'User227_xxxXXxxx_',
        mail:"example@example.com",
        tel:"(097) 234-5678",
        adress:"Санкт-Петербург",
        days:"13"
    }
    return ( 
        <div>
            <Header/>
            <main>
                <section style={{"backgroundColor":"#eee"}}>
                    <div className="container py-5">
                        <div className="row">
                            <UserInfo data={info}/>
                            <h2 className="row">Размещенные объявления</h2>
                            <CabinSpaget/>
                            <Pagination/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
     );
}
 
export default Cabinet;