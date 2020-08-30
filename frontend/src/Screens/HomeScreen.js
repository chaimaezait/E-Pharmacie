import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom'
function HomeScreen(props){
    return(
        <ul className="products"> 
        {
          data.products.map(product =>
            <li>
             <div className="product">
                <Link to={'/product/'+product._id}><img className="product-Image" src={product.image} alt="product"/></Link>
                <div className="product-name">
                  <Link to={'/product/'+product._id}>{product.name}</Link>
                </div>
                <div class ="product-description">{product.type}</div>
                <div className="product-price">{product.price}$</div>
                <div className="ranking">{product.rating} Stars ({product.reviews} Reviews)</div>

              </div>
            </li>
          )
        }
      </ul>
    )
}
export default HomeScreen;