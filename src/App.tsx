// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar  from './lib/NavBar';


function App() {
  const routeData = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Blogs",
      path: "/blogs"
    }
  ]
  return (
    <Router>
      <NavBar name="Lauren Wright" fontColor="#2E2E2E" backgroundColor="#CCCCFF"  links={routeData}/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact component={Home}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/blogs" component={Blogs}>
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>Home</div>
  )
}
function About() {
  return (
    <div>About</div>
  )
}
function Blogs() {
  return (
    <div>Its different</div>
  )
}

export default App;
