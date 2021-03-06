const assert = require("assert");
const Math = require('../src/math.js');
// chai
const expect = require("chai").expect;
// sinon
const sinon = require("sinon");

let value = 0;

describe("Math class", function() {
    // hooks
    beforeEach(function () {
        value = 0;
    });

    it("Sum two numbers",function(done) {
        const math = new Math();
        this.timeout(3000);
        value = 5;

        math.sum(5,5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    it("Multiply two numbers", function() {
        const math = new Math();
        const obj ={
            name: "Celso Henrique"
        };

        const obj2 ={
            name: "Celso Henrique"
        };
        
        expect(math.multiply(value,5)).to.equal(0);
        expect(obj).to.have.property("name");
        expect(obj).to.deepEqual(obj2);
    });

    it.only("Calls res with sum and index values", function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };

        sinon.stub(res,"load").returns("personalizado");

        const math = new Math();

        math.printSum(req,res,5,5);

        expect(res.load.args[0][1]).to.equal(10);
    });
});