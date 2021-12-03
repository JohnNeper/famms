import React from "react";
import logo from './logo.svg';
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


const App = () => {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
