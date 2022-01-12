import { IconColor } from "sap/ui/core/library";
import Controller from "sap/ui/core/mvc/Controller";

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

}