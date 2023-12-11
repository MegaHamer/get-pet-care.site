import MainPage from "./pages/main_page";
import Cabinet from "./pages/cabinet";
import Registr from "./pages/registr";
import Login from "./pages/login";
import Addpet from "./pages/addpet";
import Catalog from "./pages/catalog";
import {Routes,Route} from "react-router-dom";
import Pet from "./pages/pet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"}element={<MainPage/>}/>
        <Route path={"/login"}element={<Login/>}/>
        <Route path={"/registr"}element={<Registr/>}/>
        <Route path={"/cabinet/:id"}element={<Cabinet/>}/>
        <Route path={"/addpet"}element={<Addpet/>}/>
        <Route path={"/catalog/:page/:query"}element={<Catalog/>}/>
        <Route path={"/catalog/:page"}element={<Catalog/>}/>
        <Route path={"/pet/:id"}element={<Pet/>}/>
      </Routes>
    </div>
  );
}
 
export default App;
