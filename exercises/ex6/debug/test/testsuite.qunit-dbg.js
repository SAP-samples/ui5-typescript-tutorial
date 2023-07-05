"use strict";

/* eslint-disable */
// @ts-nocheck
window.suite = function () {
  var _location$pathname$ma;
  const suite = new parent.jsUnitTestSuite();
  const sContextPath = (_location$pathname$ma = location.pathname.match(/(.*\/)(?:[^/]+)/)) === null || _location$pathname$ma === void 0 ? void 0 : _location$pathname$ma[1];
  suite.addTestPage(sContextPath + "unit/unitTests.qunit.html");
  suite.addTestPage(sContextPath + "integration/opaTests.qunit.html");
  return suite;
};