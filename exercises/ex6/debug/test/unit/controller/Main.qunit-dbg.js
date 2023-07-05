"use strict";

sap.ui.define(["com/myorg/myapp/controller/Main.controller"], function (__Main) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Main = _interopRequireDefault(__Main);
  QUnit.module("Sample Main controller test");
  QUnit.test("The Main controller class has all custom methods", function (assert) {
    assert.expect(2);
    assert.strictEqual(typeof Main.prototype.locationChange, "function");
    assert.strictEqual(typeof Main.prototype.loadWeatherData, "function");
  });
});