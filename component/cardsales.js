"use client"
import React, { useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
const Cardsales = ({title,price,id,salemen}) => {
  const controls = useAnimation();
  const router = useRouter()
 async function handlerdelete(id){
const res = await fetch(`http://localhost:3000/api/delete/deletesale/${id}`)
const data = await res.json();
router.push('/sales')

  }
  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transform: "translateY(0%)",
    });
   }, []);
  
  return (
    <motion.div
        
    initial={{ opacity: 0, scale: 0.1, transform: "translateY(5%)" }}
    animate={controls}
    transition={{ duration: 1 }}
    className="card"
  >
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
      <h5 >{price}</h5>
      <h6>Sold By: {salemen}</h6>
      
      </div>
    </div>
    </motion.div>
  );
};

export default Cardsales;
