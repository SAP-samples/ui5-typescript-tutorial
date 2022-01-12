import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import UIComponent from "sap/ui/core/UIComponent";

/**
 * @name com.myorg.myapp.controller.IncidenceDetail
 */
export default class IncidenceDetail extends Controller {

	onNavButtonPress() {
		const previousHash = History.getInstance().getPreviousHash();
		if (previousHash !== undefined) { // check needs to be like this (!==) because we want to go into this branch when hash is ""
			window.history.go(-1);
		} else { // when user launched the detail page directly, so there is no previous page in this app's history, then explicitly go to the main page
			UIComponent.getRouterFor(this).navTo("main");
		}
	}
}