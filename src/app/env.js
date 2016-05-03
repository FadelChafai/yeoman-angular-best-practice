(function (window) {
	'use strict';
	window.__env = window.__env || {};

	// OpenId server config
	// --------------------
	// ClientId VM Dev
	window.__env.openIdClientId = '123456789';
	window.__env.openIdServerUrl = 'https://openid-dev.com';

	// Whether or not to enable debug mode
	// Setting this to false will disable console output
	window.__env.enableDebug = true;
}(this));
