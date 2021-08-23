import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./main.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Service/Services";
import Carosel from "./Carousel/Carousel";
import Navbar from "./NavBar/Navbar"
import Events from "./Events/Events";
import flag from "../Images&Vedios/flag.mp4"
import Footer from "./Footer/Footer";
import BecomeAmem from "./BecomeAmemberForm/BecomeAmember"

function MainBody() {

  const[newMemberForm, setNewMembwrForm]=useState(false)


  return (
    <div className="Login-component">
          <video className="videoTag" autoPlay loop muted>
      <source src={flag} type="video/mp4" />
    </video>
      <Router>
      <Navbar newMemberForm={newMemberForm} setNewMembwrForm={setNewMembwrForm}/>
      <div className="row">
        <div className=" col-xl-4 col-md-4  mainDiv1">
        <Events />
        </div>
        <div className=" col-xl-8 col-md-8 mainDiv2">
        <Switch>
            <Route path="/" exact>
                <Carosel />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/service" exact>
              <Services />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>

      </div>
      </Router>
      <BecomeAmem newMemberForm={newMemberForm} setNewMembwrForm={setNewMembwrForm}/>
      <Footer />
    </div>
  );
}

export default MainBody;
