import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace keepcool.sensormanager.controller
 */
export default class Sensors extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}
}
