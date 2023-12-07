import './App.css';
import DannyWantsOutProject3 from './enemy-movement-patterns/DannyWantsOutProject3';
import Home from './home/Home';
import DannyWantsOutProject2 from './parallax-background-with-javascript/DannyWantsOutProject2';
import DannyWantsOutProject1 from './vanilla-javascript-sprite-techniques/DannyWantsOutProject1';
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project1" element={<DannyWantsOutProject1/>}/>
        <Route exact path="/project2" element={<DannyWantsOutProject2/>}/>
        <Route exact path="/project3" element={<DannyWantsOutProject3/>}/>
        {/* <Route exact path="/project4" element={<DannyWantsOutProject4/>}/> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
