export default {
	name: "QUnit test suite for the UI5 Application: keepcool.sensormanager",
	defaults: {
		page: "ui5://test-resources/keepcool/sensormanager/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: "keepcool/sensormanager/",
			never: "test-resources/keepcool/sensormanager/"
		},
		loader: {
			paths: {
				"keepcool/sensormanager": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for keepcool.sensormanager"
		},
		"integration/opaTests": {
			title: "Integration tests for keepcool.sensormanager"
		}
	}
};
