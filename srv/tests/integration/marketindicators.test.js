var superagent = require('superagent');

var expect = require('expect.js');

describe('express rest api server', function () {

    var id;

    it ('should successfully post an indicator', function (done) {

        superagent.post('http://localhost:3000/marketindicators/')
            .send({ type: 'uptrend' })
            .end(function (e, res) {

                expect(e).to.equal(null);

                expect(res.body.length).to.eql(1);

                expect(res.body[0]._id.length).to.eql(24);

                id = res.body[0]._id;

                done();
            });
    });

    it ('should successfully retrieve an object', function (done) {

        superagent.get('http://localhost:3000/marketindicators/' + id)
            .end(function (e, res) {
                expect(e).to.eql(null);

                expect(typeof res.body).to.eql('object');

                expect(res.body._id.length).to.eql(24);

                expect(res.body._id).to.eql(id);

                done();
        });
    });

    it ('should successfully update an object', function (done) {

        superagent.put('http://localhost:3000/marketindicators/' + id)
            .send({ type: 'downtrend' })
            .end(function (e, res) {
                expect(e).to.eql(null);

                expect(typeof res.body).to.eql('object');

                // DEBUG
                console.log("Result body: " + res.body);
                // END DEBUG

                expect(res.body.msg).to.eql('success');

                done();
            });
    });

    it ('should successfully delete an object', function (done) {

        superagent.del('http://localhost:3000/marketindicators/' + id)
            .end(function (e, res) {

                expect(e).to.eql(null);

                expect(typeof res.body).to.eql('object');

                expect(res.body.msg).to.eql('success');

                done();
            });
    });
});
