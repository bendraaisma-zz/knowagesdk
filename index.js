'use strict'

const sbisdk = require("./sbisdk-all-production");

var sbiModule = (function() {

	var Sbi = function(config) {
		sbisdk.sdk.services.setBaseUrl(config);
	};
	
	Sbi.prototype.authenticate = function(param, callback) {
		return sbisdk.sdk.api.authenticate(param, callback);
	};
	
	Sbi.prototype.authenticate = function(credentials, headers, callback) {
		return sbisdk.sdk.api.authenticate(credentials, headers, callback);
	};

	Sbi.prototype.getDocumentHtml = function(config) {
		return sbisdk.sdk.api.getDocumentHtml(config);
	};

	Sbi.prototype.injectDocument = function(configModule) {
		return sbisdk.sdk.api.injectDocument(configModule);
	};

	Sbi.prototype.getWorksheetHtml = function(configModule) {
		return sbisdk.sdk.api.getWorksheetHtml(configModule);
	};

	Sbi.prototype.injectWorksheet = function(configModule) {
		return sbisdk.sdk.api.injectWorksheet(configModule);
	};

	Sbi.prototype.getQbeHtml = function(configModule) {
		return sbisdk.sdk.api.getQbeHtml(configModule);
	};

	Sbi.prototype.injectQbe = function(configModule) {
		return sbisdk.sdk.api.injectQbe(configModule);
	};

	Sbi.prototype.getDataSetList = function(configModule) {
		return sbisdk.sdk.api.getDataSetList(configModule);
	};

	Sbi.prototype.executeDataSet = function(configModule) {
		return sbisdk.sdk.api.executeDataSet(configModule);
	};

	return {
		Sbi : Sbi
	}
}());

module.exports = sbiModule;