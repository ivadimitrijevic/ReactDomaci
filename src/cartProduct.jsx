import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MinusOutlined } from "@ant-design/icons";

const CartProduct = ({ ticket, onAdd, onRemove }) => {
  return (
    <div className="card">
      <img
        className="card-image-top"
        src={ticket.img}
        height="100"
        width="200"
      ></img>
      <div className="card-body">
        <h3 className="card-title">{ticket.title}</h3>
        <p className="card-text">{ticket.description}</p>
        <p className="card-price">Cena: {ticket.price}</p>
        <h3>Kolicina: {ticket.amount}</h3>
      </div>
    </div>
  );
};

export default CartProduct;