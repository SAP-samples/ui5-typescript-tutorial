sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/core/UIComponent"], function (Controller, History, UIComponent) {
  /**
   * @name com.myorg.myapp.controller.IncidenceDetail
   */
  const IncidenceDetail = Controller.extend("com.myorg.myapp.controller.IncidenceDetail", {
    onNavButtonPress: function _onNavButtonPress() {
      const previousHash = History.getInstance().getPreviousHash();

      if (previousHash !== undefined) {
        // check needs to be like this (!==) because we want to go into this branch when hash is ""
        window.history.go(-1);
      } else {
        // when user launched the detail page directly, so there is no previous page in this app's history, then explicitly go to the main page
        UIComponent.getRouterFor(this).navTo("main");
      }
    }
  });
  return IncidenceDetail;
});
//# sourceMappingURL=IncidenceDetail.controller.js.map