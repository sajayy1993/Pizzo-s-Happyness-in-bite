
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Navbar from './Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Card from './Components/Cards/Card';
import CardDetails from './Components/Cards/CardDetails';
import Footer from './Components/Footer/Footer';


function App() {
  return (
  <>
<Header />
<Navbar />
<Routes>
<Route path='/' element={<Card />}/>
<Route path='/card/:id' element={<CardDetails />}/>
</Routes>
<Footer />
  </>
  );
}

export default App;
