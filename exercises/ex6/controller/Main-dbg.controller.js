"use strict";

sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel", "nominatim-client", "sap/m/MessageBox"], function (__BaseController, JSONModel, Nominatim, MessageBox) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace com.myorg.myapp.controller
   */
  const Main = BaseController.extend("com.myorg.myapp.controller.Main", {
    onInit: function _onInit() {
      const model = new JSONModel();
      this.setModel(model);
      void this.loadWeatherData();

      /*
      // ALTERNATIVE to declarative event handler attaching in XMLView
      const input = this.byId("locationInput");
      if (input.isA<Input>("sap.m.Input")) { // type guard (unfortunately the control class needs to be given twice)
      	input.attachChange(function(evt) { // now TS knows input is an Input
      		const location = evt.getParameter("value"); // type safety even for string-based access
      	});
      }
      */
    },
    loadWeatherData: async function _loadWeatherData() {
      let lat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "49.31";
      let lon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "8.64";
      let placeName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Walldorf";
      // default coordinates: Walldorf
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
      const jsonData = await response.json();
      jsonData.placeName = placeName;
      this.getModel().setData(jsonData);
    },
    locationChange: function _locationChange(evt) {
      const location = evt.getParameters().value;
      Nominatim.createClient({
        useragent: "UI5 TypeScript Tutorial App",
        // useragent and referrer required by the terms of use
        referer: "https://localhost"
      }).search({
        q: location
      }).then(results => {
        if (results.length > 0) {
          return this.loadWeatherData(results[0].lat, results[0].lon, results[0].display_name); // for simplicity just use the first/best match
        } else {
          MessageBox.alert(`Location ${location} not found`, {
            actions: MessageBox.Action.CLOSE // enums are now properties on the default export!
          });
        }
      }).catch(() => {
        MessageBox.alert(`Failure while searching ${location}`, {
          actions: MessageBox.Action.CLOSE // enums are now properties on the default export!
        });
      });
    }
  });
  return Main;
});