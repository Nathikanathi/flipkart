import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";
import NavPage from "../component/NavPage";
import {increment,decrement} from '../redux/Slice/UserSlice'
import {setPath} from "../redux/Slice/Login"
function Cart(){
    const selected=JSON.parse(localStorage.getItem("addToCart"));
    const [selectedProduct,setSelectedProduct]=useState(selected)
    console.log(selectedProduct)
    const dispatch=useDispatch();
    const val=useSelector((state)=>state.product.value)
    const login=useSelector((state)=>state.login.islog)
    const {path}=useSelector((state)=>state.login)
    let navigate=useNavigate();
    
    let location=useLocation();
    let remove=(id)=>{
        let del=selectedProduct.filter((value,index)=>index!=id)
        localStorage.setItem("addToCart",JSON.stringify(del));
         setSelectedProduct(del)
    }

    let total=selectedProduct.map((val)=>val.price)
    let tot=total.reduce((a,current)=>a+parseInt(current),0)
    

    let checkIsLogged=()=>{
        if(login==true){
            navigate('/placeOrder')
        }
        else{
            dispatch(setPath(location.pathname))
            navigate('/login')
        }
    }

    return(
        <>
        <NavPage/>
        <div className="d-inline-block ">
        {
            selectedProduct.map((value,index)=>{
                return(
                      <div className="col-6">
                        <div className='card mb-3 ' >
                          <div className='row no-gutters'> 
                            <div className='col-md-4 d-inline-block'>
                                <img className='kartimg' src={value.img}/>
                            </div>
                                <div className='col-md-8'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{value.p_name}</h5>
                                        <p className='card-text'>{value.price}</p>
                                        <p className='card-text'><small className='text-muted'>{value.Delivery}</small></p>
                                        <button type='button' onClick={()=>remove(index)} className='click btn btn-danger'>Remove</button>
                                        {/* <button className='click btn btn-success' type="button" onClick={()=>checkIsLogged()}>place order</button> */}
                                        <div>
                                        <span className="m-3">Qandity</span>    
                                        <button className="rounded p-2px" type="button" onClick={()=>dispatch(decrement())}>-</button>
                                        <p className="w-4 d-inline-block p-2">{val}</p>
                                        <button className="rounded p-2px" type="button" onClick={()=>dispatch(increment())}>+</button>
                                        </div>
                                        
                                    </div>
                                </div>
                          </div>
                        </div>

                      </div>
                    )
                })
            }
            </div>
            <div className="d-inline-block  align-items-start price">
                <div className="card-header">
                    PRICE DETAILS
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">products<span className="float-right m-5">{selectedProduct.length}</span></li>
                    <li className="list-group-item"><p>Delivery <span className="float-right m-5">Free Delivery</span></p></li>
                    <li className="list-group-item"><h2>Total<span className="float-right m-5">{tot}</span></h2></li>
                </ul>
                    <button className='click btn btn-success' type="button" onClick={()=>checkIsLogged()}>place order</button>
            </div>

        </>
    )
}
export default Cart;
