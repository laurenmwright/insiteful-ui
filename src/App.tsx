import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Button, ThemeContext, Accordion } from "./components";
// import {RadioButtonGroup} from "./components/RadioButtonGroup/RadioButtonGroup";
// import {ConfirmPopover} from "./lib/components/ConfirmPopover/ConfirmPopover"


// const radioData = [
//   {id: "Test 1", value: "Test 1"},
//   {id: "Test 2", value: "Test 2"},
//   {id: "Test 3", value: "Test 3"}
// ]; 

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

function Home() {
  const [selectedValue, setSelectedValue] = useState();

  const myConfirm = () => {
    console.log("user clicked yes");
  }
  const myCancel = () => {
    console.log("user clicked no");
  }
  const data =  [{title: "Title 1", content: "Value 1"}, {title: "Title 2", content: "Value 2"}, {title: "Title 3", content: "Value 3"}];

  
  return (
    <div className="grid h-screen place-items-center">
      <Accordion data={data} />

     </div>
  );
}


export default App;