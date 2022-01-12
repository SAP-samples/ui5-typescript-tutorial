sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"], function (Controller, History, UIComponent, JSONModel) {
  /**
   * @name com.myorg.myapp.controller.IncidenceDetail
   */
  const IncidenceDetail = Controller.extend("com.myorg.myapp.controller.IncidenceDetail", {
    onInit: function _onInit() {
      const model = new JSONModel("https://api.corona-zahlen.org/states/history/incidence/100");
      this.getView().setModel(model, "incidenceHistory");
      UIComponent.getRouterFor(this).getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this));
    },
    onRouteMatched: function _onRouteMatched(event) {
      this.getView().bindElement({
        path: "/data/" + event.getParameter("arguments").id,
        model: "incidenceHistory"
      });
    },
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