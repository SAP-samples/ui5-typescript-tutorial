import UI5Element from "sap/ui/core/Element";

/**
 * @name com.myorg.myapp.control.ChartRecord
 */
export default class ChartRecord extends UI5Element {

	// The following three lines were generated and should remain as-is to make TypeScript aware of the constructor signatures
	constructor(idOrSettings?: string | $ChartRecordSettings);
	constructor(id?: string, settings?: $ChartRecordSettings);
	constructor(id?: string, settings?: $ChartRecordSettings) { super(id, settings); }

	static readonly metadata = {
		properties: {
			label: "string",
			value: "float"
		}
	}
}