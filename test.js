import chai from 'chai';
import chaiHttp from 'chai-http'
import app from './app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Express App', () => {
  it('should respond to GET / with a JSON message', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal({ message: 'GET REQUEST FULLFILLED' });
        done();
      });
  });

  it('should log "Faran" on startup', () => {
    // You can capture the console output and check if it contains "Faran"
    const consoleSpy = chai.spy(console, 'log');
    require('./app'); // This will execute your app.js and log "Faran"
    expect(consoleSpy).to.have.been.called.with('Faran');
    consoleSpy.restore();
  });

  it('should access the environment variable NAME', () => {
    // Assuming you have set the NAME environment variable before running the test
    expect(process.env.NAME).to.exist;
  });
});
