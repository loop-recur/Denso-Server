PromptConnect = function(cb, options) {
	options = (options || {});
	
	var addChangeIpKeyListener = function() {
		document.onkeydown = function(e){
			var key = window.event ? window.event.keyCode : e.keyCode;
			if(String.fromCharCode(key) == "Q") PromptConnect(function(ip){ alert("Changed IP to "+ip); }, {redo : true});
		}
	}

	var init = function() {
		if(!isAndroid) addChangeIpKeyListener();
		var stored_ip = FileCache.read("node_ip");
		(!options.redo && stored_ip) ? _loadApp(stored_ip) : IpWizard(_loadApp);
	}

	var failConnect = function() {
		FileCache.destroy('node_ip');
		init();
	}

	var successfulConnect = function(ip) {
		FileCache.set("node_ip", ip);
		cb('http://'+ip);
	}

	var _loadApp = function(ip) {
		successfulConnect(ip);
	}

	init();
}

