"use strict";sap.ui.define(["com/myorg/myapp/controller/Main.controller"],function(t){function e(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const o=e(t);QUnit.module("Sample Main controller test");QUnit.test("The Main controller class has all custom methods",function(t){t.expect(2);t.strictEqual(typeof o.prototype.locationChange,"function");t.strictEqual(typeof o.prototype.loadWeatherData,"function")})});
//# sourceMappingURL=Main.qunit.js.map