import React, { useEffect } from 'react';
//import data from '../data'; no need to import static data
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {listProducts} from '../actions/productAction'

function HomeScreen(props){
  console.log(props.match.params.id)
  //define a react hook
  
  const productList = useSelector(state => state.productList);
  const {products,loading,error}= productList;
  const dispatch = useDispatch();

  //fetch data from server
  useEffect(() => {
    
    dispatch(listProducts())
    return ()=>{
      
    };
  },[])//empty array means that the effect line only run in componentdidMounth()

    return(
    loading ? <div>Loading ...</div> : error ? <div> {error}</div>:
        <ul className="products"> 
        {
          products.map(product =>
            <li key = {products._id}>
             <div className="product">
                <Link to={'/product/'+product._id}><img className="product-Image" src={product.image} alt="product"/></Link>
                <div className="product-name">
                  <Link to={'/product/'+product._id}>{product.name}</Link>
                </div>
                <div className ="product-description">{product.type}</div>
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