import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Portfolio from "./pages/Artist_Portfolio";
import Category from "./pages/Category";
import EditInfo from "./pages/editInfoPage";
import EditArt from "./pages/editArt";

const App = () => (
  <Router>
    <div>
      <Nav />
      <div class="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/category" component={Category} />
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
