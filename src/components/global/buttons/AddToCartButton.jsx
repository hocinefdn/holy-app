import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./style.css";
const AddToCartButton = () => {
  return (
    <a className="fancy" href="/">
      <span className="top-key"></span>
      <span className="text">
        Ajouter au panier <AddShoppingCartIcon />
      </span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </a>
  );
};

export default AddToCartButton;
