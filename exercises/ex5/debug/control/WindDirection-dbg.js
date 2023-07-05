"use strict";

sap.ui.define(["sap/ui/core/Control"], function (Control) {
  /**
  * @name com.myorg.myapp.control.WindDirection
  */
  const WindDirection = Control.extend("com.myorg.myapp.control.WindDirection", {
    renderer: {
      apiVersion: 2,
      render: (rm, control) => {
        rm.openStart("div", control);
        rm.style("font-size", "2rem");
        rm.style("width", "2rem");
        rm.style("height", "2rem");
        rm.style("display", "inline-block");
        rm.style("color", "blue");
        rm.style("transform-origin", "center");
        rm.style("transform", `rotate(${control.getDirection() + 90}deg)`); // arrow is pointing right by default, direction 0 means blowing FROM the north, so the arrow has to point down
        rm.openEnd();
        rm.text("➢");
        rm.close("div");
      }
    },
    metadata: {
      properties: {
        /**
         * The direction in degrees FROM which the wind blows (this is the internationally common definition). Value 0 means: wind blows from North to South.
         */
        "direction": "float"
      }
    },
    constructor: function _constructor(id, settings) {
      Control.prototype.constructor.call(this, id, settings);
    }
  });
  return WindDirection;
});