import { createContext, useContext, useEffect, useState } from "react";
import { fetchToken, loginUser } from "../api/fetch-movie";
import { notifyError, notifySuccess } from "../helper/toaster-helper";
import useSessionStorage from "../components/custom-hook/useSessionStorage";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated, removeIsAuthenticated] =
    useSessionStorage("isAuthenticated", false);

  const login = async (username, password) => {
    try {
      const request_token = await fetchToken();
      const resp = await loginUser({ username, password, request_token });
      if (resp.success) {
        setIsAuthenticated(true);
        notifySuccess("Login Successful!");
        return { success: true };
      } else {
        notifyError(resp.status_message);
        return { success: false };
      }
    } catch (error) {
      console.error(error);
      notifyError("Login failed!");
      return { success: false };
    }
  };

  const logout = () => {
    removeIsAuthenticated();
    sessionStorage.clear();
    notifySuccess("Logout Successful!");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
