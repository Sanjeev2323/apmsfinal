let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('./app');

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('get apis ', () => {


    // Test the GET route

    describe("GET /getuser", () => {
        it("It should GET all the users", (done) => {
           chai.request(server)
                .get("/getuser")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.a('object');

                    done();
                }).catch((err)=>done(err));
        });

    });
})