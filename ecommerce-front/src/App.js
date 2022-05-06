import 'bootstrap/dist/css/bootstrap.min.css';
import ListAll from './components/ListAll';


import './App.css';
import NavBarComp from './components/NavBarComp';

function App() {
  return (
    <div className="App">
      <NavBarComp></NavBarComp>
      <ListAll></ListAll>
    </div>
  );
}

export default App;
