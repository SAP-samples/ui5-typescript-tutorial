"use strict";

sap.ui.define(["sap/ui/test/opaQunit", "./pages/MainPage"], function (opaTest, __MainPage) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const MainPage = _interopRequireDefault(__MainPage);
  const onTheMainPage = new MainPage();
  QUnit.module("Sample Hello Journey");
  opaTest("Should open the Hello dialog", function () {
    // Arrangements
    onTheMainPage.iStartMyUIComponent({
      componentConfig: {
        name: "com.myorg.myapp"
      }
    });

    // Actions
    onTheMainPage.iPressTheSayHelloWithDialogButton();

    // Assertions
    onTheMainPage.iShouldSeeTheHelloDialog();

    // Actions
    onTheMainPage.iPressTheOkButtonInTheDialog();

    // Assertions
    onTheMainPage.iShouldNotSeeTheHelloDialog();

    // Cleanup
    onTheMainPage.iTeardownMyApp();
  });
  opaTest("Should close the Hello dialog", function () {
    // Arrangements
    onTheMainPage.iStartMyUIComponent({
      componentConfig: {
        name: "com.myorg.myapp"
      }
    });

    // Actions
    onTheMainPage.iPressTheSayHelloWithDialogButton();
    onTheMainPage.iPressTheOkButtonInTheDialog();

    // Assertions
    onTheMainPage.iShouldNotSeeTheHelloDialog();

    // Cleanup
    onTheMainPage.iTeardownMyApp();
  });
});