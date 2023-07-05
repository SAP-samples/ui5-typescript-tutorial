"use strict";

sap.ui.define(["sap/m/MessageBox", "./BaseController"], function (MessageBox, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.myorg.myapp.controller
   */
  const Main = BaseController.extend("com.myorg.myapp.controller.Main", {
    sayHello: function _sayHello() {
      MessageBox.show("Hello World!");
    }
  });
  return Main;
});