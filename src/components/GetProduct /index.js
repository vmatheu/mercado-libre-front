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

const getProducto = async (search) => await productService.findProductById(search);

export const GetProduct = () => {
  const { idProduct }  = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await getProducto(idProduct)
            setProduct(response)
        } catch (e) {
            setProduct({})
        }
    };
    fetchProduct();
  }, {});

  return (
    <div className="container">
      <ProductBox />
      <p></p>
      <ProductOpen {...product} /> 
    </div>
  );
};

export default { GetProduct };
