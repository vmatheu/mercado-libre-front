import React, { useState } from "react";
import ProductList from "components/ProductList";
import Loading from "components/Loading";
import productService from "./services/productService";
import "./style.sass";

const onlyHaveNumber = (search) => /^([0-9]){1,}$/.test(search);
const haveLetterAndNumber = (search) => /^([0-9,a-z,A-Z,ñ]){4,}$/.test(search);
const validateSearch = (search) =>
  haveLetterAndNumber(search) || onlyHaveNumber(search);

export const onClick = async (search, setProducts) => {
  if (validateSearch(search)) {
    setProducts({ products: [], loading: true });
    const data = await productService.findProductBySearch(search.toLowerCase());
    setProducts({ products: data, loading: false });
  } else {
    setProducts({ products: [], loading: false });
  }
};

export const SearchProduct = () => {
  const [data, setProducts] = useState({ products: [], loading: false });
  return (
    <div className="container">
      <Loading loading={data.loading} />

      <div className="row">
        <div className="col-xs-12 col-md-5 ">
          <p>Ingresar busqueda de Productos</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-5">
          <div>
            <table>
              <tr>
                <td>
                  <input
                    id="inputSearchId"
                    className="form-control mcl-search-product-input-search"
                  />
                </td>
                <td>
                  <input
                    width="45px"
                    src="https://icon-library.com/images/search-icon-jpg/search-icon-jpg-18.jpg"
                    type="image"
                    onClick={() => onClick(inputSearchId.value, setProducts)}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mcl-search-product-bar-space" />
      </div>
      <div className="container mcl-search-product-productList">
        <ProductList products={data.products} />
      </div>
    </div>
  );
};

export default { SearchProduct, onClick };
