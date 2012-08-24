var VERSION='2.0.0';
var scripts = document.getElementsByTagName('script');


var cordovaPath = scripts[scripts.length - 1].src.replace('cordova.js', ''+VERSION+'.js');

if (window.device && device.platform && device.platform.toLowerCase() == 'android') {

            document.write('<script type="text/javascript" charset="utf-8" src="cordova-android-' + cordovaPath + '"></script>');
	}
	else {
	document.write('<script type="text/javascript" charset="utf-8" src="cordova-' + cordovaPath + '"></script>');
	}




function goBack() {
	if (window.device && device.platform && device.platform.toLowerCase() == 'android') {

            navigator.app.backHistory();
	}
	else {
	    window.history.go(-1);
	}
}
