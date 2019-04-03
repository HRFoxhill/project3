const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect

describe('ArtSpose', function () {
  this.timeout('20s')

  Nightmare.action('waitforunload', function (done) {
    this.evaluate_now(function () {
      return new Promise(function (resolve, reject) {
        window.onbeforeunload = function () {
          resolve();
        };
      });
    }, done)
  });

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })


  it('should successfully arrive at the home page', done => {
    nightmare.goto('http://localhost:3000/')
    .wait(1500)
      .end()
      .then(function (result) { done() })
      .catch(done)
  })


  it('should successfully arrive at the Paintings medium page', done => {
    // your actual testing urls will likely be `http://localhost:port/path`
    nightmare.goto('http://localhost:3000/medium=Painting')
      .wait(1500)
      .end()
      .then(function (result) { done() })
      .catch(done)
  })


  it('should successfully click login button and enter user name/password', function (done) {
    new Nightmare({ show: true })
      .goto('http://localhost:3000/')
      .click("#signInModalOpen")
      .wait("#signInEmailInputBox")
      .type("#signInEmailInputBox", "pegmickelson@gmail.com")
      .type("#signInPasswordInputBox", "12345678")
      .wait(1500)
      .end()
      .then(function (result) { done() })
      .catch(done)
  })

})
