import React, { useState } from 'react';
import { string, number, bool } from 'prop-types';
import { Redirect } from "react-router-dom";
import './style.sass';

export const onClick = async (inputId, setInputId) => {
  setInputId(inputId);
};

const ProductCard =
  ({ id, title, currency, amount, decimals, picture, condition, freeShipping }) => {
    const [inputId, setInputId] = useState();
    if (inputId) {
      return (
        <Redirect
          push
          to={{
            pathname: "/item/" + inputId,
          }}
        />
      );
    }

    return <div onClick={() => setInputId(id)} className="ard mb-4 shadow-sm mcl-product-card">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h3 className="card-title pricing-card-title">${amount}</h3>
        <img alt={`imagen del producto ${title}`} src={`http://${picture}`} />
        <h6>{freeShipping}</h6>
      </div>
    </div>
}

ProductCard.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  currency: string.isRequired,
  amount: number.isRequired,
  decimals: number.isRequired,
  picture: string.isRequired,
  condition: string.isRequired,
  freeShipping: bool.isRequired,
};

export default ProductCard;
