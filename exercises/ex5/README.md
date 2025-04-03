[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](sensormanager)

# Exercise 5 - Filtering With the IconTabBar

As your customer needs the full overview to make decisions quickly, you will give them an option to narrow down the list of sensors based on the current sensor temperature.

## Exercise 5.1 - Add new IconTabFilters to the Sensors.view.xml

For this, we enhance our `sap.m.IconTabBar` control.

1. Open `keepcool.sensormanager/webapp/view/Sensors.view.xml`.

2. Add `sap.m.IconTabFilter` elements to the `items` aggregation of the `sap.m.IconTabBar` control. They will be visible as icons above the bar, so that the user can click them to filter the list.

	***keepcool.sensormanager/webapp/view/Sensors.view.xml***

	````xml
				<IconTabBar
					id="iconTabBar"
					class="sapUiResponsiveContentPadding">
					<items>
						<IconTabFilter
							showAll="true"
							text="{i18n>msgFilterAll}"
							key="All"/>
						<IconTabSeparator/>
						<IconTabFilter
							icon="sap-icon://fridge"
							iconColor="Default"
							text="{i18n>msgFilterCold}"
							key="Cold"/>
						<IconTabFilter
							icon="sap-icon://blur"
							iconColor="Critical"
							text="{i18n>msgFilterWarm}"
							key="Warm"/>
						<IconTabFilter
							icon="sap-icon://warning"
							iconColor="Negative"
							text="{i18n>msgFilterHot}"
							key="Hot"/>
					</items>
					<content>
					...
	````

3. Let's see if your UI5 application now displays the newly introduced `sap.m.IconTabFilter` elements! Switch to the browser tab with the opened application preview and reload the page.
<br><br>![](images/05_01_001.png)<br><br>

## Exercise 5.2 - Implement the Filtering

In the previous section you've added all necessary controls. Next, you'll implement the filtering logic. Before implementing the filter logic, we need to expose the `Threshold` enum.

1. Open `keepcool.sensormanager/webapp/model/formatter.ts`.

2. Export the enum `Treshold`. This will allow you to create the

	```ts
	export const enum Threshold {
		Warm = 4,
		Hot = 5
	}
	```

3. Open `keepcool.sensormanager/webapp/controller/Sensors.controller.ts`.

4. Import the `Treshold` enum, that you just exported from the `formatter.ts` file.

	```ts
	import { Threshold } from "../model/formatter";
	```

5. Implement the `onSensorSelect` function for filtering the sensor list items by checking their `status` property. We'll also make use of the previously defined threshold and use some filter settings to narrow down the result. `LT` for example means "less than".

	***sensormanager/webapp/controller/Sensors.controller.ts***

	````ts
		private customFilters: Filter[] = [];
		private statusFilters: Filter[] = [];

		onSensorSelect(event: IconTabBar$SelectEvent): void {

			const listBinding = this.getView()?.byId("sensorsList")?.getBinding("items") as ListBinding;
			const key = event.getParameter("key");

			if (key === "Cold") {
				this.statusFilters = [new Filter("temperature", FilterOperator.LT, Threshold.Warm, false)];
			} else if (key === "Warm") {
				this.statusFilters = [new Filter("temperature", FilterOperator.BT, Threshold.Warm, Threshold.Hot)];
			} else if (key === "Hot") {
				this.statusFilters = [new Filter("temperature", FilterOperator.GT, Threshold.Hot, false)];
			} else {
				this.statusFilters = [];
			}

			listBinding.filter(this.statusFilters);
		}
	````

You can again make use of the *quickfix* functionality on hover to add the missing import modules. Note that for `Filter` there are two modules available that will be recommended:
- `sap/ui/model/Filter`
- `sap/ui/model/odata/Filter`

Choose the `sap/ui/model/Filter` option, as this application is using a JSONModel.

Knowledge about the DOM types like Event is built-in to TypeScript (note: there is no import in the file for the "Event" type so far!). Due to the name equality, TypeScript assumes the DOM Event class is meant. This is something to keep in mind when dealing with types which have very generic and common names.

You can simply override by explicitly importing the control's specific event class. In this case, we can import the *SelectEvent* from the `IconTabBar`. Add the following line to the beginning of the file to get rid of the error:

````ts
import { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
````

In the end, the following imports need to be present for the filter mechanism to work appropriately:

```ts
import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
import Filter from "sap/ui/model/Filter";
import JSONModel from "sap/ui/model/json/JSONModel";
import ListBinding from "sap/ui/model/ListBinding";
import { IconTabBar$SelectEvent } from "sap/m/IconTabBar";
import { Threshold } from "../model/formatter";
import FilterOperator from "sap/ui/model/FilterOperator";
```

## Exercise 5.3 - Assign the Filtering to the IconTabBar

The filtering logic has been written. Next, you need to assign the filtering function to the `select` event of the `sap.m.IconTabBar`.

1. Open `keepcool.sensormanager/webapp/view/Sensors.view.xml`.

2. Bind the `onSensorSelect` function to the `select` event of the `IconTabBar`. Whenever one of the `sap.m.IconTabFilter` elements is clicked, this function will be called.

	***keepcool.sensormanager/webapp/view/Sensors.view.xml***

	````xml
				<IconTabBar
					id="iconTabBar"
					select=".onSensorSelect"
					class="sapUiResponsiveContentPadding">
	````

3. Let's see if your UI5 application is now able to filter the sensor data correctly. Switch to the browser tab with the opened application preview and reload the page. Click the *Too Hot* icon. Only sensors with too high temperature are displayed.
<br><br>![](images/05_01_002.png)<br><br>

## Exercise 5.4 - Display the Total Number of Sensors in Every IconTabFilter

Your customer wishes to display the total number of sensors as well. For this, you can introduce the `count` property of `sap.m.IconTabFilter`.

1. Open `keepcool.sensormanager/webapp/view/Sensors.view.xml`.

2. Make use of an expression binding by adding the `count` property and the expression binding `{=${sensorModel>/sensors}.length}`.

	***keepcool.sensormanager/webapp/view/Sensors.view.xml***

	````xml
						<IconTabFilter
							showAll="true"
							text="{i18n>msgFilterAll}"
							key="All"
							count="{=${sensorModel>/sensors}.length}"/>
	````

3. Let's see if your UI5 application can display the total number of sensors correctly. Switch to the browser tab with the opened application preview and reload the page. Do you see *100*? Yeah!
<br><br>![](images/05_01_001.png)<br><br>

## Summary

Hooray! You've successfully completed [Exercise 5 - Filtering with the IconTabBar](#exercise-5---filtering-with-the-icontabbar).

Continue to [Exercise 6 - Fragment containing a SelectDialog](../ex6/README.md).

## Further Information

* Model Filter in UI5: https://ui5.sap.com/#/topic/5295470d7eee46c1898ee46c1b9ad763
* Expression Binding: https://ui5.sap.com/#/topic/daf6852a04b44d118963968a1239d2c0
