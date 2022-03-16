import React from "react";
import { arrayOf, object, string } from "prop-types";
import ProductCard from "../ProductCard";

const ProductList = ({ products, categories }) => {
  return (
    <div>
      <div className="card-header">
        <table>
          <tbody>
            <tr>
              {categories.map((category, index) => (
                <td key={category + index}>
                  {" "}
                  <p className="my-0 font-weight-normal">
                    /{category}{" "}
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="mcl-search-product-bar-space" />
      </div>
      <p></p>
      <div className="text-left">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: arrayOf(object).isRequired,
  categories: arrayOf(string).isRequired,
};

export default ProductList;
