"use strict";

sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
  var __exports = {
    createDeviceModel: () => {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode(BindingMode.OneWay);
      return oModel;
    }
  };
  return __exports;
});