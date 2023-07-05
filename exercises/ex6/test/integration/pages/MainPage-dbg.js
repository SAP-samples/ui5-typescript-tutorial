"use strict";

sap.ui.define(["sap/ui/test/Opa5", "sap/ui/test/actions/EnterText"], function (Opa5, EnterText) {
  const viewName = "com.myorg.myapp.view.Main";
  class MainPage extends Opa5 {
    // Actions
    iEnterLocationHeidelberg() {
      this.waitFor({
        id: "location",
        viewName,
        actions: new EnterText({
          text: "Heidelberg"
        }),
        errorMessage: "Did not find the 'location' input on the Main view"
      });
    }

    // Assertions
    iShouldSeeTheLocationHeidelberg() {
      this.waitFor({
        controlType: "sap.m.Text",
        viewName,
        check: function (text) {
          return text[0].getText(false).includes("Heidelberg");
        },
        success: function () {
          Opa5.assert.ok(true, "The location Heidelberg is displayed");
        },
        errorMessage: "Did not find the text control"
      });
    }
  }
  return MainPage;
});