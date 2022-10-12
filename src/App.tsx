import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Button, ThemeContext, Accordion, DatePicker, ConfirmationBox, Tabs, FormElement, Checkbox } from "./components";
import { Paper } from "./components/Paper/Paper";
import { Input } from "postcss";
import { Check } from "react-feather";

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

  const myConfirm = () => {
    console.log("user clicked yes");
  }
  const myCancel = () => {
    console.log("user clicked no");
  }
  const data =  [{title: "Title 1", content: "Value 1"}, {title: "Title 2", content: "Value 2"}, {title: "Title 3", content: "Value 3"}];

  return (
    <div>
      <Paper>
        <Button primary>Button 1</Button>
        <div>
        <FormElement>Form Element Text</FormElement>
        </div>
        <Button secondary>Button 2</Button>
      </Paper>
    </div>
  );
}

export default App;