// import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Feed from './components/Feed'
import './App.css';

function App() {
  return (
    <div className="App">

      <div id="NavBar">
      <Nav/>
      </div>
      <div id='Feed'>
      <Feed/>
      </div>

      {/* <main id="Routes">
      <Routes>
        <Route exact path="urlname1" element={<filename1/>}/>
        <Route exact path="urlname2" element={<filename2/>}/>
        <Route exact path="urlname3" element={<filename3/>}/>
      </Routes>
      </main> */}

    </div>
  );
}

export default App;
