import React, { useState } from "react";
import "./style.sass";

export const SearchBar = ({onClick, initInput}) => {
  const [input, setInput] = useState(initInput);

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
                    onClick={() => onClick(input)}
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
    </div>
  );
};