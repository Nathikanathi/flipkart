
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom"
import NavPage from "../component/NavPage";
import {log,setData} from "../redux/Slice/Login"
function LoginPage(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {islog,path,data}=useSelector((state)=>state.login)
    let location= useLocation();
   
    useEffect(()=>{
        if(islog){
            console.log(path)
            navigate(path)
        }
    },[islog])
    return(
        <>
        <NavPage/>
            <h1 className="loginHeader text-center">Login Now</h1>
            <form className="container">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" onChange={(e)=>dispatch(setData({...data,email:e.target.value}))}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" >Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" onChange={(e)=>dispatch(setData({...data,password:e.target.value}))} />
                    </div>
                </div>
                <button type="button" className="btn btn-primary " onClick={()=>dispatch(log(data))} >Sign in</button>
                <p className="register_link text-center">New to our Website <Link to='/register'>Register now</Link></p>
            </form> 
        </>
    )
}
export default LoginPage;   