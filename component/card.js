"use client"
import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
const Card = ({title,descrip,id}) => {
 async function handlerdelete(id){
const res = await fetch(`http://localhost:3000/api/delete/deleteproductone/${id}`)
const data = await res.json();
  }
  return (
    <div className="card">
      <IconButton
       size="small"
       edge="start"
       color="secondary"
       aria-label="menu"
       
        className="cross"
        onClick={() => {
          handlerdelete(id)
        }}
      >
        <CloseIcon className="crossicon" />
      </IconButton>
   <div className="containerdetails">
      <h3>{title}</h3>
      <h6 >{descrip}</h6>
      </div>
    </div>
  );
};

export default Card;
