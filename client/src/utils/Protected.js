import { Navigate } from "react-router-dom";
import auth from "./auth";


const Protected = ({children}) => {
  const loggedIn = auth.loggedIn();
  if(!loggedIn) {
    window.location.assign('/');
  }
  return children;
}

export default Protected;
