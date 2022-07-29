import React, { useContext } from "react";
import { GlobalState } from "../../../../GlobalState";
import BtnRender from "./BtnRender";

function ProductItem({ product, deleteProduct, handleCheck }) {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  return (
    <>
      {isAdmin ? (
        <>
          <tr>
            <td>
              <input
                type="checkbox"
                checked={product.checked}
                onChange={() => handleCheck(product._id)}
              />
            </td>
            <td>
              <p>{product.product_id}</p>
            </td>
            <td>
              <img src={product.images.url} alt="" />
            </td>
            <td>
              <h2 title={product.title}>{product.title}</h2>
            </td>
            <td>
              <span>${product.price}</span>
            </td>
            <td>{product.description}</td>
            <td><BtnRender product={product} deleteProduct={deleteProduct} /></td>
          </tr>
        </>
      ) : (
        <>
          <div className="item">
            <img src={product.images.url} alt="" />
            <div className="product_box">
              <h2 title={product.title}>{product.title}</h2>
              <span>${product.price}</span>
              <p className="description-home">{product.description}</p>
            </div>
            <BtnRender product={product} deleteProduct={deleteProduct} />
          </div>

        </>
      )}
    </>
  );
}

export default ProductItem;
