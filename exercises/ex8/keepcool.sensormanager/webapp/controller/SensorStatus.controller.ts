import BaseController from "./BaseController";
import { Route$MatchedEvent } from "sap/ui/core/routing/Route";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class SensorStatus extends BaseController {
	public onInit(): void {
		this.getRouter().getRoute("sensorStatus")?.attachMatched(this.onRouteMatched.bind(this));
	}

	public onRouteMatched(event: Route$MatchedEvent): void {
		this.getView()?.bindElement({
			path: "/sensors/" + (event.getParameter("arguments") as { index: string }).index,
			model: "sensorModel"
		});
	}
}
