import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = ({className}) => {
  const { logout } = useAuth0();
  function onClickLogout(){
   
    logout({ returnTo: window.location.origin })
  }

  return (
    <button className={className} onClick={() => onClickLogout()}>
      Logout
    </button>
  );
};
