import React from "react";
import { arrayOf, object, string } from "prop-types";
import ProductCard from "../ProductCard";

const ProductList = ({ products, categories }) => {
  return (
    <div>
      <p>
        <div className="card-header">
          <p className="my-0 font-weight-normal">
            <table>
              <tbody>
                <tr>
                  {categories.map((category, index) => (
                   <td key={category + index}>/{category}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      </p>
      <div className="text-left">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
  return;
};

ProductList.propTypes = {
  products: arrayOf(object).isRequired,
  categories: arrayOf(string).isRequired,
};

export default ProductList;
