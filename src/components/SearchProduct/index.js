import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../ProductList";
import { validateSearch } from "../validations";
import productService from "./services/productService";
import "./style.sass";

export const onClick = async (search, setProducts, setInit) => {
  setInit(false)
  if (validateSearch(search)) {
    setProducts({ products: [] });
    const data = await productService.findProductBySearch(search.toLowerCase());
    setProducts({ products: data });
  } else {
    setProducts({ products: [] });
  }
};

export const SearchProduct = () => {

  const [data, setProducts] = useState({ products: []});
  const { searchParam }  = useParams();
  const [input, setInput] = useState(searchParam);
  const [init, setInit] = useState(true);

  if(searchParam && init) {
    onClick(input, setProducts, setInit)
  }

  return (
    <div className="container">

      <div className="row">
        <div className="col-xs-12 col-md-5 ">
          <p>Ingresar busqueda de Productos</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-5">
          <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-control mcl-search-product-input-search"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      alt="Buscar"
                      width="45px"
                      src="https://icon-library.com/images/search-icon-jpg/search-icon-jpg-18.jpg"
                      type="image"
                      onClick={() => onClick(input, setProducts, setInit)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
      <div className="row">
        <div className="mcl-search-product-bar-space" />
      </div>
      <div className="container mcl-search-product-productList">
        {data ? <ProductList products={data.products} /> : <div></div>}
      </div>
    </div>
  );
};


export default { SearchProduct, onClick };
