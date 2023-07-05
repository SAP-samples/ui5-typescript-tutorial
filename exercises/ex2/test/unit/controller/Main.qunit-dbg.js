"use strict";

sap.ui.define(["com/myorg/myapp/controller/Main.controller"], function (__Main) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const Main = _interopRequireDefault(__Main);
  QUnit.module("Sample Main controller test");
  QUnit.test("The Main controller class has a sayHello method", function (assert) {
    // as a very basic test example just check the presence of the "sayHello" method
    assert.strictEqual(typeof Main.prototype.sayHello, "function");
  });
});