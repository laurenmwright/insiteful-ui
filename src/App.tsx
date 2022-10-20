import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Button,
  Modal,
  Input,
  PasswordInput,
  ThemeContext,
  RadioButtonGroup,
  Tabs,
  Toggle,
  Heading1,
  Heading2,
  Title,
  Subheading,
  Link,
  ButtonTypography,
  Caption1,
  Caption2,
  Menu,
  Placeholder,
  Label,
  Checkbox,
  ConfirmationBox,
  DatePicker,
  DateRange,
  FormElement,
} from "./components";
import { Eye } from "react-feather";

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

  const [inputVal, setInputVal] = useState("password");

  const [startDate, setStartDate] = useState("2020-10-10");
  const [endDate, setEndDate] = useState("2020-10-30");

  const myConfirm = () => {
    console.log("user clicked yes");
  };
  const myCancel = () => {
    console.log("user clicked no");
  };
  const data = [
    { title: "Title 1", content: "Value 1" },
    { title: "Title 2", content: "Value 2" },
    { title: "Title 3", content: "Value 3" },
  ];

  const menuData = [
    { label: "Edit", link: "..." },
    { label: "Duplicate", link: "..." },
    { label: "Archive", link: "..." },
    { label: "Move", link: "..." },
    { label: "Delete", link: "..." },
  ];
  const radioData = [
    { id: "1", value: "Option 1" },
    { id: "2", value: "Option 2" },
    { id: "3", value: "Option 3" },
  ];

  return (
    <div className="grid h-screen place-items-center">
      <Modal
        size="medium"
        isOpen={true}
        onClose={() => console.log("close")}
        title="test "
      >
        <FormElement label="Name">
          <Input type="text" onChange={() => {}}></Input>
        </FormElement>
        <FormElement label="Username">
          <Input type="text" onChange={() => {}}></Input>
        </FormElement>
        <FormElement label="Email">
          <Input type="text" onChange={() => {}}></Input>
        </FormElement>
        <Button primary>Submit</Button>
      </Modal>

    </div>
  );
}

export default App;
