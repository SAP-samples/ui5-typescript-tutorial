import Controller from "sap/ui/core/mvc/Controller";
import History from "sap/ui/core/routing/History";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";
import Event from "sap/ui/base/Event";

interface EventWithIDArgument {
	getParameter(name: "arguments"): {id: string}
}

/**
 * @name com.myorg.myapp.controller.IncidenceDetail
 */
export default class IncidenceDetail extends Controller {

	onInit() {
		const model = new JSONModel("https://api.corona-zahlen.org/states/history/incidence/100");
		this.getView().setModel(model, "incidenceHistory");

		UIComponent.getRouterFor(this).getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this));
	}

	onRouteMatched(event: Event & EventWithIDArgument) {
		this.getView().bindElement({
			path: "/data/" + event.getParameter("arguments").id,
			model: "incidenceHistory"
		});
	}

	onNavButtonPress() {
		const previousHash = History.getInstance().getPreviousHash();
		if (previousHash !== undefined) { // check needs to be like this (!==) because we want to go into this branch when hash is ""
			window.history.go(-1);
		} else { // when user launched the detail page directly, so there is no previous page in this app's history, then explicitly go to the main page
			UIComponent.getRouterFor(this).navTo("main");
		}
	}
}