import { CART_ADD_ITEM, CART_ITEM_REQUEST } from "../constants/cartConstants";
import axios from "axios";



const addToCart = (productId, qty) => async (dispatch) => {
    try {
        dispatch({type:CART_ITEM_REQUEST});
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                category: data.category,
                image: data.image,
                type: data.type,
                description: data.description,
                reference: data.Reference,
                price: data.price,
                reviews: data.reviews,
                status: data.status,
                countInStock: data.countInStock,
                qty



            }
        })
    }
    catch (error) {
        console.log(error);

    }

}
export { addToCart };