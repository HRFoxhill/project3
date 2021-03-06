import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Portfolio from "./pages/Artist_Portfolio";
import Medium from "./pages/Medium";
import EditInfo from "./pages/editInfoPage";
import EditArt from "./pages/editArt";  
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => (
  <ParallaxProvider>
  <Router>
    <div id="featured">
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/searchMedium/:?=medium" component={SearchResults} />
          <Route path="/searchArtist/:?=medium" component={SearchResults} />         
          <Route path="/search/" component={SearchResults} />         
          <Route path="/portfolio:id" component={Portfolio} />
          <Route path="/medium:medium" component={Medium} />
          <Route exact path="/editinfo:id" component={EditInfo} />
          <Route exact path="/editart:id" component={EditArt} />
          <Route component={NoMatch} />
        </Switch>
      <Footer/>
    </div>
  </Router>
  </ParallaxProvider>
);

export default App;
