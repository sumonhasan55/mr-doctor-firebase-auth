
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Home from './Pages/Home/Home/Home';
import Notfound from './Shared/Notfound/Notfound';

function App() {
  return (
    <div> 

    <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services/:servicesId' element={<Services></Services>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
