(function(cordova) {
	/**
	 * Constructor
	 */
	function VideoPlayerPlugin() {
	};
	
	/**
	 * Starts the video player intent
	 *
	 * @param url           The url to play
	 */
	VideoPlayerPlugin.prototype.play = function(url) {
	    cordova.exec(
	    	null, 
	    	null, 
	    	"VideoPlayer", 
	    	"play", 
	    	[url]
	    );
	};
	
	/**
	 * Load VideoPlayerPlugin
	 */
	cordova.addConstructor(function() {
		if(!window.plugins) 
		    window.plugins = {};
		if (!window.plugins.videoPlayer) 
		    window.plugins.videoPlayer = new VideoPlayerPlugin();
	});
})(window.PhoneGap || window.Cordova || window.cordova); /* End of Temporary Scope. */