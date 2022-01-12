sap.ui.define(["sap/m/MessageBox", "sap/ui/core/mvc/Controller"], function (MessageBox, Controller) {
  /**
   * @namespace com.myorg.myapp.controller
   */
  const Main = Controller.extend("com.myorg.myapp.controller.Main", {
    sayHello: function _sayHello() {
      MessageBox.show("Hello World!");
    }
  });
  return Main;
});
//# sourceMappingURL=Main.controller.js.map