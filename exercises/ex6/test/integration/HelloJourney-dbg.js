"use strict";

sap.ui.define(["sap/ui/test/opaQunit", "./pages/MainPage"], function (opaTest, __MainPage) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const MainPage = _interopRequireDefault(__MainPage);
  const onTheMainPage = new MainPage();
  QUnit.module("Sample Hello Journey");
  opaTest("Should show location Heidelberg", function () {
    // Arrangements
    onTheMainPage.iStartMyUIComponent({
      componentConfig: {
        name: "com.myorg.myapp"
      }
    });

    // Actions
    onTheMainPage.iEnterLocationHeidelberg();

    // Assertions
    onTheMainPage.iShouldSeeTheLocationHeidelberg();

    // Cleanup
    onTheMainPage.iTeardownMyApp();
  });
});