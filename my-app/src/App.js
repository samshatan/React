import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
function App() {
  return (
    <>
    <Router>
      <Navbar title="Sameer" home="Ghar" searchBar = {true}/>
      <Routes>
        <Route path='/' element={<TextForm/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
      {/* <Navbar title="Sana" home="Ghar"/>  */}
    </>
  );
}

export default App;
