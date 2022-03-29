import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState("")
  const [progress, setProgress] = useState(0)

  const login = ()=>{
    setIsAuth(true)
  }
  const logout = ()=>{
    setIsAuth(false);
    setToken("")
  }


  return (
    <AuthContext.Provider value={{ isAuth ,setToken, token ,login,logout, setProgress,progress}}>
      {children}
    </AuthContext.Provider>
  );
}
