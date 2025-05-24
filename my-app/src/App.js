import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import TextForm from './components/TextForm.jsx';

function App() {
  return (
    <>
      <Navbar title="Sameer" home="Ghar" searchBar = {true}/>
      <TextForm/>
      {/* <Navbar title="Sana" home="Ghar"/>  */}
    </>
  );
}

export default App;
