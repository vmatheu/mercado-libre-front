import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../ProductList";
import { SearchBar } from "../SearchBar";
import { validateSearch } from "../validations";
import productService from "./services/productService";
import "./style.sass";

export const onClick = (setProducts, setInit, setInput) => async (search) => {
  setInput(search);
  setInit(false);
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

  if(input && init) {
    onClick(setProducts, setInit, setInput)(input)
  }

  return (
    <div className="container">
      <SearchBar key="searchBar_searchProduct" initInput={input}  onClick={onClick(setProducts, setInit, setInput)} />
      <div className="container mcl-search-product-productList">
        {data ? <ProductList products={data.products} /> : <div></div>}
      </div>
    </div>
  );
};


export default { SearchProduct, onClick };
