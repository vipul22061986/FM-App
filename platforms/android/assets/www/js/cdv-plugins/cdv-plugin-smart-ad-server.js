(function(cordova) {
	/**
	 * Constructor
	 */
	function SmartAdServerPlugin() {
	}
	
	/**
	 * Set site ID
	 * @param siteId
	 */
	SmartAdServerPlugin.prototype.setSiteId = function(siteId, successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			
			failureCallback,
			'SmartAdServer',
			'setSiteId',
			[siteId]
		);
	};
	
	/**
	 * Presents a SAS interstitial
	 * @param pageId
	 * @param formatId
	 * @param successCallback	The success callback
	 * @param failureCallback	The error callback 
	 */
	SmartAdServerPlugin.prototype.interstitial = function(pageId, formatId, successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'SmartAdServer',
			'interstitial',		
			[pageId, formatId]
		);
	};
	
	/**
	 * Load SAS Plugin
	 */
	 cordova.addConstructor(function() {
		if (!window.plugins) 
			window.plugins = {};
			
		if (!window.plugins.smartAdServer)
			window.plugins.smartAdServer = new SmartAdServerPlugin();
	});
})(window.PhoneGap || window.Cordova || window.cordova); /* End of Temporary Scope. */