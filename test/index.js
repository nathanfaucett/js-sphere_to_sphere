var tape = require("tape"),
    vec3 = require("vec3"),
    sphereToSphere = require("..");


tape("sphereToSphere(x1 : Number, y1 : Number, z1 : Number, r1 : Number, x2 : Number, y2 : Number, z2 : Number, r2 : Number)", function(assert) {
    assert.deepEqual(sphereToSphere(-1, 0, 0, 1.1, 1, 0, 0, 1.1), {
        normal: vec3.create(1, 0, 0),
        point: vec3.create(0, 0, 0),
        depth: 0.10000000000000009,
        data: null
    });
    assert.equal(sphereToSphere(-1, 0, 0, 1, 1, 0, 0, 1), false);
    assert.end();
});
