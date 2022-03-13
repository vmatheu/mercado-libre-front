import React from 'react';
import { arrayOf, object } from 'prop-types';
import ProductCard from '../ProductCard';

const ProductList = ({products}) => {  
  return (<div className="text-left">
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>);   
}

ProductList.propTypes = {
  products: arrayOf(object).isRequired,
};

export default ProductList;
