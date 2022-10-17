import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Button, ThemeContext, MenuComponent, RadioButtonGroup, Tabs, Toggle, Heading1, Heading2, Title, Subheading, Link, ButtonTypography, Caption1, Caption2, Menu, Placeholder, Label, Checkbox } from "./components";


function App() {
  const { changeColorPalette } = useContext(ThemeContext);

  useEffect(() => {
    // changeColorPalette(colorPaletteTest);
  }, []);


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
  const [selectedToggle, setSelectedToggle] = useState(true);
 

  const myConfirm = () => {
    console.log("user clicked yes");
  }
  const myCancel = () => {
    console.log("user clicked no");
  }
  const data =  [{title: "Title 1", content: "Value 1"}, {title: "Title 2", content: "Value 2"}, {title: "Title 3", content: "Value 3"}];
  
    const menuData = [
    { label: "Edit", link: "..." },
    { label: "Duplicate", link: "..." },
    { label: "Archive", link: "..." },
    { label: "Move", link: "..." },
    { label: "Delete", link: "..." },
  ];
  const radioData = [{id:"1", value:"Option 1"}, {id:"2", value:"Option 2"},{id:"3", value:"Option 3"}]

  return (

    <div className="grid h-screen place-items-center">
      <span><Checkbox label="Checkbox" checked={selectedValue} setChecked={setSelectedValue} disabled={false}></Checkbox></span>
      <Toggle label="Label" enabled={selectedToggle} onChange={setSelectedToggle}></Toggle>
    </div>

  );
}

export default App;