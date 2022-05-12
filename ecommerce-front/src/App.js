import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import ListAll from './components/Pages/ListAll';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ListAll/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
