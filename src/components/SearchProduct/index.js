import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../ProductList";
import { SearchBar } from "../SearchBar";
import { validateSearch } from "../validations";
import productService from "./services/productService";
import "./style.sass";

export const onClick = (setData, setInit, setInput) => async (search) => {
  setInput(search);
  setInit(false);
  if (validateSearch(search)) {
    setData({ products: [], categories: [] });
    const data = await productService.findProductBySearch(search.toLowerCase());
    setData({ products: data.items, categories: data.categories });
  } else {
    setData({ products: [], categories: [] });
  }
};

export const SearchProduct = () => {
  const { searchParam }  = useParams();
  const [data, setData] = useState({ products: [], categories: []});
  const [input, setInput] = useState(searchParam);
  const [init, setInit] = useState(true);

  if(input && init) {
    onClick(setData, setInit, setInput)(input)
  }

  return (
    <div className="container">
      <SearchBar key="searchBar_searchProduct" initInput={input}  onClick={onClick(setData, setInit, setInput)} />
      <div className="container mcl-search-product-productList">
        {data ? <ProductList products={data.products} categories={data.categories} /> : <div></div>}
      </div>
    </div>
  );
};


export default { SearchProduct, onClick };
