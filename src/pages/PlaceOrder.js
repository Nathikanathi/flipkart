import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavPage from "../component/NavPage";


function PlaceOrder(){
  const {islog}=useSelector((state)=>state.login)
  const [order,setOrder]=useState({
    f_name:" ",
    L_name:" ",
    user_Name:" ",
    city:" ",
    state:" ",
    pincode: " "

  })
  const [afterOrder,setAfterOrder]=useState("Place Order")
  let navigate=useNavigate();
  const dispatch=useDispatch();

  let success=()=>{
   if(order.f_name && order.L_name && order.user_Name && order.city && order.state && order.pincode===null){
    alert("enter all the details")
   }else{
    alert("order placed successfully!");
      navigate('/cart')
   }
  }

    return(
        <>
        <NavPage/>
        <h2 className="text-center">Place Order</h2>
          <form className="container needs-validation">
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom01">First name</label>
                <input type="text" className="form-control" onChange={(e)=>setOrder({...order,f_name:e.target.value})}  id="validationCustom01" placeholder="First name"  required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom02">Last name</label>
                <input type="text" className="form-control" onChange={(e)=>setOrder({...order,L_name:e.target.value})} id="validationCustom02" placeholder="Last name"  required/>
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustomUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                  </div>
                  <input type="text" className="form-control" onChange={(e)=>setOrder({...order,user_Name:e.target.value})} id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom03">City</label>
                <input type="text" className="form-control"onChange={(e)=>setOrder({...order,city:e.target.value})} id="validationCustom03" placeholder="City" required/>
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom04">State</label>
                <input type="text" className="form-control" onChange={(e)=>setOrder({...order,state:e.target.value})} id="validationCustom04" placeholder="State" required/>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom05">Zip</label>
                <input type="text" className="form-control" onChange={(e)=>setOrder({...order,pincode:e.target.value})} id="validationCustom05" placeholder="Zip" required/>
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
            </div>
            <button className="btn btn-primary" onClick={success} type="button">Confirm Order</button>
           
          </form>
        </>
    )
}
export default PlaceOrder;