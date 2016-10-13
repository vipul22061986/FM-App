(function(cordova) {
	/**
	 * Constructor
	 */
	function GoogleAnalyticsPlugin() {
	}
	
	/**
	 * Initialize Google Analytics configuration
	 * 
	 * @param trackingId		The Google Analytics account id 
	 * @param successCallback	The success callback
	 * @param failureCallback	The error callback
	 */
	GoogleAnalyticsPlugin.prototype.startTracker = function(trackingId, successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			 
			failureCallback,						
			'GoogleAnalytics',				
			'startTracker',								
			[trackingId]
		);
	};
	
	/**
	 * Track a page view on Google Analytics 
	 * @param screen				The name of the tracked item (can be a url or some logical name).
	 * 							The key name will be presented in Google Analytics report.  
	 * @param successCallback	The success callback
	 * @param failureCallback	The error callback 
	 */
	GoogleAnalyticsPlugin.prototype.sendView = function(screen, successCallback, failureCallback) {
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'GoogleAnalytics',
			'sendView',		
			[screen]
		);					
	};
	
	/**
	 * Track an event on Google Analytics
	 * @param category			The name that you supply as a way to group objects that you want to track
	 * @param action			The name the type of event or interaction you want to track for a particular web object
	 * @param label				Provides additional information for events that you want to track (optional)
	 * @param value				Assign a numerical value to a tracked page object (optional)
	
	 * @param successCallback	The success callback
	 * @param failureCallback	The error callback 
	 */
	
	GoogleAnalyticsPlugin.prototype.sendEvent = function(category, action, label, value, successCallback, failureCallback){
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'GoogleAnalytics',
			'sendEvent',		
			[
				category, 
				action, 
				typeof label === "undefined" ? "" : label, 
				(isNaN(parseInt(value,10))) ? 0 : parseInt(value, 10)
			]
		);					
	};
	
	GoogleAnalyticsPlugin.prototype.setCustomVar = function(key, value, successCallback, failureCallback){
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'GoogleAnalytics',
			'setCustomVar',		
			[
				key,
				value
			]
		);					
	};
	
	
	GoogleAnalyticsPlugin.prototype.setDispatchPeriod = function(value, successCallback, failureCallback){
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'GoogleAnalytics',
			'setDispatchPeriod',		
			[
				value
			]
		);					
	};
	
	
	GoogleAnalyticsPlugin.prototype.dispatch = function(successCallback, failureCallback){
		return cordova.exec(
			successCallback,			
			failureCallback,		
			'GoogleAnalytics',
			'dispatch',		
			[]
		);					
	};


	/**
	 * Load Analytics
	 */
	 cordova.addConstructor(function() {
		if (!window.plugins) 
			window.plugins = {};
		if (!window.plugins.analytics)
			window.plugins.googleAnalytics = new GoogleAnalyticsPlugin();
	});
})(window.PhoneGap || window.Cordova || window.cordova); /* End of Temporary Scope. */
