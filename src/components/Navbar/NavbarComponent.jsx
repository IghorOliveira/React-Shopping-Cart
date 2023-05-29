import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import { useState, useContext } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { CartContext } from '../../CartContext.js';
import CartProduct from '../CartProduct/CartProduct.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalCost } from '../../features/shopppingCart.js';


const totalQuantitySelector = createSelector(
  state => state.cart.value, // Selector for the cart slice of the state
  cart => {
    let totalQuantity = 0;
    cart.forEach(item => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  }
);

const NavbarComponent = () => {
  //this controls if the modal appears on screen
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  //const cart = useContext(CartContext);
  const cart = useSelector((state) => state.cart.value);
  console.log(cart)

 
  const totalQuantity = useSelector(totalQuantitySelector);
  //console.log('count  ', productsCount)

  function handleClose(){
    setShow(false)
  }

  function handleShow(){
    setShow(true)
  }

  return (
    <>
      <Navbar expand='sm'>
          <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className='justify-content-end'>
            <Button onClick={handleShow}>Cart ({totalQuantity} items)</Button>
          </Navbar.Collapse>
      </Navbar>
      {/*onHide is a property that will be called whenever the modal becomes hidden, even if we did not set this event specifically*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? 
            <>
              <p>Items in your cart</p>
              {
                cart.map((currentProduct, index) =>{
                    return(
                      <CartProduct id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                    )
                  
                   } )
              }
                <h1>Total: ${getTotalCost(cart)}</h1>

                <Button variant='success' onClick={() => console.log(cart)}>Purchase Items</Button>
            </>
          :
            <h1>There are no items in your cart</h1>
          }
          
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent;