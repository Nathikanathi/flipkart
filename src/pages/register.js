import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {registerData,userRegister} from '../redux/Slice/registerSlice'
function Register(){
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const data=useSelector((state)=>state.register.userRegisterData);
    const {registerLog}=useSelector((state)=>state.register)
    useEffect(()=>{
        if(registerLog==true){
            navigate('/login')
        }
    },[registerLog])
    
    return(
        <>
        <div>
            <form>
                <label>Name</label>
                <input type="text" onChange={(e)=>dispatch(registerData({...data,name:e.target.value}))}/><br/><br/>
                <label>email</label>
                <input type="email" onChange={(e)=>dispatch(registerData({...data,email:e.target.value}))}/><br/><br/>
                <label>password</label>
                <input type="password" onChange={(e)=>dispatch(registerData({...data,password:e.target.value}))}/><br/><br/>
                <label>Aadhar</label>
                <input type="number" onChange={(e)=>dispatch(registerData({...data,aadhar:e.target.value}))}/><br/><br/>
                <label>Address</label>
                <input type="text"onChange={(e)=>dispatch(registerData({...data,address:e.target.value}))}/><br/><br/>
                <label>Phone</label>
                <input type="number" onChange={(e)=>dispatch(registerData({...data,phone:e.target.value}))}/><br/><br/>
                <label>City</label>
                <input type="text"onChange={(e)=>dispatch(registerData({...data,city:e.target.value}))}/><br/><br/>
                <label>Area</label>
                <input type="text" onChange={(e)=>dispatch(registerData({...data,area:e.target.value}))}/><br/><br/>
                <label>pincode</label>
                <input type="number" onChange={(e)=>dispatch(registerData({...data,pincode:e.target.value}))}/><br/><br/>
               <button type="button" onClick={()=>dispatch(userRegister(data))}>Register</button>
            </form>
        </div>
        </>
    )
}
export default Register;