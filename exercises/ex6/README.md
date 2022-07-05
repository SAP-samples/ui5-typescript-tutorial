# Exercise 6 - Load Incidence History Data

In this exercise, you will load incidence history data which can later be displayed on the detail page.

## Exercise 6.1 Load Detailed History Data Into Another JSONModel

After completing these steps, incidence history data of the past 100 days is available in the detail view and the state name is displayed as page title.

1.  In the file `src/controller/IncidenceDetail.controller.ts`, inside the `IncidenceDetail` class body, add the following two methods.

	When the controller is first loaded, the first method creates a new `JSONModel`, initializes it with data from the given URL, and sets the model to the view. Then it sets up a "route matched" handler which will be called whenever navigation to the detail view happens.

	The second method is this handler. It takes the data (state ID) from the router event and sets the model context to the right path in the model data - the one containing incidence history data for this state.

	```ts
		onInit() {
			const model = new JSONModel("https://api.corona-zahlen.org/states/history/incidence/100");
			this.getView().setModel(model, "incidenceHistory");

			UIComponent.getRouterFor(this).getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this));
		}

		onRouteMatched(event: Event) {
			this.getView().bindElement({
				path: "/data/" + event.getParameter("arguments").id,
				model: "incidenceHistory"
			});
		}
	```

	Again, while the import of the `JSONModel` class can be done easily as "Quick Fix...", you need to explicitly add the line `import Event from "sap/ui/base/Event";` at the top of the file. Otherwise TypeScript will silently assume that the browser DOM class with the same name is meant.

	> **Remark:** In case the data URL is down when doing the tutorial, you can use this one instead, which contains a static copy of the data: https://sap-samples.github.io/ui5-typescript-tutorial/backup_data/100.json

2.	Depending on your development environment, there might be a linting error displayed for the line starting with `path: "/data/" + `. If not, you can run `npm run lint` in a terminal window inside the project's root directory (`com.myorg.myapp`). This triggers the [ESLint](https://eslint.org/) tool and is a way to check for stylistic issues or possible bugs beyond those recognized by the TypeScript compiler. It will report two errors in this line:
	```
	Operands of '+' operation must either be both strings or both numbers. Consider using a template literal    @typescript-eslint/restrict-plus-operands
	Unsafe member access .id on an `any` value    @typescript-eslint/no-unsafe-member-access
	```
	The type returned by `event.getParameter("arguments")` is not known by TypeScript, hence ESLint considers the access of any properties on it as unsafe. This is a situation where it can make sense to define additional types within the application. To keep it simple, you can define an interface by adding these lines to the file, *outside* the class body, e.g. right after the `import` statements:
	```ts
	interface EventWithIDArgument {
		getParameter(name: "arguments"): {id: string}
	}
	```
	It defines a function that can be called only with the "arguments" string and returns an object with a string property named "id".<br>
	You can now specify that the routing event is not only a UI5 event, *but also* fulfills this new interface by going to the `onRouteMatched` method and adding this interface, using a so-called TypeScript "[intersection type](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)" (denoted by the ampersand character):
	```ts
	onRouteMatched(event: Event & EventWithIDArgument) {
	```
	This means the `event` parameter is a UI5 Event type *AND* complies with the interface you just defined. Now the linting error is gone.


3.  In the file `src/view/IncidenceDetail.view.xml`, replace `title="tbd"` with `title="{incidenceHistory>name}"` to display the state name in the title of the page.

## Summary

You've now loaded history data on the detail page and displayed the selected state in the page header.

In addition to that, you have seen how code linting can be triggered and how and for which purpose custom TypeScript types can be defined and used.

Continue to [Exercise 7 - Create and Use a Custom Control](../ex7/README.md) to develop a custom control for displaying the newly loaded history data.
