"use strict";

sap.ui.define(["com/myorg/myapp/control/WindDirection"], function (__WindDirection) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const WindDirection = _interopRequireDefault(__WindDirection); // prepare DOM (create a location to place the custom control into)
  const elem = document.createElement("div");
  elem.id = "uiArea1";
  document.body.appendChild(elem);
  QUnit.module("Basic Checks");

  // some basic properties checks
  QUnit.test("Properties", function (assert) {
    assert.expect(1);
    const oWindDirection = new WindDirection({
      direction: 25
    });
    assert.equal(oWindDirection.getDirection(), 25, "Check direction equals 25");
  });

  // some basic rendering checks
  QUnit.test("Rendering", function (assert) {
    const done = assert.async();
    assert.expect(1);
    const oWindDirection = new WindDirection({
      direction: 25
    });
    oWindDirection.addEventDelegate({
      onAfterRendering: () => {
        const transform = oWindDirection.getDomRef().style.transform;
        assert.strictEqual(transform, `rotate(${oWindDirection.getDirection() + 90}deg)`, 'Transform is in sync with property');
        done();
      }
    });
    oWindDirection.placeAt("uiArea1");
  });
});