import React, {useState, useEffect} from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";

import Home from "./pages/home/home";
import Register from "./pages/register/register";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login/login";



const App = () => {

    return ( 
    //   <Register/>
          <Router>
          
             <NavBar />

             <Switch>
               <Route path="/register">
                 <Register />
               </Route>
               <Route path="/login">
               </Route>
               <Route path="/">
                 <Home />
               </Route>
             </Switch>

             <Footer /> 
         
         </Router>
    );
}

export default App;