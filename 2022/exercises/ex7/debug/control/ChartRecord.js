sap.ui.define(["sap/ui/core/Element"], function (UI5Element) {
  /**
   * @name com.myorg.myapp.control.ChartRecord
   */
  const ChartRecord = UI5Element.extend("com.myorg.myapp.control.ChartRecord", {
    metadata: {
      properties: {
        label: "string",
        value: "float"
      }
    },
    constructor: function _constructor(id, settings) {
      UI5Element.prototype.constructor.call(this, id, settings);
    }
  });
  return ChartRecord;
});
//# sourceMappingURL=ChartRecord.js.map