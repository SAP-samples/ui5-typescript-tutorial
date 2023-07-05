import Main from "com/myorg/myapp/controller/Main.controller";

QUnit.module("Sample Main controller test");

QUnit.test("The Main controller class has all custom methods", function (assert) {
	assert.expect(2);
	assert.strictEqual(typeof Main.prototype.locationChange, "function");
	assert.strictEqual(typeof Main.prototype.loadWeatherData, "function");
});
