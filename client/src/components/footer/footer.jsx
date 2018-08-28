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
              bio="Aspiring Full-Stack Web Developer with an eye for design."
              github="https://github.com/JonOpacich"
              linkedIn="https://www.linkedin.com/in/opacich/"
              portfolio="https://opacich.com"
            />
            <DevCard
              name="Amanda Malmin"
              img="https://media.licdn.com/dms/image/C4E03AQHZJSVd3cnJmw/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=SUCJ5l5gUNVPnpe1DNBaPifKNrYRsNv2mXfM-kCgHYc"
              role="UX/UI, Routing & Back-End"
              bio="Environmental Software Engineer for hire."
              github="https://github.com/malmi003"
              linkedIn="https://www.linkedin.com/in/amanda-malmin-90ba32b3/"
              portfolio="https://malmi003.github.io/Bootstrap-Portfolio/"
            />
            <DevCard
              name="Peg Mickelson"
              img="https://media.licdn.com/dms/image/C4E03AQFX7Q9JAVg5Tw/profile-displayphoto-shrink_800_800/0?e=1540425600&v=beta&t=Q0_WLXvGLjbwXX9saqpEY_5DqSINrCXOgDOAcpnllPU"
              role="QA, UX/UI"
              bio="Director of Technical Operations at Merrill Corporation. Founder and President of Merrill Women in Tech (2015 to present)."
              github="https://github.com/notoriouspeg"
              linkedIn="https://www.linkedin.com/in/peg-mickelson-2baab1/"
              portfolio="https://notoriouspeg.github.io/Responsive-Portfolio/"
            />
            <div className="social-links tile is-child is-3" />
          </div>
          <div className="tile is-ancestor is-12 dev-bottom-row">
            <DevCard
              name="Heather Foxhill"
              img="https://media.licdn.com/dms/image/C5603AQHxJW97_2gipg/profile-displayphoto-shrink_200_200/0?e=1539820800&v=beta&t=WRmv1bpoz31meV1cmZpNloVuWclVqVNb8Bkpa_SoWPU"
              role="Project Manager"
              bio="Seeking new adventures in product and project management."
              github="https://github.com/HRFoxhill"
              linkedIn="https://www.linkedin.com/in/heather-foxhill-2b5309a/"
              portfolio="https://HeatherRFoxhill.com"
            />
            <DevCard
              name="Joe Gathje"
              img="https://files.slack.com/files-tmb/T9LAT4A0J-FCGCZHG4V-e9ace7a6b1/joe_480.jpg"
              role="Back-End"
              bio="Resident curmudgeon, Back-End wizard, and a heck of a nice guy."
              github="https://github.com/jgathje"
              linkedIn="https://www.linkedin.com/in/joe-gathje-452072165/"
              portfolio="https://jgathje.github.io/bootstrap-portfolio/portfolio.html"
            />
            <DevCard
              name="Haley Beldin"
              img="https://i.imgur.com/cPPhCUv.jpg"
              role="UI/UX"
              bio="Your average overly-enthusiastic bilingual nerd."
              github="https://github.com/haleyb128"
              linkedIn="https://www.linkedin.com/in/haley-belden-b057bb154/"
              portfolio="https://haleyb128.github.io/UpdatedPortfolio/"
            />
          </div>
          <div className="social-links">
            <p className="social-title">Connect With Us:</p>
            <a className="social-icons facebook" href="https://facebook.com" target="blank">
              <i className="fab fa-facebook" />
            </a>
            <a className="social-icons twitter" href="https://twitter.com" target="blank">
              <i className="fab fa-twitter-square" />
            </a>
            <br />
            <a className="social-icons pinterest" href="https://pinterest.com" target="blank">
              <i className="fab fa-pinterest-square" />
            </a>
            <a className="social-icons instagram" href="https://instagram.com" target="blank">
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
                <img
                  src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-nd.svg"
                  alt="CC"
                  width="90"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
