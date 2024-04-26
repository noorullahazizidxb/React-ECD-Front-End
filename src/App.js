import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Admission from './Pages/Admissions/Admission';
import Finance from './Pages/Finance/Finance';
import Accessories from './Pages/Accessories/Accessories';
import MiniDrawer from './Components/MiniDrawer';


function App() {
  return (
    <BrowserRouter>
    <Routes>      
      <Route exact path="/" element={<MiniDrawer Content={<Home/>}/>} />
      <Route path="/Admission" element={<MiniDrawer Content={<Admission/>}/>} />
      <Route path="/finance" element={<MiniDrawer Content={<Finance/>}/>} />
      <Route path="/settings" element={<MiniDrawer Content={<Accessories/>}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
