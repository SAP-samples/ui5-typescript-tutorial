import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

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
}
