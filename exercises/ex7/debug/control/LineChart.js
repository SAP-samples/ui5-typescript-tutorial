sap.ui.define(["sap/ui/core/Control"], function (Control) {
  /**
  * @name com.myorg.myapp.control.LineChart
  */
  const LineChart = Control.extend("com.myorg.myapp.control.LineChart", {
    renderer: {
      apiVersion: 2,
      render: (rm, chart) => {
        rm.openStart("div", chart);
        rm.style("color", chart.getColor());
        rm.style("padding", "2em");
        rm.openEnd();
        chart.getRecords().forEach(record => {
          rm.unsafeHtml(`${record.getValue()}<br>`);
        });
        rm.close("div");
      }
    },
    metadata: {
      properties: {
        "title": "string",
        "color": "sap.ui.core.CSSColor"
      },
      aggregations: {
        "records": {
          type: "com.myorg.myapp.control.ChartRecord"
        }
      },
      defaultAggregation: "records"
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);
    }
  });
  return LineChart;
});
//# sourceMappingURL=LineChart.js.map