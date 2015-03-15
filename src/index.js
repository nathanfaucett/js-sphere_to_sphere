var mathf = require("mathf"),
    vec3 = require("vec3"),
    Contact3 = require("contact3");


module.exports = function sphereToSphere(x1, y1, z1, r1, x2, y2, z2, r2) {
    var dx = x2 - x1,
        dy = y2 - y1,
        dz = z2 - z1,
        r = r1 + r2,
        rsq = r * r,
        dsq = dx * dx + dy * dy + dz * dz,
        contact, d, invD, invR, nx, ny, nz;

    if (dsq < rsq) {
        contact = Contact3.create();

        if (dsq !== 0) {
            d = mathf.sqrt(dsq);
            invD = 1 / d;

            nx = dx * invD;
            ny = dy * invD;
            nz = dz * invD;
        } else {
            nx = 0;
            ny = 0;
            nz = 1;
        }

        invR = r !== 0 ? 1 / r : 0;

        vec3.set(contact.point, (x1 * r2 + x2 * r1) * invR, (y1 * r2 + y2 * r1) * invR, (z1 * r2 + z2 * r1) * invR);
        vec3.set(contact.normal, nx, ny, nz);
        contact.depth = (r - d) * 0.5;

        return contact;
    } else {
        return false;
    }
};
