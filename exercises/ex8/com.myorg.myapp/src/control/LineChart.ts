import Control from "sap/ui/core/Control";
import RenderManager from "sap/ui/core/RenderManager";
import Chart from 'chart.js/auto';

/**
* @name com.myorg.myapp.control.LineChart
*/
export default class LineChart extends Control {

	private _chart: Chart;

	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $LineChartSettings);
	constructor(id?: string, settings?: $LineChartSettings);
	constructor(id?: string, settings?: $LineChartSettings) { super(id, settings); }

	static readonly metadata = {
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
	}

	renderer = {
		apiVersion: 2,
		render: (rm: RenderManager, chart: LineChart) => {
			rm.openStart("div", chart);
			rm.style("color", chart.getColor());
			rm.style("padding", "2em");
			rm.openEnd();

			rm.openStart("canvas", chart.getId() + "-canvas");
			rm.openEnd();
			rm.close("canvas");

			rm.close("div");
		}
	}

	_getChartData() {
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
	}

	onAfterRendering() {
		if (!this._chart) {
			this._chart = new Chart(this.getDomRef("canvas") as HTMLCanvasElement, {
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
}