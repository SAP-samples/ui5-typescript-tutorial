sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/ui/model/json/JSONModel"],function(t,s,n){const e=s["support"];const i=t.extend("com.myorg.myapp.Component",{metadata:{manifest:"json"},init:function s(){t.prototype.init.call(this);const e=new n("https://api.corona-zahlen.org/states");this.setModel(e);this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return i});