import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Sugermills from './components/Sugermills';
import Analysis from './components/Analysis';
import Logsign from './components/Logsign';
import Sugernavbar from './components/Sugernavbar';
import Landlog from './components/Landlog';
import Suphome from './components/Suphome';
import Bottomnav from './components/Bottomnav';
import Material from './components/Material';
import Workupdate from './components/Workupdate';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landlog/>}  />
      <Route path='/sugarnav' element={<Sugernavbar/>}  />
      <Route path='/landlog' element={<Landlog/>}  />
      <Route path='/suphome' element={<Suphome/>}  />
      <Route path='/material' element={<Material/>}  />
      <Route path='/workupdate' element={<Workupdate/>}  />
      {/* <Route path='/Home' element={<Home/>}  /> */}
      {/* <Route path='/sugermills' element={<Sugermills/>}  /> */}
      {/* <Route path='/analysis' element={<Analysis/>}  /> */}
      {/* <Route path='/logsign' element={<Logsign/>}  /> */}
      {/* <Route path='/bottomnav' element={<Bottomnav/>}  /> */}

    </Routes>   
    </BrowserRouter>
    
    </>
  );
}

export default App;
