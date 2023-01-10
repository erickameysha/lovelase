import logo from './logo.svg';
import './App.css';
import Header from "./commponent/header/Header";
import Card from "./commponent/Card/Card";
import BrandHistory from "./commponent/BrandHistory/BrandHistory";
import Catalog from "./commponent/Catalog/Catalog";
import Main from "./commponent/Main/Main";
import Footer from './commponent/Footer/Footer'
import {Routes, Route} from "react-router-dom";
import RegistrationContainer from "./commponent/Registration/RegistrationContainer";
import RegistrationPage from "./commponent/Registration/RegistrationPage";
import LoginPage from "./commponent/Registration/LoginPage";
function App() {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path={'/aboutUS'}   element={ <BrandHistory/> }/>



              <Route  path={'/'} element={ <Main/>}/>

              <Route path={'/catalog'} element={  <Catalog/>} />
              <Route path={'/registration'} element = {<RegistrationPage/>} />
              <Route path={'/login'} element = {<LoginPage/>} />



          </Routes>
          <Footer />

{/*<Main/>*/}
      </div>

  );
}

export default App;
