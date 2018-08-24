import React from "react";
import DevCard from "../DevCards";

const Footer = props => {
  return (
    <section className="hero is-small foot">
      <div className="hero-body">
        <div className="container">
          <div className="tile is-ancestor is-12">
            <DevCard
              name="Jon Opacich"
              img="https://avatars1.githubusercontent.com/u/37026747?s=460&v=4"
              role="UX/UI"
              bio="Aspiring Corgi owner and male cat-lady."
              github="https://github.com/JonOpacich"
              linkedIn="https://www.linkedin.com/in/opacich/"
              portfolio="https://opacich.com"
            />
            <DevCard
              name="Amanda Malmin"
              img="https://media.licdn.com/dms/image/C4E03AQHZJSVd3cnJmw/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=SUCJ5l5gUNVPnpe1DNBaPifKNrYRsNv2mXfM-kCgHYc"
              role="UX/UI"
              bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              github="https://github.com/malmi003"
              linkedIn="https://www.linkedin.com/in/amanda-malmin-90ba32b3/"
              portfolio="/"
            />
            <DevCard
              name="Peg Mickelson"
              img="https://media.licdn.com/dms/image/C4E03AQFX7Q9JAVg5Tw/profile-displayphoto-shrink_800_800/0?e=1540425600&v=beta&t=Q0_WLXvGLjbwXX9saqpEY_5DqSINrCXOgDOAcpnllPU"
              role="QA,UX/UI"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod"
              github="https://github.com/notoriouspeg"
              linkedIn="https://www.linkedin.com/in/peg-mickelson-2baab1/"
              portfolio="/"
            />
            <div className="social-links tile is-child is-3" />
          </div>
          <div className="tile is-ancestor is-12 dev-bottom-row">
            <DevCard
              name="Heather Foxhill"
              img="https://media.licdn.com/dms/image/C5603AQHxJW97_2gipg/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=WRmv1bpoz31meV1cmZpNloVuWclVqVNb8Bkpa_SoWPU"
              role="Project Manager"
              bio="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod"
              github="https://github.com/HRFoxhill"
              linkedIn="https://www.linkedin.com/in/heather-foxhill-2b5309a/"
              portfolio="/"
            />
            <DevCard
              name="Jay Gatsby"
              img="https://sondermag.files.wordpress.com/2015/10/jay-gatsby.jpeg?w=1252&h=1252&crop=1"
              role="Party Host"
              bio="Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod"
              github="https://github.com/jgathje"
              linkedIn="https://www.linkedin.com/in/joe-gathje-452072165/"
              portfolio="/"
            />
            <DevCard
              name="Haley Beldin"
              img="https://i.pinimg.com/originals/5e/12/50/5e125039e7283e37a51b52c6cb261aeb.jpg"
              role="UI/UX"
              bio="Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod"
              github="https://github.com/haleyb128"
              linkedIn="https://www.linkedin.com/in/haley-belden-b057bb154/"
              portfolio="/"
            />
          </div>
          <div className="social-links">
          <p className="social-title">Connect With Us:</p>
            <a className="social-icons">
              <i className="fab fa-facebook" />
            </a>
            <a className="social-icons">
              <i className="fab fa-twitter-square" />
            </a>
            <br />
            <a className="social-icons">
              <i className="fab fa-pinterest-square" />
            </a>
            <a className="social-icons">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="content has-text-centered">
            <p>
              <strong>ArtSposé</strong> is licensed under{" "}
              <a
                target="blank"
                href="http://opensource.org/licenses/mit-license.php"
              >
                MIT
              </a>
              . The website content is licensed by{" "}
              <a
                target="blank"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
              >
              <img src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-nd.svg" alt="CC" width="90"/>  
              </a>
        
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
