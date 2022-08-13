import './App.css';
import Ghost from './components/Ghost';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Header />
      <Ghost />
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
