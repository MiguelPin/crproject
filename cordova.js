var VERSION='2.0.0';
var scripts = document.getElementsByTagName('script');


var cordovaPath = scripts[scripts.length - 1].src.replace('cordova.js', ''+VERSION+'.js');

if (window.device && device.platform && device.platform.toLowerCase() == 'android') {

            document.write('<script type="text/javascript" charset="utf-8" src="cordova-android-' + cordovaPath + '"></script>');
	}
	
	else if (window.device && device.platform && device.platform.toLowerCase() == 'windows phone') {

            document.write('<script type="text/javascript" charset="utf-8" src="cordova-win-' + cordovaPath + '"></script>');
	}
	
	
	else {
	document.write('<script type="text/javascript" charset="utf-8" src="cordova-' + cordovaPath + '"></script>');
	}





