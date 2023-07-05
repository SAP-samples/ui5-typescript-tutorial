"use strict";

sap.ui.define([], function () {
  function __ui5_require_async(path) {
    return new Promise((resolve, reject) => {
      sap.ui.require([path], module => {
        if (!(module && module.__esModule)) {
          module = module === null || !(typeof module === "object" && path.endsWith("/library")) ? {
            default: module
          } : module;
          Object.defineProperty(module, "__esModule", {
            value: true
          });
        }
        resolve(module);
      }, err => {
        reject(err);
      });
    });
  }
  // https://api.qunitjs.com/config/autostart/
  QUnit.config.autostart = false;

  // import all your QUnit tests here
  void Promise.all([__ui5_require_async("unit/controller/Main.qunit")]).then(() => {
    QUnit.start();
  });
});