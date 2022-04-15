import axios from "axios";

export default axios.create({
  //   baseURL: "http://localhost:8080",     // voir proxy dans vue.config.js
   // baseURL: process.env.NODE_ENV !== "production" ? "http://localhost:8089" : "",
   baseURL: "/api",
    headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
});
