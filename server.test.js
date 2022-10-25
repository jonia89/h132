const app = require("./server.js");

describe("app.test", function () {
  it("GET / should return the homepage", function (done) {
    request(app)
      .get("/")
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.status).to.eq(200);
        done();
      });
  });
});
