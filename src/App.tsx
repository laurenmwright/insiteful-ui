import './lib/components/App.css';
import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Button, ThemeContext } from "./lib";
import {Input} from "./lib/components/Input/Input";



const colorPaletteTest = {
  "primary": "#FF0000",
  "dark_gray": "#333333",
  "secondary": "#E0C591",
  "light_gray": "#797B7A",
  "primary_shade_1": "#46575E",
  "primary_shade_2": "#748186",
  "primary_shade_3": "#A3ABAF",
  "secondary_shade_1": "#ECDCBD",
  "secondary_shade_2": "#F6EEDE",
  "secondary_shade_3": "#F9F3E9"
}; 

// const radioData = [
//   {id: "Test 1", value: "Test 1"},
//   {id: "Test 2", value: "Test 2"},
//   {id: "Test 3", value: "Test 3"}
// ]; 

function App() {
  const { changeColorPalette } = useContext(ThemeContext);

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

function test(x:string) {
  console.log(x);
}

function Home() {
  // const [selectedValue, setSelectedValue] = useState(radioData[1].value);

  const myTest = () => {
    console.log("my test value");
  }
  
  return (
    <div>
      <Button onClick={myTest} primary > HI</Button>
      <Input type="number" onChange={test} label = "label" />
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
