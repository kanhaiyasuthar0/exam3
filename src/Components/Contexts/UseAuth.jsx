import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState("")
  
  const login = ()=>{
    setIsAuth(!isAuth)
  }


  return (
    <AuthContext.Provider value={{ isAuth , token ,login}}>
      {children}
    </AuthContext.Provider>
  );
}
