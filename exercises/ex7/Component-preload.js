//@ui5-bundle com/myorg/myapp/Component-preload.js
sap.ui.require.preload({
	"com/myorg/myapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","sap/ui/model/json/JSONModel"],function(t,s,n){const e=s["support"];const i=t.extend("com.myorg.myapp.Component",{metadata:{manifest:"json"},init:function s(){t.prototype.init.call(this);const e=new n("https://api.corona-zahlen.org/states");this.setModel(e);this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!e.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return i});
},
	"com/myorg/myapp/control/ChartRecord.js":function(){sap.ui.define(["sap/ui/core/Element"],function(t){const o=t.extend("com.myorg.myapp.control.ChartRecord",{metadata:{properties:{label:"string",value:"float"}},constructor:function o(e,r){t.prototype.constructor.call(this,e,r)}});return o});
},
	"com/myorg/myapp/control/LineChart.js":function(){sap.ui.define(["sap/ui/core/Control"],function(o){const r=o.extend("com.myorg.myapp.control.LineChart",{renderer:{apiVersion:2,render:(o,r)=>{o.openStart("div",r);o.style("color",r.getColor());o.style("padding","2em");o.openEnd();r.getRecords().forEach(r=>{o.unsafeHtml(`${r.getValue()}<br>`)});o.close("div")}},metadata:{properties:{title:"string",color:"sap.ui.core.CSSColor"},aggregations:{records:{type:"com.myorg.myapp.control.ChartRecord"}},defaultAggregation:"records"},constructor:function r(e,t){o.prototype.constructor.call(this,e,t)}});return r});
},
	"com/myorg/myapp/controller/App.controller.js":function(){sap.ui.define(["./BaseController"],function(e){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const t=n(e);const o=t.extend("com.myorg.myapp.controller.App",{onInit:function e(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return o});
},
	"com/myorg/myapp/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){const o=e.extend("com.myorg.myapp.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"com/myorg/myapp/controller/IncidenceDetail.controller.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","./BaseController"],function(e,t){function n(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=n(t);const i=o.extend("com.myorg.myapp.controller.IncidenceDetail",{onInit:function t(){const n=new e("https://api.corona-zahlen.org/states/history/incidence/100");this.setModel(n,"incidenceHistory");this.getRouter().getRoute("IncidenceDetailRoute").attachMatched(this.onRouteMatched.bind(this))},onRouteMatched:function e(t){this.getView().bindElement({path:"/data/"+t.getParameter("arguments").id,model:"incidenceHistory"})}});return i});
},
	"com/myorg/myapp/controller/Main.controller.js":function(){sap.ui.define(["sap/ui/core/library","./BaseController"],function(e,n){function t(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const o=e["IconColor"];const r=t(n);const i=r.extend("com.myorg.myapp.controller.Main",{formatIncidence:function e(n){return Math.round(n)},formatIconColor:function e(n){if(n<500){return o.Default}else if(n<800){return o.Critical}else{return o.Negative}},navToIncidenceDetail:function e(n){const t=n.getSource().getBindingContext().getProperty("abbreviation");this.navTo("IncidenceDetailRoute",{id:t})}});return i});
},
	"com/myorg/myapp/i18n/i18n.properties":'appTitle=myapp\nappDescription=UI5 Application myapp\ntitle=Incidence Overview\nincidenceLabel=Incidence',
	"com/myorg/myapp/i18n/i18n_de.properties":'appTitle=myapp\nappDescription=UI5 Application myapp\ntitle=Inzidenz\\u00fcbersicht\nincidenceLabel=Inzidenz',
	"com/myorg/myapp/i18n/i18n_en.properties":'appTitle=myapp\nappDescription=UI5 Application myapp\ntitle=Incidence Overview\nincidenceLabel=Incidence',
	"com/myorg/myapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.myorg.myapp","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.myorg.myapp.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.103.0","libs":{"sap.ui.core":{},"sap.ui.layout":{},"sap.ui.unified":{},"sap.f":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.myorg.myapp.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.myorg.myapp.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"},{"name":"IncidenceDetailRoute","pattern":"state/{id}","target":["IncidenceDetailTarget"]}],"targets":{"main":{"viewId":"main","viewName":"Main"},"IncidenceDetailTarget":{"viewId":"incidenceDetail","viewName":"IncidenceDetail","viewLevel":2}}}}}',
	"com/myorg/myapp/view/App.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>',
	"com/myorg/myapp/view/IncidenceDetail.view.xml":'<mvc:View\r\n\tdisplayBlock="true"\r\n\txmlns:mvc="sap.ui.core.mvc"\r\n\txmlns="sap.m"\r\n\txmlns:cc="com.myorg.myapp.control"\r\n\tcontrollerName="com.myorg.myapp.controller.IncidenceDetail"><Page\r\n\t\tid="incidenceDetailPage"\r\n\t\ttitle="{incidenceHistory>name}"\r\n\t\tshowNavButton="true"\r\n\t\tnavButtonPress=".onNavBack"><cc:LineChart\r\n\t\t\t\ttitle="{incidenceHistory>name}"\r\n\t\t\t\tcolor="red"\r\n\t\t\t\trecords="{incidenceHistory>history}"><cc:ChartRecord\r\n\t\t\t\tlabel="{incidenceHistory>date}"\r\n\t\t\t\tvalue="{incidenceHistory>weekIncidence}" /></cc:LineChart></Page></mvc:View>',
	"com/myorg/myapp/view/Main.view.xml":'<mvc:View\n\tcontrollerName="com.myorg.myapp.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"\n\txmlns:f="sap.f"\n\txmlns:grid="sap.ui.layout.cssgrid"\n\txmlns:mvc="sap.ui.core.mvc"><Page id="page" title="{i18n>title}"><content><f:GridList id="statesList"\n\t\t\t\titems="{path: \'/data\', sorter: {path: \'weekIncidence\', descending: true}}"\n\t\t\t\tnoDataText="No state data"\n\t\t\t\tclass="sapUiContentPadding"><f:customLayout><grid:GridBoxLayout/></f:customLayout><f:items><CustomListItem type="Active" press=".navToIncidenceDetail"><HBox justifyContent="SpaceBetween" class="sapUiSmallMargin"><Title text="{name}" wrapping="true"/><core:Icon \n\t\t\t\t\t\t\t\tsrc="sap-icon://wounds-doc" \n\t\t\t\t\t\t\t\tsize="2.5rem" \n\t\t\t\t\t\t\t\tcolor="{path: \'weekIncidence\', formatter: \'.formatIconColor\'}"/></HBox><HBox justifyContent="SpaceBetween" class="sapUiSmallMargin"><Label text="{i18n>incidenceLabel}:"/><ObjectNumber number="{path: \'weekIncidence\', formatter: \'.formatIncidence\'}"/></HBox></CustomListItem></f:items></f:GridList></content></Page></mvc:View>'
});
