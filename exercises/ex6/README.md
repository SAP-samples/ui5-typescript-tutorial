# Exercise 6 - Testing

In this exercise, you will adapt the QUnit and OPA5 tests which are provided with the template. The QUnit and the OPA5 tests are also written in TypeScript in order to benefit from syntax checks and code completion support.

The test content is structured in the following way:

```text
webapp/test
├── integration               // the OPA5 tests
|   ├── pages                 // user defined test pages folder
|   |   └── MainPage.ts       // - OPA5 test page for the Main view
|   ├── HelloJourney.ts       // the OPA5 test journey
|   ├── opaTests.qunit.html   // the OPA5 testsuite html page
|   └── opaTests.qunit.ts     // the OPA5 testsuite
├── unit
|   ├── controller            // user defined QUnit tests folder
|   |   └── Main.qunit.ts     // - QUnit test for the Main controller
|   ├── unitTests.qunit.html  // the QUnit testsuite html page
|   └── unitTests.qunit.ts    // the QUnit testsuite
├── testsuite.qunit.html      // the general testsuite html page
└── testsuite.qunit.ts        // the general testsuite
```

The entry point of the test code is the `testsuite.qunit.html` which loads the `testsuite.qunit.ts`. Here the QUnit testsuite `unit/unitTest.qunit.html` and the OPA5 testsuite `integration/opaTests.qunit.html` are registered. The QUnit testsuite registers all QUnit test in the `unit/unitTest.qunit.ts` and the OPA5 testsuite in the `integration/opaTests.qunit.ts`.

To make TypeScript aware about the additional module paths for the `unit` and the `integration` test code, we need to extend the paths information of the `tsconfig.json` with the following entries:

```json
{
	[...]
		"paths": {
			"com/myorg/myapp/*": ["./webapp/*"],
			"unit/*": ["./webapp/test/unit/*"],
			"integration/*": ["./webapp/test/integration/*"]
		}
	[...]
}
```

As the test code is not runtime relevant, we can use a more general namespace rather than a unique one which simplifies writing the test code overall.

> :tada: **NEW**: The overall TypeScript testing structure/setup is similar to the JavaScript structure except of using TypeScript to write the testsuites, the tests, the page objects, and the journeys. In addition, you can use the `tsconfig.json` to provide a general namespace for all unit and integration test sources to avoid repeating the application namespace.

## Exercise 6.1 - Fixing the QUnit test

After completing these steps you are able to write a QUnit test for your application in TypeScript.

1. In `webapp/test/unit/controller/Main.qunit.ts` modify the `QUnit.test` code to check the availability of the `locationChange` function. Replace the existing `QUnit.test(...)` with:

```ts
QUnit.test("The Main controller class has all custom methods", function (assert) {
	assert.expect(1);
	assert.strictEqual(typeof Main.prototype.locationChange, "function");
});
```

2. You can also add more asserts, e.g. you want you add an assert for the availability of the `loadWeatherData` function.

Now you can validate whether the test execution works properly by starting the development server and the QUnit test with the following command: `npm start -- -o test/unit/unitTests.qunit.html`.

> :tada: **NEW**: This exercise shows how you can benefit from code completion for your QUnit test code.

## Excercise 6.2 - Fixing the the OPA5 journey

After completing these steps you are able to write an OPA5 test for your application in TypeScript.

1. In `webapp/test/integration/pages/MainPage.ts` modify the `MainPage` class by removing all actions and add the following action which enters the location *Heidelberg* in the input field with the id *location*:

```ts
  [...]
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
  [...]
```

2. In `webapp/test/integration/pages/MainPage.ts` modify the `MainPage` class by removing all assertions and add the following assertion which checks the text of the first text control to contain the string *Heidelberg*:

```ts
  [...]
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
  [...]
```

3. Add the import `import Text from "sap/m/Text";` to the top of the file because otherwise TypeScript considers the `Text` in the type cast as DOM Text type.

As result, the overall `MainPage.ts` file should look [like this](com.myorg.myapp/webapp/test/integration/pages/MainPage.ts).

4. In `webapp/test/integration/HelloJourney.ts` replace all existing `opaTest` entries with the following one:

```ts
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
```

With the journey above, the application is started and the location *Heidelberg* is entered to the location input and then verifies whether the location `Heidelberg` has been loaded properly.

Now you can validate whether the test execution works properly by starting the development server and the QUnit test with the following command: `npm start -- -o test/integration/opaTests.qunit.html`.

> :tada: **NEW**: This exercise shows how you can define you page object with TypeScript and benefit from code completion for your OPA5 journey using the OPA5 test code and your page object.

## Exercise 6.3 - Executing the tests using Karma

The tests can be executed either manually or in an automated way using Karma. The setup provides the following options:

1. *Manual execution*  using `npm start` and execute the tests by opening the [testsuite](http://localhost:8080/test/testsuite.qunit.html) in your browser (or as done in exercise 6.1 or 6.2 by directly opening the QUnit or the OPA5 testsuite)
2. *Test-driven* development by running Karma in watch mode using `npm run karma` (which triggers the test each time a source file changes)
3. *Headless testing* by running Karma either without coverage reporting using `npm run karma-ci` or with using `npm run karma-ci-cov`

Running the tests in *headless mode* will create a coverage folder which includes different reports which are defined in the `karma-ci.conf.js`:

```json
  [...]
    coverageReporter: {
      dir: "coverage",
      reporters: [
        { type: "html", subdir: "report-html" },
        { type: "cobertura", subdir: ".", file: "cobertura.txt" },
        { type: "lcovonly", subdir: ".", file: "report-lcovonly.txt" },
        { type: "text-summary" }
      ]
    }
  [...]
```

To investigate the coverage of your TypeScript code, you can open the `coverage/report-html/index.html` in your default browser.

> :tada: **NEW**: Running code coverage for your application can be enabled easily by using the [`karma-ui5-transpile`](https://www.npmjs.com/package/karma-ui5-transpile) preprocessor. The configuration for coverage is already included in the template.

```json
  [...]
    preprocessors: {
      "webapp/**/*.ts": ["ui5-transpile"]
    },
  [...]
```

## Exercise 6.4 - Creating a QUnit test for the WindDirection control (Optional)

After completing these steps you are able to write a QUnit test for your control in TypeScript.

1. Create a new file called `webapp/test/unit/control/WindDirection.qunit.ts`

2. First, import the `WindDirection` control

```ts
import WindDirection from "com/myorg/myapp/control/WindDirection";
```

3. Below, create a `QUnit.module` for the basic checks and a `QUnit.test` to validate the control properties:

```ts
QUnit.module("Basic Checks");

// some basic properties checks
QUnit.test("Properties", function (assert) {
	assert.expect(1);
	const oWindDirection = new WindDirection({
		direction: 25
	});
	assert.equal(oWindDirection.getDirection(), 25, "Check direction equals 25");
});
```

This QUnit test above creates a new instance of the `WindDirection` field and validates whether the direction is set properly.

4. Right after the import of the `WindDirection` field, before the `QUnit.module`, add the following code which creates a `UIArea` into which an instance of the `WindDirection` control can be rendered into:

```ts
// prepare DOM (create a location to place the custom control into)
const elem = document.createElement("div");
elem.id = "uiArea1";
document.body.appendChild(elem);
```

5. At the end of the file, add another `QUnit.test` to validate whether the `WindDirection` control is rendered correctly:

```ts
// some basic rendering checks
QUnit.test("Rendering", function (assert) {
	const done = assert.async();
	assert.expect(1);
	const oWindDirection = new WindDirection({
		direction: 25
	});
	oWindDirection.addEventDelegate({
		onAfterRendering: () => {
			const transform = (oWindDirection.getDomRef() as HTMLElement).style.transform;
			assert.strictEqual(transform, `rotate(${oWindDirection.getDirection() + 90}deg)`, 'Transform is in sync with property');
			done();
		}
	});
	oWindDirection.placeAt("uiArea1");
});
```

The test code aboves waits until the control has been rendered by using an event delegate. Once the control has been rendered, the test code verifies whether the `transform` style has been generated properly.

As result, the file should look [like this](com.myorg.myapp/webapp/test/unit/control/WindDirection.qunit.ts).

6. Add the new QUnit test `unit/control/WindDirection.qunit` to the QUnit testsuite `webapp/test/unit/unitTests.qunit.ts`:

```ts
// import all your QUnit tests here
void Promise.all([
	import("unit/controller/Main.qunit"),
	import("unit/control/WindDirection.qunit"),
]).then(() => {
	QUnit.start();
});
```

Now you can validate whether the test execution works properly by starting the development server and the QUnit test with the following command: `npm start -- -o test/unit/unitTests.qunit.html`.

> :tada: **NEW**: New QUnit or OPA tests need to be added to testsuites to include them into the automated execution.

> :tada: **NEW**: You also learned how to create a QUnit test for controls checking their properties or the rendered control.

## Summary

Congratulations, you have also finished the last exercise of this tutorial. In this exercise, you learned how to write and extend tests in TypeScript, in particular:

- Overall testing setup/structure
- Writing QUnit tests in TypeScript for your application
- Creating QUnit tests in TypeScript for your controls
- Building OPA5 page objects and journeys for integration testing
- Different ways of executing the tests

Overall, you have now learned many noteworthy things about how TypeScript changes the way you write UI5 applications and how it improves your development efficiency. Furthermore, you have seen more than a dozen of the most significant changes and improvements that happened the UI5 TypeScript world since the summer 2022 edition of this tutorial.

For sure there is more to learn about TypeScript and more that happened in the past year in UI5 to improve TypeScript support, e.g. :tada::
- [writing controller extensions has been enabled](https://sap.github.io/ui5-typescript/releasenotes.html#overrides) in March 2023
- the [babel-plugin-transform-modules-ui5](https://github.com/ui5-community/babel-plugin-transform-modules-ui5) has been handed over by its creator Ryan Murphy to the UI5 community in March 2023
- for hundreds of UI5 APIs the type description and structure details have been improved over the past year  

But you should now have a solid foundation of knowledge to continue the journey on your own.

The result can also be downloaded as described in the exercises section of the tutorial's [README](../../README.md#exercises).
