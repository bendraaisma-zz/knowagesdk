'use strict'

const cometdJquery = require("cometd-jquery");
const sbisdk = require("./sbisdk-all-production");

module.exports = {
	setBaseUrl : function(config) {
		sbisdk.sdk.services.setBaseUrl(config);
	},
	getDocumentHtml : function(config) {
		return sbisdk.sdk.api.getDocumentHtml(config);
	},
	injectDocument : function(config) {
		return sbisdk.sdk.api.injectDocument(config);
	},
	getWorksheetHtml : function(config) {
		return sbisdk.sdk.api.getWorksheetHtml(config);
	},
	injectWorksheet : function(config) {
		return sbisdk.sdk.api.injectWorksheet(config);
	},
	getQbeHtml : function(config) {
		return sbisdk.sdk.api.getQbeHtml(config);
	},
	injectQbe : function(config) {
		return sbisdk.sdk.api.injectQbe(config);
	},
	getDataSetList : function(config) {
		return sbisdk.sdk.api.getDataSetList(config);
	},
	executeDataSet : function(config) {
		return sbisdk.sdk.api.executeDataSet(config);
	}
}