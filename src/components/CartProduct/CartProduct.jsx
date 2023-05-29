import Button from 'react-bootstrap/Button'
import { CartContext } from '../../CartContext.js'
import { useContext } from 'react'
import { getProductData } from '../../productsStore.js'
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from "../../features/shopppingCart.js"


const CartProduct = ({id, quantity}) => {

    //const cart = useContext(CartContext);
    const cart = useSelector(state=> state.cart.value)
    const dispatch = useDispatch();
    const productData = getProductData(id)

  return (
    <>
        <h3>{productData.tittle}</h3>
        <p>{quantity} total</p>
        <p>${quantity * productData.price.toFixed(2)}</p>
        <Button size='sm' onClick={() => dispatch(deleteFromCart(productData.id))}>Remove</Button>
        <hr></hr>
    </>
  )
}

export default CartProduct