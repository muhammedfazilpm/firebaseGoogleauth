import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Singn from './Singn';


function App() {
  console.log(process.env.REACT_APP_apiKey)
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<Singn/>}/>
    
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
