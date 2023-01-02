import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import NavPage from "../component/NavPage";

function ViewPage(){
    let params=useParams();
    const value=useSelector((state)=>state.product.productsList)
    if(!localStorage.getItem("addToCart")){
        localStorage.setItem("addToCart",JSON.stringify([]))
    }
    
    const add=(id)=>{
        let cartProduct=JSON.parse(localStorage.getItem("addToCart"));
        value.map((item,index)=>{
            item.productMenu.map((val,i)=>{
                if(val.id==id){
                    cartProduct.push(val)
                    localStorage.setItem("addToCart",JSON.stringify(cartProduct))
                }
            })
          })
       }

    return(
        <>
        {/* <NavPage/> */}
        <div>
        <NavPage/>
            {
                value.map((items,index)=>{
                    return(
                        <div className="row row-cols-1 row-cols-md-3 g-3 m-2">
                        {
                        items.productMenu.map((val,point)=>{
                          if(items.product_name==params.product_name){
                            console.log(val)
                              return(
                                
                                    <div className="col">
                                      <div className="card h-100" style={{width:18+'rem'}}>
                                          
                                          <img src={val.img} className="card-img-top h-50" />
                                        
                                        <div className="card-body h-50">
                                          <h5 className="card-title">{val.p_name}</h5>
                                          <p className="card-text">{val.price}</p>
                                          <p className="card-text">{val.size}</p>
                                          <p className="card-text"><small className="text-muted">{val.Delivery}</small></p>
                                        </div>
                                        <div class="card-footer">
                                          <button type="button" className="d-grid gap-2 col-6 mx-auto btn btn-success" onClick={()=>add(val.id)}>Add To Cart</button>
                                        </div>
                                      </div>
                                    </div>
                                  
                                )}
                          })
                        }
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default ViewPage; 

