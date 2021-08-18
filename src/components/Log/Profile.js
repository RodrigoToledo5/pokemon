import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = ({className}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user)
  return (
    isAuthenticated && (
      <div className={className}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Email: {user.roll}</p>
      </div>
    )
  );
};
