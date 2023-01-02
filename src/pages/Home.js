import Footer from "../component/Footer";
import MenuPage from "../component/MenuPage";
import NavPage from "../component/NavPage";
import ProductsPage from "./ProductsPage";

function Home(){
    return(
        <>
            <NavPage/>
            <MenuPage/>
            <ProductsPage/>
            <Footer/>
        </>
    )
}
export default Home;