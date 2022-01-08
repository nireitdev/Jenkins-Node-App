let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe("Test Services", function() {

  it("Index response OK", function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
          res.should.have.status(200);
          done();
      });
  });

  it("Add two numbers", function(done) {
    chai.request(app)
      .get('/suma/45/50')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.result.should.be.eql(95);
          done();
      });
  });

  it("Find word on text", function(done) {
    let request = {
    	"text": "hi everyone hi everybody",
    	"find": "hi"
    }
    chai.request(app)
      .post('/count-words')
      .send(request)
      .end((err, res) => {
          res.should.have.status(200);
          res.body.result.should.be.eql(2);
          done();
      });
  });

});
