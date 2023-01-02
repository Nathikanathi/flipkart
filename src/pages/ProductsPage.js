import {Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductsPage(){
    const value=useSelector((state)=>state.product.productsList)
   
    return(
        <>
        <div className="m-5">
            {
                value && value.map((item,index)=>{
                    return(
                        <div className=" text-center col-3 d-inline-block">
                            <div className="product-header">
                            <img src={item.img}/>
                            </div>
                            <div className="product-content">
                            <h4><Link to={`/view/${item.product_name}`}>{item.product_name}</Link></h4>
                                <p>{item.brand}</p>
                            </div> 
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default ProductsPage;