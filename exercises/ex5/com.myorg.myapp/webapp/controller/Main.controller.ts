import { InputBase$ChangeEvent } from "sap/m/InputBase";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import * as Nominatim from "nominatim-client";
import MessageBox from "sap/m/MessageBox";

type WeatherInfo = {
	current_weather: {
		temperature: number,
		windspeed: number,
		winddirection: number
	},
	placeName: string
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
		const input = this.byId("location");
		if (input.isA<Input>("sap.m.Input")) { // type guard (unfortunately the control class needs to be given twice)
			input.attachChange(function(evt) { // now TS knows input is an Input
				const location = evt.getParameter("value"); // type safety even for string-based access
			});
		}
		*/
	}

	async loadWeatherData(lat = "49.31", lon = "8.64", placeName = "Walldorf") { // default coordinates: Walldorf
		const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
		const jsonData = await response.json() as WeatherInfo;
		jsonData.placeName = placeName;
		(this.getModel() as JSONModel).setData(jsonData); 
	}

	locationChange(evt: InputBase$ChangeEvent) {
		const location = evt.getParameters().value;

		Nominatim.createClient({
			useragent: "UI5 TypeScript Tutorial App", // useragent and referrer required by the terms of use
			referer: "https://localhost"
		}).search({q: location}).then((results) => {
			if (results.length > 0) {
				return this.loadWeatherData(results[0].lat, results[0].lon, results[0].display_name); // for simplicity just use the first/best match
			} else {
				MessageBox.alert(`Location ${location} not found`, {
					actions: MessageBox.Action.CLOSE // enums are now properties on the default export!
				});
			}
		}).catch(() => {
			MessageBox.alert(`Failure while searching ${location}`, {
				actions: MessageBox.Action.CLOSE // enums are now properties on the default export!
			});
		});
	}
}
