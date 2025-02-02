import React, { useEffect, useState } from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productAction';
function ProductScreen(props){
    console.log(props.match.params.id);
    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product,loading,error} = productDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
        return()=>{

        };
    },[]);
    
    const handleAddToCart = () =>{
        // function used to redirect user to another url
        props.history.push("/cart/"+ props.match.params.id  + "?qty =" + qty)
    }
    
    return (<div>
        <div className ="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        {loading ? <div> Loading Please wait ....</div>:
         error ? <div>{error}</div>:
         (<div className ="details">
         <div className ="details_image">
             <img src = {product.image} alt ="product"/> 
         </div>
         <div className="details_info">
             <ul>
                 <li>
                     <h4>{product.name}</h4>
                 </li>
                 <li>{product.rating} Stars ({product.reviews} Reviews)</li>
                 <li>{product.type}</li>
                 <li>
                     Description :
                     <div>{product.description}</div>
                 </li>
                 <li>
                     Référence:
                     <b>{product.Reference}</b>
                 </li>
                 <li>
                     Price:
                     <b>{product.price} €</b>
                     
                 </li>
                 
             </ul>

         </div>
         <div className="details_action">
             <ul>
                 <li>
                     Price :  <b>{product.price} €</b>
                 </li>
                 <li>
                     Status: {product.status}
                 </li>
                 <li>
                     Qty:<select value = {qty} onChange= {(e)=> {setQty(e.target.value)}}>
                         {[...Array(product.countInStock).keys()].map( x => 
                         <option key= {x+1} value={x+1}>
                             {x+1}

                         </option>)}
                     </select>
                     
                 </li>
                 <li>
                    {product.countInStock > 0   ? <button onClick = {handleAddToCart} className="button"> Ajouter au panier </button>
                    : <div> OUT OF STOCK ,Try another number</div>}
                 </li>
             </ul>


         </div>

     </div>)
        }
        
        
    </div>)
    
    
        
}
export default ProductScreen;
//<h1>{data.products[props.match.params.id].name}</h1>