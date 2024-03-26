"use client";
import React, { useEffect, useRef } from "react";
import formusercss from "@/styles/formUser.module.css";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

const FormSales = () => {
  const controls = useAnimation();
  const router = useRouter();
  const price = useRef(null);
  const productIs = useRef(null);
  const selBy = useRef(null);

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transform: "translateX(0%)",
    });
  }, [controls]);

  async function handleradd(eo) {
    eo.preventDefault();
    try {
      const price1 = price.current.value;
      const productIs1 = productIs.current.value;
      const selBy1 = selBy.current.value;

      const res = await fetch("http://localhost:3000/api/add/addsale/route", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: parseFloat(price1),
          productIs: parseInt(productIs1),
          selBy: parseInt(selBy1),
        }),
      });
      const data = await res.json();

      router.push("/sales");
    } catch (error) {
      return res.json["internal server error"];
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1, transform: "translateX(65%)" }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <form onSubmit={handleradd} className={formusercss.form}>
          <div className={formusercss.title}>Add Sale</div>
          <div className={formusercss.subtitle}>Lets Start!</div>

          <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
            <input
              ref={price}
              placeholder=""
              type="text"
              className={formusercss.input}
              id="price"
              autoComplete="off"
            />
            <div className={formusercss.cut}></div>
            <label className={formusercss.iLabel} htmlFor="price">
              Price
            </label>
          </div>

          <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
            <input
              ref={productIs}
              placeholder=""
              type="text"
              className={formusercss.input}
              id="productIs"
              required
              autoComplete="off"
            />
            <div className={formusercss.cut}></div>
            <label className={formusercss.iLabel} htmlFor="productIs">
              Product is id product *
            </label>
          </div>

          <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
            <input
              ref={selBy}
              placeholder=""
              type="text"
              className={formusercss.input}
              id="selBy"
              required
              autoComplete="off"
            />
            <div className={formusercss.cut}></div>
            <label className={formusercss.iLabel} htmlFor="selBy">
              Sel By id user *
            </label>
          </div>

          <button className={formusercss.submit} type="submit">
            Add
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default FormSales;
