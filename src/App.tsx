import "./lib/components/App.css";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, ThemeContext, Heading1 } from "./lib";
import Theme from './lib/components/Theme';

const colorPaletteTest = {
  primary: "#FF0000",
  dark_gray: "#333333",
  secondary: "#E0C591",
  light_gray: "#797B7A",
  primary_shade_1: "#46575E",
  primary_shade_2: "#748186",
  primary_shade_3: "#A3ABAF",
  secondary_shade_1: "#ECDCBD",
  secondary_shade_2: "#F6EEDE",
  secondary_shade_3: "#F9F3E9",
};

function App() {
  const { colorPalette, changeColorPalette } = useContext(ThemeContext);

  useEffect(() => {
    changeColorPalette(colorPaletteTest);
  }, []);

  return (
    <Router>
      {/* <NavBar name="Lauren Wright" fontColor="#2E2E2E" backgroundColor="#CCCCFF"  links={routeData}/>  */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Button primary overrideColor="#ff0000">HI</Button>
      <Heading1>HelloWorld</Heading1>
      <Caption1 overrideColor = "red" overrideFont = "Times New Roman">Caption1</Caption1>
      <Caption2 overrideColor = "blue" overrideFont = "Calabri">Caption2</Caption2>
    </div>
  );
}
function About() {
  return <div>About</div>;
}
function Blogs() {
  return <div>Its different</div>;
}

export default App;
