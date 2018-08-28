const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe('ArtSpose', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('20s')

  Nightmare.action('waitforunload', function (done) {
    this.evaluate_now(function() {
        return new Promise(function(resolve, reject) {
            window.onbeforeunload = function() {
                resolve();
            };
        });
    }, done)
}); 

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })


    // it('should successfully arrive at the home page', done => {
    //   // your actual testing urls will likely be `http://localhost:port/path`
    //   nightmare.goto('http://localhost:3000/')
    //     .end()
    //     .then(function (result) { done() })
    //     .catch(done)
    // })

    
    // it('should successfully arrive at the Paintings medium page', done => {
    //   // your actual testing urls will likely be `http://localhost:port/path`
    //   nightmare.goto('http://localhost:3000/medium=Painting')
    //   .wait(1500)
    //     .end()
    //     .then(function (result) { done() })
    //     .catch(done)
    // })


    // it('should successfully search on medium', done => {
    //   new Nightmare({ show: true })
    //     .goto('http://localhost:3000/')
    //     .type(".input", "ceramics")
    //     .click(".is-info")
    //     .evaluate(function () {
    //       return document.querySelector(".")
    //       //. would be class selector; # would be ID name; anchor or a div would be an element - use []'s
    //     })
    //     .then(function (result) {  
    //     expect(result) .to .not .equal(undefined);
    //     //expect(result) .to .equal(localhost:3000/?search?ceramics) if I were using window.location on line 38; line 39 return would be ...
    //     done()  
    //     })
    //     .catch(done)
    // })

    it('should indicate invalid email', function(done)  {
      new Nightmare({ show: true})
      .goto('http://localhost:3000/')
      .click("#signInModalOpen")
      .wait("#signInEmailInputBox")
            .type("#signInEmailInputBox", "heatheriscool")
            .type("#signInPasswordInputBox", "pAssword")
      // .waitforunload()
     .click("#signInBtn")
    .evaluate(function () {
    $(document).find ("#signInBtn").click()
      console.log("Thanks Joe",document.querySelector(".help"));
      
      return document.querySelector(".help")[0].innerText
    })
    // .end()
    .then(function (result) {
      expect(result).to.equal("incorrect email or password");
      done()
    })
   
  
    })
    // it('should bring up login modal', done => {
    //   new Nightmare({show: true})
    //   .goto('http://localhost:3000/'),
    //   .click(".")
    //   .click(".")
    //   .evaluate(function () {


    //   })
    // })
  })
