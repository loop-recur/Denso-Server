if (isAndroid) {
  Ti.include('/helpers/health/index_helper.js');
} else {
  Ti.include('../../helpers/health/index_helper.js');
}

Views.health.index = function() {
  var carListView = UI.createView({
        width: 337,
        height: 517,  
        left: 13,
        top: 147,
        backgroundImage: '/images/health_main_content_box.png'
      }),

      carListViewInner = Ti.UI.createTableView({
        width: '98%',
        height: '100%',
        separatorColor: 'gray'
      }),

      socketView = Ti.UI.createWebView({
        visible: false
       }),

      carListData = _buildHealthItemList(carListViewInner);
			
			if(isAndroid) {
				socketView.html = SocketPage(SocketIp);
			} else {
				socketView.url = "pages/socket_page.html";
			}

  carListViewInner.setData(carListData);
  carListView.add(carListViewInner);
  Layouts.application.contentRightView.add(carListView);
  Layouts.application.contentView.add(socketView);
};

