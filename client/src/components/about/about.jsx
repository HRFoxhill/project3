//can model after navbar.jsx and index.jsx
//also remember to edit app.jsx line 7


import React from "react";


const About = props => {
    return (
        <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
          <div class="columns">
  <div class="column">
  <h1>
    A one-of-a-kind community
    </h1>
    <h2>
    Artsy is a local online marketplace where artists display their art by medium and patrons view art.
    </h2>
  </div>
  <div class="column">
  <h1>
    Support local creators
    </h1>
    <h2>
    There is no Artsy warehouse - just local artists showing the things they love. And local patrons and artists searching for art by medium to view our artists' work.
    </h2>
  </div>
  <div class="column">

   <h1>
    Peace of mind
    </h1>
    <h2>
    Supporting our artists and providing access to their art for patrons and other artists in our community is our top priority. 
    </h2>
  </div>
</div>
            {/* <h1 className="title">
              Placeholder for About
            </h1>
            <h2 className="subtitle">
             About subtitle
            </h2> */}
          </div>
        </div>
      </section>
    );
};
export default About;
