"use client";
import React, { useRef } from "react";
import formusercss from "@/styles/formUser.module.css";
import { useRouter } from "next/navigation";
const FormUser = () => {
  const router = useRouter();
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const isadmin = useRef(null);
  async function handleradd(eo) {
eo.preventDefault()
    try {
      const username1 = username.current.value;
      console.log(username1)
      const email1 = email.current.value;
      console.log(email1)
      const password1 = password.current.value;
      console.log(password1)
      const isadmin1 = isadmin.current.value;
      const res = await fetch("http://localhost:3000/api/add/adduser/route", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username1,
          email: email1,
          password: password1,
          
        }),
      });
      const data = await res.json();
      console.log(data)
      router.push("/");
    } catch (error) {
      return res.json["internal server error"];
    }
  }

  return (
    <>
      <form onSubmit={handleradd} className={formusercss.form}>
        <div className={formusercss.title}>Add User</div>
        <div className={formusercss.subtitle}>Lets Start!</div>

        <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
          <input
            ref={username}
            placeholder=""
            type="text"
            className={formusercss.input}
            id="username"
            autoComplete="off"
          />
          <div className={formusercss.cut}></div>
          <label className={formusercss.iLabel} htmlFor="username">
            Username
          </label>
        </div>

        <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
          <input
            ref={email}
            placeholder=""
            type="email"
            className={formusercss.input}
            id="email"
            required
            autoComplete="off"
          />
          <div className={formusercss.cut}></div>
          <label className={formusercss.iLabel} htmlFor="email">
            Email *
          </label>
        </div>

        <div className={`${formusercss.inputcontainer} ${formusercss.ic2}`}>
          <input
            ref={password}
            placeholder=""
            type="paswword"
            className={formusercss.input}
            id="password"
            required
            autoComplete="off"
          />
          <div className={formusercss.cut}></div>
          <label className={formusercss.iLabel} htmlFor="password">
            Password *
          </label>
        </div>

        <div className={`${formusercss.containercheck}`}>
          <label htmlFor="checkbox">is Admin ? *</label>
          <input
            ref={isadmin}
            placeholder=""
            type="checkbox"
            className={`${formusercss.input} ${formusercss.check}`}
            id="checkbox"
            required
          />
        </div>

        <button className={formusercss.submit} type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default FormUser;
