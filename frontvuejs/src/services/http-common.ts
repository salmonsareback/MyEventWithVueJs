import axios from "axios";

export default axios.create({
  //   baseURL: "http://localhost:8080",     // voir proxy dans vue.config.js
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
  },
});
