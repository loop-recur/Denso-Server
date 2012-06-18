var SocketIp;
Ti.include('theme_name.js');
Ti.include('initializers/init.js');
CurrentTheme = Theme(ThemeName);

var win = UI.createWindow({
	height:768,
	width:1024,
	top:0,
	left:0
});

PromptConnect(function(ip){
	SocketIp = ip;
	Layouts.application.build(win);
	Controllers.application.index();
	win.open();
});

