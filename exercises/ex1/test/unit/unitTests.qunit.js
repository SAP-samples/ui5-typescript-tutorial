"use strict";sap.ui.define([],function(){function e(e){return new Promise((t,i)=>{sap.ui.require([e],i=>{if(!(i&&i.__esModule)){i=i===null||!(typeof i==="object"&&e.endsWith("/library"))?{default:i}:i;Object.defineProperty(i,"__esModule",{value:true})}t(i)},e=>{i(e)})})}QUnit.config.autostart=false;void Promise.all([e("unit/controller/Main.qunit")]).then(()=>{QUnit.start()})});
//# sourceMappingURL=unitTests.qunit.js.map