import Text from "sap/m/Text";
import UI5Element from "sap/ui/core/Element";
import Opa5 from "sap/ui/test/Opa5";
import EnterText from "sap/ui/test/actions/EnterText";

const viewName = "com.myorg.myapp.view.Main";

export default class MainPage extends Opa5 {
	// Actions
	iEnterLocationHeidelberg() {
		this.waitFor({
			id: "location",
			viewName,
			actions: new EnterText({
				text: "Heidelberg"
			}),
			errorMessage: "Did not find the 'location' input on the Main view"
		});
	}

	// Assertions
	iShouldSeeTheLocationHeidelberg() {
		this.waitFor({
			controlType: "sap.m.Text",
			viewName,
			check: function(text: UI5Element[]): boolean {
				return (<Text> text[0]).getText(false).includes("Heidelberg");
			},
			success: function () {
				Opa5.assert.ok(true, "The location Heidelberg is displayed");
			},
			errorMessage: "Did not find the text control"
		});
	}
}
