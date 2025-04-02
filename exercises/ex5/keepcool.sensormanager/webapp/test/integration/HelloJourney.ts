import opaTest from "sap/ui/test/opaQunit";
import SensorsPage from "./pages/SensorsPage";

const onTheSensorsPage = new SensorsPage();

QUnit.module("Sample Hello Journey");

opaTest("Should open the Hello dialog", function () {
	// Arrangements
	onTheSensorsPage.iStartMyUIComponent({
		componentConfig: {
			name: "keepcool.sensormanager"
		}
	});

	// Actions
	onTheSensorsPage.iPressTheSayHelloWithDialogButton();

	// Assertions
	onTheSensorsPage.iShouldSeeTheHelloDialog();

	// Actions
	onTheSensorsPage.iPressTheOkButtonInTheDialog();

	// Assertions
	onTheSensorsPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	onTheSensorsPage.iTeardownMyApp();
});

opaTest("Should close the Hello dialog", function () {
	// Arrangements
	onTheSensorsPage.iStartMyUIComponent({
		componentConfig: {
			name: "keepcool.sensormanager"
		}
	});

	// Actions
	onTheSensorsPage.iPressTheSayHelloWithDialogButton();
	onTheSensorsPage.iPressTheOkButtonInTheDialog();

	// Assertions
	onTheSensorsPage.iShouldNotSeeTheHelloDialog();

	// Cleanup
	onTheSensorsPage.iTeardownMyApp();
});
