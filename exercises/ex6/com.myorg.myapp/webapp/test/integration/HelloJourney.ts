/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import MainPage from "./pages/MainPage";

const onTheMainPage = new MainPage();

QUnit.module("Sample Hello Journey");

opaTest("Should show location Heidelberg", function () {
	// Arrangements
	onTheMainPage.iStartMyUIComponent({
		componentConfig: {
			name: "com.myorg.myapp"
		}
	});

	// Actions
	onTheMainPage.iEnterLocationHeidelberg();

	// Assertions
	onTheMainPage.iShouldSeeTheLocationHeidelberg();

	// Cleanup
	onTheMainPage.iTeardownMyApp();
});
