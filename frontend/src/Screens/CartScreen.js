import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen(props){

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    console.log(cartItems)

    const productId = props.match.params.id;
    //Access to the query String
    const qty = props.location.search ? Number((props.location.search.split("="))[1]):1;
    const dispatch = useDispatch()
    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId,qty));
        }
    },[]);


    return (
        <div className ="Cart">
            <div className ="cart-list">
                <ul className = "cart-list-container">
                    <li>
                        <h3> Shopping Cart</h3>
                        <div> Price</div>
                    </li>
                    {
                        cartItems.length === 0 ?
                        <div> Cart is empty</div>
                        :
                        cartItems.map (item =>
                            <div>
                                <img src={item.image} alt = "product"/>
                                <div className="cart-name">
                                     <div> {item.name}</div>
                                
                                <div>
                                    Qty : 
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                </div>
                                </div>
                                <div>
                                {item.price}
                            </div>

                            </div>
                            
                            
                             )
                    }

                </ul>
            </div>
        </div>
    )

}
export default CartScreen ;
