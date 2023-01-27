import { logOut } from "./authServices";
import jwt_decode from "jwt-decode";

// Check if token is expired 

export function checkTokenExpiration(token) {
    // 1. Get token from local storage 
    const token =  (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
    // 2. decode the token to see its expiration
    let decodedToken = jwt_decode(token);
    let currentDate = new Date();
  
    // check to see if token has expired
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
      logOut()
    } else {
      console.log("Token is valid");   
    }

}