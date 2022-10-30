import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Column } from "react-table";

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
  Table,
  Loader,
  Load,
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

  const navOptions = [
    "Home",
    "Admin Monthly",
    "Monthly Manual",
    "Upcoming Proposals",
    "Emergency Rules"
  ]
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
  
  // const columns: Column[] = [
  //   {
  //     Header: "User ID",
  //     accessor: "id",
  //   },
  //   {
  //     Header: "First Name",
  //     accessor: "fname",
  //   },
  //   {
  //     Header: "Last Name",
  //     accessor: "lname",
  //   },
  //   {
  //     Header: "Email",
  //     accessor: "email",
  //   },
  // ];
  const tableRows = [
    { id: "1", fname: "Jenny", lname: "Hagood", email: "jhagood@alabama.us" },
    { id: "2", fname: "Othni", lname: "Lathram", email: "oLathram@alabam.us" },
    { id: "3", fname: "Jane Claire", lname: "Carter", email: "jcarter@alabama.us" },
    { id: "4", fname: "Lauren", lname: "Wright", email: "lauren@insitely.us" }
  ];
  return (
    <div>
       <Load/>
    </div>
  );
}

export default App;
