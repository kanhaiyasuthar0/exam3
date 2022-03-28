
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Products from './Components/Products';
import Product from './Components/Product';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/' element={<Product/>}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
