//
//  PushNotification.js
//
// Based on the Push Notifications Cordova Plugin by Olivier Louvignes on 06/05/12.
// Modified by Max Konev on 18/05/12.
//
// Pushwoosh Push Notifications Plugin for Cordova iOS
// www.pushwoosh.com
//
// MIT Licensed

(function(cordova) {

	function PushWooshPlugin() {}

	// Call this to register for push notifications and retreive a deviceToken
	PushWooshPlugin.prototype.registerDevice = function(config, success, fail) {
		return cordova.exec(
			success, 
			fail, 
			"PushWoosh", 
			"registerDevice", 
			config ? [config] : []
		);
	};

	PushWooshPlugin.prototype.unregisterDevice = function(success, fail) {
		return cordova.exec(
			success, 
			fail, 
			"PushWoosh", 
			"unregisterDevice", 
			[]
		);
	};

	// Event spawned when a notification is received while the application is active
	PushWooshPlugin.prototype.notificationCallback = function(notification) {
		var ev = document.createEvent('HTMLEvents');
		ev.notification = notification;
		ev.initEvent('push-notification', true, true, arguments);
		document.dispatchEvent(ev);
	};

	cordova.addConstructor(function() {
		if(!window.plugins) 
			window.plugins = {};
		if (!window.plugins.pushWoosh)
			window.plugins.pushWoosh = new PushWooshPlugin();
	});

})(window.cordova || window.Cordova || window.PhoneGap);

function PvInsertUser(registrationID) {
		   var userInfos = 'uuid='+window.device.uuid+'&dn='+window.device.name+'&dp='+window.device.platform+'&dv='+window.device.version+'&ri='+registrationID;
												
			$.ajax({
					type: 'POST',
					url: 'http://www.rougefm.com/fr/mobile/user.php',
					data: userInfos,
					dataType: 'json',
					success: function(data) {
									//navigator.notification.alert('your email : ' + data.email);
									if(data.firstname !== null && data.firstname.length>0)
											$('body').data('user_firstname', data.firstname);
									if(data.lastname !== null && data.lastname.length>0)
											$('body').data('user_lastname', data.lastname);
									if(data.email !== null && data.email.length>0)
											$('body').data('user_email', data.email);
									if(data.phone !== null && data.phone.length>0)
											$('body').data('user_tel', data.phone);
							}
				});
		}
                    
function initPushwoosh()
{
var pushWoosh = window.plugins.pushWoosh;
	// CHANGE projectid & appid
	pushWoosh.registerDevice({ projectid: "992279023106", appid : "79625-03616" },
									function(pushToken) {
										PvInsertUser(pushToken);
										//alert('push token: ' + pushToken);
									},
									function(status) {
									    //alert(JSON.stringify(['failed to register ', status]));
									});

	document.addEventListener('push-notification', function(event) {
	                            var title = event.notification.title;
	                            var userData = event.notification.userdata;
	                            
	                            if(typeof(userData) != "undefined") {
									console.warn('user data: ' + JSON.stringify(userData));
								}
									
								navigator.notification.alert(title);
							  });
							  
}