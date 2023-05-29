import {Card, Button, Form, Row, Col} from 'react-bootstrap'
import { CartContext } from '../../CartContext.js'
import { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getProductQuantity,addOneToCart, deleteFromCart, removeOneFromCart } from '../../features/shopppingCart.js';

const ProductCard = ({product}) => {

  //const cart = useContext(CartContext);
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cart)
  console.log('cart ',cart)
  const productQuantity = getProductQuantity(cart, product.id)
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.tittle}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {
          productQuantity > 0 
          ? 
            <>
              <Form as={Row}>
                <Form.Label column='true' sm='6' >In Cart: {productQuantity}</Form.Label>
                <Col sm='6'>
                  <Button sm='6' className='mx-2' onClick={()=>dispatch(addOneToCart(product.id))}>+</Button>
                  <Button sm='6' className='mx-2' onClick={()=>dispatch(removeOneFromCart(product.id))}>-</Button>
                </Col>
              </Form>
              <Button variant='danger' className='my-2' onClick={() => dispatch(deleteFromCart(product.id))}>Remove from cart</Button>
            </>
          : 
            <Button variant='primary' onClick={() => dispatch(addOneToCart(product.id))}>Add to cart</Button>
        }
        
      </Card.Body>
    </Card>
  )
}

export default ProductCard