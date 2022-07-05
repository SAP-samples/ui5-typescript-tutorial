sap.ui.define(["sap/ui/model/json/JSONModel", "./BaseController"], function (JSONModel, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const BaseController = _interopRequireDefault(__BaseController);

  /**
   * @name com.myorg.myapp.controller.IncidenceDetail
   */
  const IncidenceDetail = BaseController.extend("com.myorg.myapp.controller.IncidenceDetail", {
    onInit: function _onInit() {
      const model = new JSONModel("../../../backup_data/100.json");
      this.setModel(model, "incidenceHistory");
      this.getRouter().getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this));
    },
    onRouteMatched: function _onRouteMatched(event) {
      this.getView().bindElement({
        path: "/data/" + event.getParameter("arguments").id,
        model: "incidenceHistory"
      });
    }
  });
  return IncidenceDetail;
});
//# sourceMappingURL=IncidenceDetail.controller.js.map