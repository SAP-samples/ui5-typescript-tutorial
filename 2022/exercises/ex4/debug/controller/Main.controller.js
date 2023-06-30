sap.ui.define(["sap/ui/core/library", "./BaseController"], function (sap_ui_core_library, __BaseController) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const IconColor = sap_ui_core_library["IconColor"];

  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.myorg.myapp.controller
   */


  const Main = BaseController.extend("com.myorg.myapp.controller.Main", {
    formatIncidence: function _formatIncidence(incidence) {
      return Math.round(incidence);
    },
    formatIconColor: function _formatIconColor(incidence) {
      if (incidence < 500) {
        return IconColor.Default;
      } else if (incidence < 800) {
        return IconColor.Critical;
      } else {
        return IconColor.Negative;
      }
    }
  });
  return Main;
});
//# sourceMappingURL=Main.controller.js.map