FileCache = (function() {
	return (Ti.Platform.osname == 'android') ? AndroidFileCache() : HtmlFileCache();
})();
