'use strict'

const sbisdk = require("./sbisdk-all-production");

var sbiModule = (function() {

	var Sbi = function(protocol, host, port, contextPath, controllerPath) {
		sbisdk.sdk.services.setBaseUrl({
			protocol : protocol,
			host : host,
			port : port,
			contextPath : contextPath,
			controllerPath : controllerPath
		});
	};

	Sbi.prototype.authenticate = function(user, password, callback) {
		sbisdk.sdk.api.authenticate({
			params : {
				user : user,
				password : password
			},
			callback : {
				fn : callback,
				scope : this
			}
		});
	};

	Sbi.prototype.getDocumentHtml = function(documentLabel, parameters) {
		return sbisdk.sdk.api.getDocumentHtml({
			documentLabel : documentLabel,
			executionRole : '/spagobi/user',
			parameters : parameters,
			displayToolbar : false,
			canResetParameters : false,
			iframe : {
				style : 'border: 0px; height: 100%; width: 100%'
			}
		});
	};

	return {
		Sbi : Sbi
	}
}());

module.exports = sbiModule;