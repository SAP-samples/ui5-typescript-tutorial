export default {
	name: "Unit test suite for the UI5 Application: <%= appId %>",
	defaults: {
		page: "ui5://test-resources/<%= appURI %>/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		ui5: {
			theme: "<%= defaultTheme %>"
		},
		loader: {
			paths: {
				"<%= appURI %>": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for the UI5 Application: <%= appId %>"
		},
		"integration/opaTests": {
			title: "Integration tests for the UI5 Application: <%= appId %>"
		}
	}
};
