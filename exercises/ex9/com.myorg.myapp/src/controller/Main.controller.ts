import Control from "sap/ui/core/Control";
import { IconColor } from "sap/ui/core/library";
import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import Event from "sap/ui/base/Event";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends Controller {

	formatIncidence(incidence: number) {
		return Math.round(incidence);
	}

	formatIconColor(incidence: number) {
		if (incidence < 400) {
			return IconColor.Default;
		} else if (incidence < 800) {
			return IconColor.Critical;
		} else {
			return IconColor.Negative;
		}
	}

	navToIncidenceDetail(event: Event) {
		const stateId = (event.getSource() as Control).getBindingContext().getProperty("abbreviation") as string;
		UIComponent.getRouterFor(this).navTo("IncidenceDetailRoute", { id: stateId });
	}
}