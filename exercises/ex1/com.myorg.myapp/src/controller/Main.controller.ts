import MessageBox from "sap/m/MessageBox";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace com.myorg.myapp.controller
 */
export default class Main extends Controller {

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

}