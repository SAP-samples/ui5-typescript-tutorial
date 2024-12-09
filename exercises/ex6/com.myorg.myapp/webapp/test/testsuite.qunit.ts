export default {
	name: "Unit test suite for the UI5 Application: com.myorg.myapp",
	defaults: {
		page: "ui5://test-resources/com/myorg/myapp/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		ui5: {
			theme: "sap_horizon"
		},
		loader: {
			paths: {
				"com/myorg/myapp": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for the UI5 Application: com.myorg.myapp"
		},
		"integration/opaTests": {
			title: "Integration tests for the UI5 Application: com.myorg.myapp"
		}
	}
};
