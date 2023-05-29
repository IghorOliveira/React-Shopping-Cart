import {Row, Col} from 'react-bootstrap'
import { productsArray } from '../../productsStore.js'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

const Store = () => {
  return (
    <>
      <h1 align='center' className='p-3'>Welcome to the store!</h1>
      <Row xs={1} md={3} className='g-4'>
        {productsArray.map((product, idx) => {
          let newID = uuidv4();
          return (
            <Col align='center' key={newID}>
              <ProductCard product={product}/>
            </Col>
          )
        })}
        
      </Row>
    </>
    
  )
}

export default Store