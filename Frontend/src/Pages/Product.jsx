import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay';
import Discription from '../Components/Discription';
import Relatedproducts from '../Components/Relatedproducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product =all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product ={product}/>
      <ProductDisplay product={product}/>
      <Discription/>
      <Relatedproducts/>
 
    </div>
  )
}

export default Product;
