export default {
	name: "QUnit test suite for the UI5 Application: <%= namespace %>",
	defaults: {
		page: "ui5://test-resources/<%= appURI %>/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "<%= defaultTheme %>"
		},
		coverage: {
			only: "<%= appURI %>/",
			never: "test-resources/<%= appURI %>/"
		},
		loader: {
			paths: {
				"<%= appURI %>": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for <%= namespace %>"
		},
		"integration/opaTests": {
			title: "Integration tests for <%= namespace %>"
		}
	}
};
