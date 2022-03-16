import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ProductBox } from "../ProductBox";
import productService from "./services/productService";
import "./style.sass";

const ProductOpen =
  ({ id, title, currency, amount, decimals, picture, condition, freeShipping, description }) => (
    <div className="ard mb-4 shadow-sm mcl-product-item">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h3 className="card-title pricing-card-title">${amount}</h3>
        <img alt={`imagen del producto ${title}`} src={picture} />
        <p>
          {description}
        </p>
        <h6>{freeShipping}</h6>
      </div>
    </div>
);

const CategoriesProduct = ({categories}) =>
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

const getProducto = async (search) => await productService.findProductById(search);

export const GetProduct = () => {
  const { idProduct }  = useParams();
  const [productBox, setProduct] = useState({product: null, categories: []})

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await getProducto(idProduct)
            setProduct({product: response.item, categories: response.categories})
        } catch (e) {
            setProduct({product: null, categories: []})
        }
    };
    fetchProduct();
  });

  return productBox.product ? 
   <div className="container">
      <ProductBox />
      <p></p>
      <CategoriesProduct categories={productBox.categories} />
      <p></p>
      <ProductOpen {...productBox.product} /> 
    </div> : <div></div>
  ;
};

export default { GetProduct };
