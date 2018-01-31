'use strict'

const sbisdk = require("./sbisdk-all-production");

var baseUrlModule = (function() {

	var BaseUrl = function() {
		this.protocol = 'http';
		this.host = 'localhost';
		this.port = '8080';
		this.contextPath = 'knowage';
		this.controllerPath = 'servlet/AdapterHTTP';
	}

	return {
		BaseUrl : BaseUrl
	}

}());

var iFrameModule = (function() {

	var Iframe = function() {
		this.height = '400px';
		this.width = '100%';
		this.style = 'border: 0px;';
	}

	return {
		Iframe : Iframe
	}

}());

var documentHtmlConfigModule = (function() {

	var DocumentHtmlConfig = function() {
		this.documentId = '';
		this.documentLabel = '';
		this.parameters = null;
		this.executionRole = '';
		this.displayToolbar = false;
		this.displaySliders = false;
		this.iframe = new iFrameModule();
	}

	return {
		DocumentHtmlConfig : DocumentHtmlConfig
	}

}());

var sbiModule = (function() {

	var Sbi = function(config = new baseUrlModule.BaseUrl()) {
		sbisdk.sdk.services.setBaseUrl(config);
	};

	Sbi.prototype.getDocumentHtml = function(config = new documentHtmlConfigModule.DocumentHtmlConfig()) {
		return sbisdk.sdk.api.getDocumentHtml(config);
	};

//	Sbi.prototype.injectDocument = function(configModule) {
//		return sbisdk.sdk.api.injectDocument(configModule);
//	};
//
//	Sbi.prototype.getWorksheetHtml = function(configModule) {
//		return sbisdk.sdk.api.getWorksheetHtml(configModule);
//	};
//
//	Sbi.prototype.injectWorksheet = function(configModule) {
//		return sbisdk.sdk.api.injectWorksheet(configModule);
//	};
//
//	Sbi.prototype.getQbeHtml = function(configModule) {
//		return sbisdk.sdk.api.getQbeHtml(configModule);
//	};
//
//	Sbi.prototype.injectQbe = function(configModule) {
//		return sbisdk.sdk.api.injectQbe(configModule);
//	};
//
//	Sbi.prototype.getDataSetList = function(configModule) {
//		return sbisdk.sdk.api.getDataSetList(configModule);
//	};
//
//	Sbi.prototype.executeDataSet = function(configModule) {
//		return sbisdk.sdk.api.executeDataSet(configModule);
//	};

	return {
		Sbi : Sbi
	}
}());

module.exports = baseUrlModule;
module.exports = iFrameModule;
module.exports = documentHtmlConfigModule;
module.exports = sbiModule;