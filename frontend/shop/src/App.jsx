import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

import ListProducts from './Products/ListProducts';
import { GetProduct } from './Products/GetProduct';
import { Error404 } from './Errors/Error404';
import { Error403 } from './Errors/Error403';
import { Panier } from './Products/Panier';

function App() {

  return (
    <div className="App">
      <a href="/panier"><button>panier</button></a>
      <BrowserRouter>
        <Routes>
          <Route path="/product/delete/" element={<Error403 />}></Route>
          <Route path="/product/get/:id" element={<GetProduct />}></Route>
          <Route path="/product/get/" element={<Error404 />}></Route>
          <Route path="/" element={<ListProducts />}></Route>
          <Route path="/product/:id/edit"></Route>
          <Route path="/panier" element={<Panier />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
