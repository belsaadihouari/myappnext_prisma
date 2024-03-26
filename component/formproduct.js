import React, { useEffect, useRef } from "react";
import formusercss from "@/styles/formUser.module.css";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

const FormProduct = () => {
  const controls = useAnimation();
  const router = useRouter();
  const title = useRef(null);
  const description = useRef(null);
  const createdBy = useRef(null);

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
      const title1 = title.current.value;
      console.log(title1)
      const description1 = description.current.value;
      console.log(description1)
      const createdBy1 = createdBy.current.value;
      console.log(createdBy1)

      const res = await fetch(
        "http://localhost:3000/api/add/addproduct/route",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title1,
            description: description1,
            createdBy: parseInt(createdBy1),
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      router.push("/products");
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
          <div className={formusercss.title}>Add Product</div>
          <div className={formusercss.subtitle}>Lets Start!</div>

          <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
            <input
              ref={title}
              placeholder=""
              type="text"
              className={formusercss.input}
              id="title"
              autoComplete="off"
            />
            <div className={formusercss.cut}></div>
            <label className={formusercss.iLabel} htmlFor="title">
              Title
            </label>
          </div>

          <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
            <input
              ref={description}
              placeholder=""
              type="text"
              className={formusercss.input}
              id="description"
              required
              autoComplete="off"
            />
            <div className={formusercss.cut}></div>
            <label className={formusercss.iLabel} htmlFor="description">
              Description *
            </label>
          </div>

          <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
            <input
              ref={createdBy}
              placeholder=""
              type="text"
              className={formusercss.input}
              id="createdBy"
              required
              autoComplete="off"
            />
            <div className={formusercss.cut}></div>
            <label className={formusercss.iLabel} htmlFor="createdBy">
              Created By id user *
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

export default FormProduct;
