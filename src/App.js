import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';

// Paths
import Home from './home/Home';
import DannyWantsOutProject1 from './vanilla-javascript-sprite-techniques/DannyWantsOutProject1';
import DannyWantsOutProject2 from './parallax-background-with-javascript/DannyWantsOutProject2';
import DannyWantsOutProject3 from './enemy-movement-patterns/DannyWantsOutProject3';
import DannyWantsOutProject4 from './collisions-detection-for-sprite-sheet/DannyWantsOutProject4';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/project1" element={<DannyWantsOutProject1/>}/>
        <Route exact path="/project2" element={<DannyWantsOutProject2/>}/>
        <Route exact path="/project3" element={<DannyWantsOutProject3/>}/>
        <Route exact path="/project4" element={<DannyWantsOutProject4/>}/>
        {/* <Route exact path="/project5" element={<DannyWantsOutProject5/>}/>
        <Route exact path="/project6" element={<DannyWantsOutProject6/>}/>
        <Route exact path="/project7" element={<DannyWantsOutProject7/>}/>
        <Route exact path="/project8" element={<DannyWantsOutProject8/>}/>
        <Route exact path="/project9" element={<DannyWantsOutProject9/>}/> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
