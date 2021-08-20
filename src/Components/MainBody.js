import React from "react";
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
// import Navbar from "./NavBar/NavBar";
import Carosel from "./Carousel/Carousel";
import Nav2 from "./NavBar2/Nav2"
import Events from "./Events/Events";
import flag from "../Images&Vedios/flag.mp4"
import Footer from "./Footer/Footer";

function MainBody() {
  return (
    <div className="Login-component">
          <video className="videoTag" autoPlay loop muted>
      <source src={flag} type="video/mp4" />
    </video>
      <Router>
      {/* <Navbar /> */}
      <Nav2 />
      <div className="row">
        <div className="col col-md-4  col-sm-12">
        <Events />
        </div>
        <div className="col col-md-8  col-sm-12">
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
      <Footer />
    </div>
  );
}

export default MainBody;
