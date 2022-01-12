sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  /**
   * @namespace com.myorg.myapp.controller
   */
  const App = Controller.extend("com.myorg.myapp.controller.App", {
    onInit: function _onInit() {
      // apply content density mode to root view
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    }
  });
  return App;
});
//# sourceMappingURL=App.controller.js.map