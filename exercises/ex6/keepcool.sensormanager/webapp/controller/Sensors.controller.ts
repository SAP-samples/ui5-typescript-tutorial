import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
import Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import ListBinding from "sap/ui/model/ListBinding";
import { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import { Threshold } from "../model/formatter";
import SelectDialog from "sap/m/SelectDialog";
import Control from "sap/ui/core/Control";
import { SelectDialog$LiveChangeEvent, SelectDialog$ConfirmEvent } from "sap/m/SelectDialog";
import StandardListItem from "sap/m/StandardListItem";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class Sensors extends BaseController {
	public onInit(): void {
		if (this.getSensorModel().isA("sap.ui.model.json.JSONModel")) {
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
			this.statusFilters = [new Filter("temperature", "LT", Threshold.Warm, false)];
		} else if (key === "Warm") {
			this.statusFilters = [new Filter("temperature", "BT", Threshold.Warm, Threshold.Hot)];
		} else if (key === "Hot") {
			this.statusFilters = [new Filter("temperature", "GT", Threshold.Hot, false)];
		} else {
			this.statusFilters = [];
		}

		listBinding.filter(this.statusFilters.concat(this.customFilters));
	}

	private dialog: Promise<SelectDialog>;

	onCustomerSelect(): void{
		if(!(this.dialog instanceof Promise)) {
			this.dialog = this.loadFragment({
				name: "keepcool.sensormanager.view.CustomerSelectDialog"
			}).then((control: Control|Control[]) => (control instanceof Array ? control[0] : control) as SelectDialog);
		}

		this.dialog.then(function(dialog){
			dialog.open("");
		}).catch(function(err: Error){
			MessageToast.show(err.message);
		});
	}

	onCustomerSelectConfirm(event: SelectDialog$ConfirmEvent): void {
		const selectedItems = event.getParameter("selectedItems");
		const listBinding = this.getView()?.byId("sensorsList")?.getBinding("items") as ListBinding;
		this.customFilters = selectedItems.map(function(item: StandardListItem) {
			return new Filter("customer", "EQ", item.getTitle());
		});
		listBinding.filter(this.customFilters.concat(this.statusFilters));
	}

	onCustomerSelectChange(event: SelectDialog$LiveChangeEvent): void {
		const value = event.getParameter("value");
		const filter = new Filter("name", "Contains", value);
		const listBinding = (event.getSource() as Control).getBinding("items") as ListBinding;
		listBinding.filter([filter]);
	}
}
