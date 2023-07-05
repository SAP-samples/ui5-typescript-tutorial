import { InputBase$ChangeEvent } from "sap/m/InputBase";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

type WeatherInfo = {
	current_weather: {
		temperature: number,
		windspeed: number,
		winddirection: number
	}
}

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends BaseController {
	onInit(): void {
		const model = new JSONModel();
		this.setModel(model);
		void this.loadWeatherData();

		/*
		// ALTERNATIVE to declarative event handler attaching in XMLView
		const input = this.byId("locationInput");
		if (input.isA<Input>("sap.m.Input")) { // type guard (unfortunately the control class needs to be given twice)
			input.attachChange(function(evt) { // now TS knows input is an Input
				const location = evt.getParameter("value"); // type safety even for string-based access
			});
		}
		*/
	}

	async loadWeatherData(lat = "49.31", lon = "8.64") { // default coordinates: Walldorf
		const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
		const jsonData = await response.json() as WeatherInfo;
		(this.getModel() as JSONModel).setData(jsonData); 
	}

	locationChange(evt: InputBase$ChangeEvent) {
		const location = evt.getParameters().value;
	}
}
