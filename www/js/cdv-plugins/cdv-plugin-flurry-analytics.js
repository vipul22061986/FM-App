(function(cordova) {
	/**
	 * Constructor
	 */
	function FlurryAnalyticsPlugin() {
	}
	
	FlurryAnalyticsPlugin.prototype.startSession = function(sessionKey, successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'FlurryAnalytics',
			'startSession',		
			[sessionKey]
		);
	};
	
	/**
	 * Log a specific event on Flurry Analytics
	 * @param eventId			The name of the tracked event (can be a url or some logical name).
	 * 							The eventId name will be presented in Flurry Analytics report.  
	 * @param params			Array to send with event
	 * @param successCallback	The success callback
	 * @param failureCallback	The error callback 
	 */
	FlurryAnalyticsPlugin.prototype.logEvent = function(eventId, params, successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'FlurryAnalytics',
			'logEvent',		
			[eventId, params]
		);
	};
	
	/**
	 * Increment page view count on Flurry Analytics
	 * @param successCallback	The success callback
	 * @param failureCallback	The error callback 
	 */
	FlurryAnalyticsPlugin.prototype.logPageView = function(successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'FlurryAnalytics',
			'logPageView',		
			[]
		);
	};
	
	/**
	 * Load Analytics
	 */
	 cordova.addConstructor(function() {
		if (!window.plugins) 
			window.plugins = {};
		if (!window.plugins.flurryAnalytics)
			window.plugins.flurryAnalytics = new FlurryAnalyticsPlugin();
	});
})(window.PhoneGap || window.Cordova || window.cordova); /* End of Temporary Scope. */