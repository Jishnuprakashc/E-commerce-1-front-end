import React, { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
  <>
 {product && <Breadcrums product={product} />}
 <ProductDisplay product={product}/>
 <DescriptionBox/>
 <RelatedProduct/>
  </>
  );
};

export default Product