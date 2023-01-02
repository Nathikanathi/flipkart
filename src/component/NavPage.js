import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom"
import {setIsLog,setPath} from '../redux/Slice/Login'

function NavPage(){
    const {islog}=useSelector((state)=>state.login)
    const login=localStorage.getItem("log");
    let location=useLocation();
    let dispatch=useDispatch();
    let navigate=useNavigate();
    
    let userLogin=()=>{
        console.log(location.pathname);
        dispatch(setPath(location.pathname))
        navigate('/login')
    }

    let userLogOut=()=>{
        dispatch(setIsLog(false))
        localStorage.removeItem("log")
        navigate('/')
    }
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center sticky-top">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://i.pinimg.com/736x/15/aa/16/15aa1678d4ee5615c5c53ed5c9968126.jpg" alt="" width="60" height="54"/>
                </a>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to={'/'} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <Link to={'/cart'} className="nav-link active" aria-current="page">Cart</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="button">Search</button>
                        {!islog && !login?<button className="btn btn-outline-success" type="button" onClick={userLogin}>Login</button>:<button className="btn btn-outline-success" type="button" onClick={userLogOut}>Logout</button>}
                        
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavPage; 