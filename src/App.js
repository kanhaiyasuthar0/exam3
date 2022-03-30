import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import LoadingBar from 'react-top-loading-bar'
import { useContext, useState } from "react";
import { AuthContext } from "./Components/Contexts/UseAuth";
function App() {
  const {setProgress , progress } = useContext(AuthContext)
 
  return (
    <div className="App">
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:userName" element={<Home />}></Route>
        <Route path="/register" element={<Register  />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/:val" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
