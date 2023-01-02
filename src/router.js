import Home from "./pages/Home"
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import ViewPage from "./pages/ViewPage";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import {store} from "./redux/Store";
import { Provider } from 'react-redux'
import LoginPage from "./pages/LoginPage";
import Register from "./pages/register";

function MainRoute(){
    return(
        <>
        <Provider store={store}> 
            <Router>
                <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/view/:product_name' element={<ViewPage/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/placeOrder' element={<PlaceOrder/>}/>
                <Route path='/register' element={<Register/>}/>
                </Routes>
            </Router>
        </Provider>    
        </>
    )
}
export default MainRoute;