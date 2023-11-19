import './App.css';
import Home from './home/Home';
import DannyWantsOutProject1 from './vanilla-javascript-sprite-techniques/DannyWantsOutProject1';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project1" element={<DannyWantsOutProject1/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
