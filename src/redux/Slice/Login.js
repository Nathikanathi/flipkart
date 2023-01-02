import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
    islog:false,
    data:{
        request:'candidate_login',
        email:" ",
        password:" "
    },
   path:null
  }
  
export const Login =createSlice({
    name:"login",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data=action.payload
        },
        setIsLog:(state,action)=>{
            state.islog=action.payload
        },
        setPath:(state,action)=>{
            state.path=action.payload
        }
        }
    }
)
 
export const log=(login)=>async(dispatch)=>{
    
    const {data}= await axios.post('https://karka.academy/api/action.php', JSON.stringify(login))
    if(data.status=='success'){
        dispatch(setIsLog(true))
        localStorage.setItem("log",true)
       }
    console.log(data)
}
export const {setData,setIsLog,setPath}=Login.actions;
export default Login.reducer;



