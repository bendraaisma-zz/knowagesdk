'use strict'

const sbisdk = require("./sbisdk-all-production");

var sbiModule = (function () {

	var Sbi = function (config) {
		sbisdk.sdk.services.setBaseUrl(config);
    };

    Sbi.prototype.setBaseUrl = function () {
    	sbisdk.sdk.services.setBaseUrl(config);
    };
    
    Sbi.prototype.getDocumentHtml = function (config) {
    	return sbisdk.sdk.api.getDocumentHtml(config);
    };
    
    Sbi.prototype.injectDocument = function (config) {
    	return sbisdk.sdk.api.injectDocument(config);
    };
    
    Sbi.prototype.getWorksheetHtml = function (config) {
    	return sbisdk.sdk.api.getWorksheetHtml(config);
    };
    
    Sbi.prototype.injectWorksheet = function (config) {
    	return sbisdk.sdk.api.injectWorksheet(config);
    };
    
    Sbi.prototype.getQbeHtml = function (config) {
    	return sbisdk.sdk.api.getQbeHtml(config);
    };

    Sbi.prototype.injectQbe = function (config) {
    	return sbisdk.sdk.api.injectQbe(config);
    };
    
    Sbi.prototype.getDataSetList = function (config) {
    	return sbisdk.sdk.api.getDataSetList(config);
    };
    
    Sbi.prototype.executeDataSet = function (config) {
    	return sbisdk.sdk.api.executeDataSet(config);
    };

    return {
    	Sbi: Sbi
    }
}());

module.exports = sbiModule;