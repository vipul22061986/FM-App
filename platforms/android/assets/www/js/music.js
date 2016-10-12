//var radioMedia = null;
//var radioPlaying = {radioMedia: null, flux: null, itunesLink: null, isPlaying: false, shortPlayer: null, urlShortPlayer: null};


//http://stackoverflow.com/questions/287903/enums-in-javascript
var RADIO = {
	YESFM_HIGH : {xmlFile: "http://www.yesfm.ch/external/timeline/timeline_yesfm.xml", radioFlux: "http://yesfm.ice.infomaniak.ch/yesfm-high.mp3", image:"YES_Live.png"},
	ROUGE_ROCKPOP_HIGH : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rock.xml", radioFlux: "http://rouge-rockpop.ice.infomaniak.ch/rouge-rockpop-high.mp3", image:"YES_Webradios_Rockc.png"},
	ROUGEPLATINE_HIGH : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_platine.xml", radioFlux: "http://rougeplatine.ice.infomaniak.ch/rougeplatine-high.mp3", image:"YES_Webradios_Platinec.png"},
	ROUGE_90_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rouge90s.xml", radioFlux: "http://rouge-90.ice.infomaniak.ch/rouge-90-128.mp3", image:"Logo_Yes90S.jpg"},
	ROUGE_LATINO_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougelatino.xml", radioFlux: "http://rouge-latino.ice.infomaniak.ch/rouge-latino-128.mp3", image:"Logo_YesLATINO.jpg"},
	ROUGE_RNB_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougernb.xml", radioFlux: "http://rouge-rnb.ice.infomaniak.ch/rouge-rnb-128.mp3", image:"Logo_YesRNB.jpg"},
	ROUGE_DANCE_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougedance.xml", radioFlux: "http://rouge-dance.ice.infomaniak.ch/rouge-dance-128.mp3", image:"Logo_YesDANCE.jpg"},
	ROUGE_LOUNGE_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougelounge.xml", radioFlux: "http://rouge-lounge.ice.infomaniak.ch/rouge-lounge-128.mp3", image:"Logo_YesLOUNGE.jpg"},
	ROUGE_70S_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rouge70s.xml", radioFlux: "http://rouge-70s.ice.infomaniak.ch/rouge-70s-128.mp3", image:"Logo_Yes70S.jpg"},
	ROUGE_80S_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rouge80s.xml", radioFlux: "http://rouge-80s.ice.infomaniak.ch/rouge-80s-128.mp3", image:"Logo_Yes80S.jpg"},
	ROUGE_ALTERNATIVE_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougealternative.xml", radioFlux: "http://rouge-alternative.ice.infomaniak.ch/rouge-alternative-128.mp3", image:"Logo_YesALTERNATIVE.jpg"},
	ROUGE_DISCO_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougedisco.xml", radioFlux: "http://rouge-disco.ice.infomaniak.ch/rouge-disco-128.mp3", image:"Logo_YesDISCO.jpg"},
	ROUGE_HIPHOP_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougehiphop.xml", radioFlux: "http://rouge-hiphop.ice.infomaniak.ch/rouge-hiphop-128.mp3", image:"Logo_YesHIPHOP.jpg"},
	ROUGE_HOT100_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougehot100.xml", radioFlux: "http://rouge-hot100.ice.infomaniak.ch/rouge-hot100-128.mp3", image:"Logo_Yes100HOT.jpg"},
	ROUGE_INLOVE_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougeinlove.xml", radioFlux: "http://rouge-inlove.ice.infomaniak.ch/rouge-inlove-128.mp3", image:"Logo_YesINLOVE.jpg"},
	ROUGE_ITALIA_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougeitalia.xml", radioFlux: "http://rouge-italia.ice.infomaniak.ch/rouge-italia-128.mp3", image:"Logo_YesITALIA.jpg"},
	ROUGE_MADEINFRANCE_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougemadeinfrance.xml", radioFlux: "http://rouge-madeinfrance.ice.infomaniak.ch/rouge-madeinfrance-128.mp3", image:"Logo_YesFRANCE.jpg"},
	ROUGE_REGGAE_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougereggae.xml", radioFlux: "http://rouge-reggae.ice.infomaniak.ch/rouge-reggae-128.mp3", image:"Logo_YesRAGGAE.jpg"},
	ROUGE_SOUNDTRACK_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougesoundtrack.xml", radioFlux: "http://rouge-soundtrack.ice.infomaniak.ch/rouge-soundtrack-128.mp3", image:"Logo_YesSOUNDTRACK.jpg"},
	ROUGE_BPM_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougebpm.xml", radioFlux: "http://rouge-bpm.ice.infomaniak.ch/rouge-bpm-128.mp3", image:"Logo_YesBPM.jpg"},
	ROUGE_METAL_128 : {xmlFile: "http://www.rougefm.com/external/timeline/timeline_rougemetal.xml", radioFlux: "http://rouge-metal.ice.infomaniak.ch/rouge-metal-128.mp3", image:"Logo_YesMETAL.jpg"}
};

var radioPlaying = {radioMedia: (new Audio(generateURL(RADIO.YESFM_HIGH.radioFlux))), flux: RADIO.YESFM_HIGH, itunesLink: null, isPlaying: false, shortPlayer: null, urlShortPlayer: null, urlImage: RADIO.YESFM_HIGH.image};

function generateURL(url) {
	var d = new Date();
	var timestamp = Math.round(d.getTime() / 1000);
	return url + "?amsparams=playerid%3AYesfm-app-android%3Bskey%3A" + (timestamp);
	//return url + "?amsparams=playerid%3AYesfm-app-ios%3Bskey%3A" + (new Date().getTime());
}

function playStream(radioToPlay) {
	if(radioToPlay == radioPlaying.flux) {
		return;
	}
	console.log("play");
	pauseStream();
	if (radioPlaying.radioMedia) {
		$('#playerMyAdio').remove();
	}
	try {
		//radioMedia = new Audio(radioToPlay.radioFlux);
		radioPlaying.flux = radioToPlay;
		radioPlaying.radioMedia =  new Audio();
		radioPlaying.radioMedia.src = generateURL(radioToPlay.radioFlux);
		//alert(radioPlaying.radioMedia.src);
		radioPlaying.urlImage = radioToPlay.image;
		radioPlaying.radioMedia.id = 'playerMyAdio';
		/*radioPlaying.radioMedia.play();
		radioPlaying.isPlaying = true;*/
		clickUpdateButtonPlayer();
	} catch (e) {
		alert('no audio support!');
	}
	//clickUpdateButtonPlayer();
}

function pauseStream() {
	console.log("pause");
	if (radioPlaying.radioMedia) {
		radioPlaying.radioMedia.pause();
		radioPlaying.isPlaying = false;
	}
}

function playPauseMedia() {
	/*if (!radioPlaying.radioMedia)
		return;*/

	if (radioPlaying.isPlaying) {
		pauseStream();
		radioPlaying.isPlaying = false;
	} else {
		if(radioPlaying.radioMedia) {
			radioPlaying.radioMedia.play();
		}
		radioPlaying.isPlaying = true;
	}
}


function getInfoStream(callback) {
	//$.support.cors = true
	if (radioPlaying.flux == null)
		return;

	$.ajax({
        url: radioPlaying.flux.xmlFile,
        type: 'get',
        dataType: 'html',
        async: true,
        success: function(xml) {
        	var data = $.parseXML( xml );
            var now = data.getElementsByTagName("now")[0];
	        var next = data.getElementsByTagName("next")[0];
	        var prev = data.getElementsByTagName("item")[1];

	        var result = {
	        now: {
	        	artist: now.getElementsByTagName("artist")[0].childNodes[0].data,
	        	title: now.getElementsByTagName("title")[0].childNodes[0].data,
	        	cover: now.getElementsByTagName("cover")[0].childNodes[0].data,
	        	itunes: now.getElementsByTagName("itunes")[0].childNodes[0].data
	        }, 
	        next: {
	        	artist: next.getElementsByTagName("artist")[0].childNodes[0].data,
	        	title: next.getElementsByTagName("title")[0].childNodes[0].data,
	        	itunes: next.getElementsByTagName("itunes")[0].childNodes[0].data,
	        	cover: next.getElementsByTagName("cover")[0].childNodes[0].data
	        },
	    	prev: {
	    		artist: prev.getElementsByTagName("artist")[0].childNodes[0].data,
	        	title: prev.getElementsByTagName("title")[0].childNodes[0].data,
	        	itunes: prev.getElementsByTagName("itunes")[0].childNodes[0].data,
	        	cover: prev.getElementsByTagName("cover")[0].childNodes[0].data
	    	}};
	        radioPlaying.itunesLink = now.getElementsByTagName("itunes")[0].childNodes[0].data;
	        if (typeof callback === "function") {
		    	// Call it, since we have confirmed it is callable
		        callback(result);
		    }
        } 
     });
}


function playPause30s(url) {
	
	
	if (!radioPlaying.shortPlayer || radioPlaying.urlShortPlayer != url) {
		if (radioPlaying.shortPlayer)
			radioPlaying.shortPlayer.pause();

		radioPlaying.urlShortPlayer = url
		radioPlaying.shortPlayer = new Audio(generateURL(url));
		radioPlaying.shortPlayer.play();

	} else {
		radioPlaying.shortPlayer.pause();
		radioPlaying.shortPlayer = null;
		radioPlaying.urlShortPlayer = null
	}
}



/*
var currentSize = SIZE.MEDIUM;
if (currentSize == SIZE.MEDIUM) {
	alert(currentSize.value + ": " + currentSize.name);
}*/


