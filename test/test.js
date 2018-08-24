const Nightmare = require('nightmare')
const assert = require('assert')

describe('ArtSpose', function () {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })

    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000/')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })

    
    it('should load without error', done => {
      // your actual testing urls will likely be `http://localhost:port/path`
      nightmare.goto('http://localhost:3000/medium')
        .end()
        .then(function (result) { done() })
        .catch(done)
    })


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

    it('should indicate invalid email', done => {
      new Nightmare({ show: true})
      .goto('http://localhost:3000/')
      .type("email", "heatheriscool"
    .click("#signInModalOpen")
    .evaluate(function () {
      return document.querySelector("#signInBtn")
    })
    .then(function (result) {
      expect(result) .to .equal("invalid email");
      done()
    })
    .catch(done)
  )
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
