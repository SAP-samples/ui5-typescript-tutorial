[![solution](https://flat.badgen.net/badge/solution/available/green?icon=github)](sensormanager)
# Exercise 6 - Fragment Containing a SelectDialog

Not all the icehouse data might be relevant for every employee of your customer. You should add some kind of basic personalization to the application. You can do this by providing a dialog in which users can select only the icehouse clients relevant for them.

## Exercise 6.1 - Create a new Fragment Definition

A dialog is a perfect scenario in which to use a `sap.ui.core.Fragment`. This UI5 artefact allows you to modularize your code in smaller reusable pieces.

1. Go to folder `keepcool.sensormanager/webapp/view/`.

2. Right-click on the `view` folder and select `New File`.
<br><br>![](images/06_01_001.png)<br><br>

3. Enter `CustomerSelectDialog.fragment.xml` as file name.
<br><br>![](images/06_01_002.png)<br><br>

4. Copy and paste the following content into the newly created `CustomerSelectDialog.fragment.xml`. With that you create a `sap.m.SelectDialog`, which offers functionality to help users select their preferred icehouse clients.

	***keepcool.sensormanager/webapp/view/CustomerSelectDialog.fragment.xml***

	````xml
	<core:FragmentDefinition
		xmlns="sap.m"
		xmlns:core="sap.ui.core">
		<SelectDialog
			title="{i18n>titleSelectCustomer}"
			contentHeight="38.3%"
			rememberSelections="true"
			multiSelect="true"
			items="{
				path: 'sensorModel>/customers',
				sorter: {path:'name'}
			}">
			<StandardListItem title="{sensorModel>name}"/>
		</SelectDialog>
	</core:FragmentDefinition>
	````

## Exercise 6.2 - Implement the Dialog Opening Logic

After creating the dialog, you need to implement the coding to open the dialog.

1. Open `keepcool.sensormanager/webapp/controller/Sensors.controller.ts`.

2. Implement the `onCustomerSelect` function to open the dialog. It loads the Fragment and sets the required model and properties.

	***keepcool.sensormanager/webapp/controller/Sensors.controller.ts***

	````ts
		private dialog: Promise<SelectDialog>;

		onCustomerSelect(): void{
			if(!(this.dialog instanceof Promise)) {
				this.dialog = this.loadFragment({
					name: "keepcool.sensormanager.view.CustomerSelectDialog"
				}).then((control: Control|Control[]) => (control instanceof Array ? control[0] : control) as SelectDialog);
			}

			this.dialog.then(function(dialog){
				dialog.open("");
			}).catch(function(err: Error){
				MessageToast.show(err.message);
			});
		}
	````

The `sap.ui.core.mvc.Controller`, which the *Sensors* controller extends, offers the function `loadFragment` to load fragments for usage. By default, the fragment will be added to the dependents aggregation of the view, which allows the fragment to reference models of the view. Additionally, the controller (and subsequently its event handlers) are automatically passed to the controller.

## Exercise 6.3 - Add a Dialog Opening Button

After implementing the dialog opening logic, you need to assign this logic to a control.

1. Open `keepcool.sensormanager/webapp/view/Sensors.view.xml`.

2. Add a new menu button to the page header and bind its `press` event to the newly created `onCustomerSelect` function.

	***keepcool.sensormanager/webapp/view/Sensors.view.xml***

	````xml
		<Page
			id="sensors"
			title="{i18n>title}">
			<headerContent>
				<Button
					icon="sap-icon://menu"
					press=".onCustomerSelect"
					tooltip="{i18n>toolTipSelectCustomer}"/>
			</headerContent>
			...
	````

3. Switch the browser tab to the application preview and refresh the page to see how the user interface of your application changes. Click the menu button in upper right corner.
<br><br>![](images/06_01_003.png)<br><br>

## Exercise 6.4 - Implement the 'Filter Customer' Logic

The Dialog contains an input field where the user can search for a customer name.
For this, you need to implement the filter logic.

1. Open `keepcool.sensormanager/webapp/controller/Sensors.controller.ts`.

2. Add an `onCustomerSelectChange` function with the following content:

	***keepcool.sensormanager/webapp/controller/Sensors.controller.ts***

	````ts
		onCustomerSelectChange(event: SelectDialog$LiveChangeEvent): void {
			const value = event.getParameter("value");
			const filter = new Filter("name", "Contains", value);
			const listBinding = (event.getSource() as Control).getBinding("items") as ListBinding;
			listBinding.filter([filter]);
		}
	````

## Exercise 6.5 - Implement the 'Select Customer' Logic

After providing an option to select preferred customers, you also need to add the logic to filter the sensors.

1. Open `keepcool.sensormanager/webapp/controller/Sensors.controller.ts`.

2. Add an `onCustomerSelectConfirm` function with the following content:

	***keepcool.sensormanager/webapp/controller/Sensors.controller.ts***

	````ts
		onCustomerSelectConfirm(event: SelectDialog$ConfirmEvent): void {
			const selectedItems = event.getParameter("selectedItems");
			const listBinding = this.getView()?.byId("sensorsList")?.getBinding("items") as ListBinding;
			this.customFilters = selectedItems.map(function(item: StandardListItem) {
				return new Filter("customer", "EQ", item.getTitle());
			});
			listBinding.filter(this.customFilters.concat(this.statusFilters));
		}
	````

3. In addition, the earlier created `onSensorSelect` method needs to be adjusted. This method now also needs to take the custom filters into account in addition to the status filters:

	***keepcool.sensormanager/webapp/controller/Sensors.controller.ts***

	````ts
			onSensorSelect(event: Event): void {

				...

				listBinding.filter(this.statusFilters.concat(this.customFilters));
			}
	````

## Exercise 6.6 - Assign the 'Customer Change and Select' Logic to the Dialog

One last thing is missing: You need to assign the newly created functions to the dialog.

1. Open `keepcool.sensormanager/webapp/view/CustomerSelectDialog.fragment.xml`

2. Add the newly created functions to the `confirm` and `liveChange` events.

	***keepcool.sensormanager/webapp/view/CustomerSelectDialog.fragment.xml***

	````xml
		<SelectDialog
			title="{i18n>titleSelectCustomer}"
			contentHeight="38.3%"
			rememberSelections="true"
			multiSelect="true"
			confirm=".onCustomerSelectConfirm"
			liveChange=".onCustomerSelectChange"
			items="{
				path: 'sensorModel>/customers',
				sorter: {path:'name'}
			}">
	````

3. It's demo time! Switch the browser tab to the application preview and refresh the page to see how the user interface of your UI5 application changes. Select the *menu* button in upper right corner. Enter some parts of customer names and check if the customer list is filtered.
<br><br>![](images/06_01_004.png)<br><br>

4. Select some preferred customers and click the *Select* button
<br><br>![](images/06_01_005.png)<br><br>

5. The list of sensors is filtered by both temperature status and preferred customers.
<br><br>![](images/06_01_006.png)<br><br>

## Summary

Yay! You've successfully completed [Exercise 6 - Fragment containing a SelectDialog](#exercise-6---fragment-containing-a-selectdialog).

Continue to [Exercise 7 - Second View with Navigation](../ex7/README.md).

## Further Information
* Usage of Fragments in UI5: https://ui5.sap.com/#/topic/d6af195124cf430599530668ddea7425
* `sap.m.SelectDialog`: https://ui5.sap.com/#/api/sap.m.SelectDialog
