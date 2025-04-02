import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
<% if (gte1_115_0) { %>
import Device from "sap/ui/Device";
<% } else { %>
import * as Device from "sap/ui/Device"; // for UI5 >= 1.115.0 use: import Device from "sap/ui/Device";
<% } %>

export default {
	createDeviceModel: () => {
		const oModel = new JSONModel(Device);
		oModel.setDefaultBindingMode(BindingMode.OneWay);
		return oModel;
	}
};
