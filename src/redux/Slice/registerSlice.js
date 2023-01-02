import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const initialState = {
   userRegisterData:{
    request:"create_candidate",
    name:"",
    email:"",
    password:"",
    aadhar:"",
    address:"",
    phone:"",
    city:"",
    area:"",
    pincode:""
   },
   registerLog:false
  }


export const registerSlice =createSlice({
    name:"register",
    initialState,
    reducers:{
       registerData:(state,action)=>{
            state.userRegisterData=action.payload
       },
       registerCheck:(state,action)=>{
        state.registerLog=action.payload
       }
        }
    }
)

export const userRegister=(value)=>async(dispatch)=>{
    const {data}=await axios.post('http://karka.academy/api/action.php', JSON.stringify(value))
    if(data.status=="success"){
        dispatch(registerCheck(true));
    }
    console.log(data)
}
export const {registerData,registerCheck}=registerSlice.actions;
export default registerSlice.reducer;