sap.ui.define(["sap/ui/core/Control", "chart.js/auto"], function (Control, __Chart) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }

  const Chart = _interopRequireDefault(__Chart);
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
        rm.openStart("canvas", chart.getId() + "-canvas");
        rm.openEnd();
        rm.close("canvas");
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
    },
    _getChartData: function _getChartData() {
      const aRecords = this.getRecords();
      return {
        labels: aRecords.map(record => {
          return record.getLabel();
        }),
        datasets: [{
          label: this.getTitle(),
          backgroundColor: this.getColor(),
          borderColor: this.getColor(),
          data: aRecords.map(record => {
            return record.getValue();
          })
        }]
      };
    },
    onAfterRendering: function _onAfterRendering() {
      if (!this._chart) {
        this._chart = new Chart(this.getDomRef("canvas"), {
          type: 'line',
          data: this._getChartData(),
          options: {
            responsive: true
          }
        });
      } else {
        this._chart.data = this._getChartData();

        this._chart.update();
      }
    }
  });
  return LineChart;
});
//# sourceMappingURL=LineChart.js.map