sap.ui.define(["sap/ui/core/library", "sap/ui/core/mvc/Controller"], function (sap_ui_core_library, Controller) {
  const IconColor = sap_ui_core_library["IconColor"];

  /**
   * @namespace com.myorg.myapp.controller
   */
  const Main = Controller.extend("com.myorg.myapp.controller.Main", {
    formatIncidence: function _formatIncidence(incidence) {
      return Math.round(incidence);
    },
    formatIconColor: function _formatIconColor(incidence) {
      if (incidence < 400) {
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