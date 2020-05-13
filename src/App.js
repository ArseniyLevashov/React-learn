import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, BrowserRouter} from "react-router-dom"
import Diets from './components/Diets/Diets';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';

const App = (props) => {
 
  return (
    <BrowserRouter>
   <body className="app-wrapper">
     <Header />
      <div className="app-wrapper-content">
        <Route path="/Main" component={Main} />
        <Route path="/Diets" component={Diets} />
      </div>
      <Footer />
   </body>
   </BrowserRouter>
  );
}

export default App;
