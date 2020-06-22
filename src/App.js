import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/blogs/:slug" component={Blogs} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
