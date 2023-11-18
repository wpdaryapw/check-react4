import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';
import ProductsListPage from './pages/ProductsListPage';
import ProductInfoPage from './pages/ProductInfoPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/' element={<NotFoundPage/>}/>
          <Route path='/products' element={<ProductsListPage/>}/>
          <Route path='/product/:id' element={<ProductInfoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
