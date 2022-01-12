sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/Device", "sap/ui/model/json/JSONModel"], function (UIComponent, sap_ui_Device, JSONModel) {
  const support = sap_ui_Device["support"];

  /**
   * @namespace com.myorg.myapp
   */
  const Component = UIComponent.extend("com.myorg.myapp.Component", {
    metadata: {
      manifest: "json"
    },
    init: function _init() {
      // call the base component's init function
      UIComponent.prototype.init.call(this); // create the views based on the url/hash

      this.getRouter().initialize();
      const model = new JSONModel("../../../backup_data/states.json");
      this.setModel(model);
    },
    getContentDensityClass: function _getContentDensityClass() {
      if (this.contentDensityClass === undefined) {
        // check whether FLP has already set the content density class; do nothing in this case
        if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
          this.contentDensityClass = "";
        } else if (!support.touch) {
          // apply "compact" mode if touch is not supported
          this.contentDensityClass = "sapUiSizeCompact";
        } else {
          // "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
          this.contentDensityClass = "sapUiSizeCozy";
        }
      }

      return this.contentDensityClass;
    }
  });
  return Component;
});
//# sourceMappingURL=Component.js.map