var assert = require("assert"),
    sphereToSphere = require("../src/index");


describe("sphereToSphere(x1 : Number, y1 : Number, z1 : Number, r1 : Number, x2 : Number, y2 : Number, z2 : Number, r2 : Number)", function() {
    it("should return contact2 if collision false if not", function() {
        assert.deepEqual(sphereToSphere(-1, 0, 0, 1.1, 1, 0, 0, 1.1), {
            normal: [1, 0, 0],
            point: [0, 0, 0],
            depth: 0.10000000000000009
        });
        assert.equal(sphereToSphere(-1, 0, 0, 1, 1, 0, 0, 1), false);
    });
});
