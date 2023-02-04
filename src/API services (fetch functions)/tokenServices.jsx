import { LogOut } from "./authServices";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Check if token is expired 

export default function CheckTokenExpiration() {
    // 1. Get token from local storage 
    if(localStorage.getItem("tokenKey") == null) {
      alert('Your session has expired. Please login again');
      window.location = '/';
    }
    const token =  (JSON.parse(localStorage.getItem("tokenKey").replaceAll("", '')))
 
    // 2. decode the token to see its expiration
    let decodedToken = jwt_decode(token); 
    let currentDate = new Date();
  
    // check to see if token has expired
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      console.log("Token expired.");
      LogOut()
      alert('Your session has expired. Please login again');
      window.location = '/';
      
      
    } else {
      console.log("Token is valid");   
    }

}