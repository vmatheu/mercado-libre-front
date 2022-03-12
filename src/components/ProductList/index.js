import React from 'react';
import { arrayOf, object } from 'prop-types';
import ProductCard from 'components/ProductCard';

const ProductList = ({ products }) => {
  return (<div className="card-deck mb-3 text-center">
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>);
};

ProductList.propTypes = {
  products: arrayOf(object).isRequired,
};

export default ProductList;
