import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowProduct from "./products/Show-product";
import CreateProduct from "./products/Create-product";
import ProductDetail from "./products/Product-detail";
import EditProduct from "./products/Edit-product";
import DeleteProduct from "./products/Delete-product";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ShowProduct/>}/>
          <Route path="/create" element={<CreateProduct/>}/>
          <Route path="/detail/:id" element={<ProductDetail/>}/>
          <Route path="/edit/:id" element={<EditProduct/>} />
          <Route path="/delete/:id" element={<DeleteProduct/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
