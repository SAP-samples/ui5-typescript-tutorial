import Sensors from "keepcool/sensormanager/controller/Sensors.controller";

QUnit.module("Sample Sensors controller test");

QUnit.test("The Sensors controller class has a sayHello method", function (assert) {
	// as a very basic test example just check the presence of the "sayHello" method
	assert.strictEqual(typeof Sensors.prototype.sayHello, "function");
});
