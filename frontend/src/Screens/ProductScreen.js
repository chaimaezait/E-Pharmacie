import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
function ProductScreen(props){
    console.log(props.match.params.id);
    //var product = data.products.find(x => x._id === props.match.params.id);
    return (<div>
        <div className ="back-to-result">
            <Link to="/">Back to result</Link>
        </div>
        <div className ="details">
            <div className ="details_image">
                <img src = {data.products[props.match.params.id].image} alt ="product"/> 
            </div>
            <div className="details_info">
                <ul>
                    <li>
                        <h4>{data.products[props.match.params.id].name}</h4>
                    </li>
                    <li>{data.products[props.match.params.id].rating} Stars ({data.products[props.match.params.id].reviews} Reviews)</li>
                    <li>{data.products[props.match.params.id].type}</li>
                    <li>
                        Description :
                        <div>{data.products[props.match.params.id].description}</div>
                    </li>
                    <li>
                        Référence:
                        <b>{data.products[props.match.params.id].Reference}</b>
                    </li>
                    <li>
                        Price:
                        <b>{data.products[props.match.params.id].price} €</b>
                        
                    </li>
                    
                </ul>

            </div>
            <div className="details_action">
                <ul>
                    <li>
                        Price :  <b>{data.products[props.match.params.id].price} €</b>
                    </li>
                    <li>
                        Status: {data.products[props.match.params.id].status}
                    </li>
                    <li>
                        Qty:<select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        
                    </li>
                    <li>
                        <button className="button"> Ajouter au panier </button>
                    </li>
                </ul>


            </div>

        </div>
        
    </div>)
    
    
        
}
export default ProductScreen;
//<h1>{data.products[props.match.params.id].name}</h1>