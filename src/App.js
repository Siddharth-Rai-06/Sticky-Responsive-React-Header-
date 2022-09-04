// import Header from "./components/header";
import React from "react";
import { Route,Routes ,BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./Pages/home"
import Projects from "./Pages/projects"
import MyWork from "./Pages/mywork"


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/mywork" element={<MyWork/>} />
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
