import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Portfolio from "./pages/Artist_Portfolio";
import Medium from "./pages/Medium";
import EditInfo from "./pages/editInfoPage";
import EditArt from "./pages/editArt";
// import FeaturedCarousel from "./components/featured/featured";


const App = () => (
  <Router>
    <div id= "featured">
      <Nav />
      <div class="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio:id" component={Portfolio} />
          <Route path="/medium:medium" component={Medium} />
          <Route exact path="/editinfo" component={EditInfo} />
          <Route exact path="/editart" component={EditArt} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer/>
    </div>
  </Router>
);

export default App;
