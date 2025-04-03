import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
import Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import ListBinding from "sap/ui/model/ListBinding";
import { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import { Threshold } from "../model/formatter";
import FilterOperator from "sap/ui/model/FilterOperator";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class Sensors extends BaseController {
	public onInit(): void {
		this.getSensorModel().dataLoaded().then(async () => {
			const resourceBundle = await this.getResourceBundle();
			MessageToast.show(resourceBundle.getText("msgSensorDataLoaded"), {
				closeOnBrowserNavigation: false
			});
		}).catch(function(oErr: Error){
			MessageToast.show(oErr.message, {
				closeOnBrowserNavigation: false
			});
		});
	}

	public getSensorModel(): JSONModel {
		return (this.getOwnerComponent().getModel("sensorModel") as JSONModel);
	}

	private customFilters: Filter[] = [];
	private statusFilters: Filter[] = [];

	onSensorSelect(event: IconTabBar$SelectEvent): void {

		const listBinding = this.getView()?.byId("sensorsList")?.getBinding("items") as ListBinding;
		const key = event.getParameter("key");

		if (key === "Cold") {
			this.statusFilters = [new Filter("temperature", FilterOperator.LT, Threshold.Warm, false)];
		} else if (key === "Warm") {
			this.statusFilters = [new Filter("temperature", FilterOperator.BT, Threshold.Warm, Threshold.Hot)];
		} else if (key === "Hot") {
			this.statusFilters = [new Filter("temperature", FilterOperator.GT, Threshold.Hot, false)];
		} else {
			this.statusFilters = [];
		}

		listBinding.filter(this.statusFilters);
	}
}
