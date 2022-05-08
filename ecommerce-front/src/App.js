import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import ListAll from './components/Pages/ListAll';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListAll/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
