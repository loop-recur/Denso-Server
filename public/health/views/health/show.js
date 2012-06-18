if (isAndroid) {
  Ti.include('/helpers/health/show_helper.js');
} else {
  Ti.include('../../helpers/health/show_helper.js');
}

Views.health.show = function(healthItem) {

    var itemFocus = UI.createView({
        backgroundImage: '/images/health_wiper_focus_top_bg.png',
        height: 278,
        width: 337,
        left: 14,
        top: 147
      }),

      itemFocusLabelView = Ti.UI.createView({
        layout: 'horizontal',
       	width: '100%',
      }),
        
      itemLabel = Ti.UI.createLabel({
        text: healthItem.title,
        top: 15,
        left: 10,
        color: 'white',
        font: {fontSize: 18}
      }),

      itemImage = UI.createImageView({
        image: healthItem.image,
        height: 30,
        width: 36,
        left: 5,
        top: 5
      }),

      itemSeparator = UI.createImageView({
        image: '/images/health_wiper_focus_separator.png',
        height: 10,
        width: 324,
        top: 40,
        left: 10
      }),
     
      itemStatus = _createItemStatusView(healthItem),
     
      itemGuide = UI.createView({
        backgroundImage: '/images/wiperfocus_blankicon_view_in_guide_btn.png',
        backgroundSelectedImage: '/images/wiperfocus_blankicon_view_in_guide_btn_p.png',
        top: 60,
        left: 175,
        width: 150,
        height: 55
      }),

      itemGuideLabel = Ti.UI.createLabel({
        text: "View\nin Guide",
        color: 'white',
        font: {fontSize: 14},
        top: 6
      }),
      
      videoText = {
                   "gas_level": {title: "Which Octane\nfor your Auto", author: 'AutoGuy996', duration: '02:56'},
                   "washer_fluid_level": {title: "How to change\nwasher fluid", author: '76Stations', duration: '01:59'},
                   "oil_pressure": {title: "How to Change\nYour Oil", author: 'JiffyLube', duration: '05:43'},
                   "transmission_fluid": {title: "How to change\ntransmission fluid", author: 'CAautoDeals', duration: '03:44'},
                   "tire_1_pressure": {title: "How to Check\nAir in your Tires", author: 'GoodYearGuy', duration: '02:34'},
                   "tire_2_pressure": {title: "How to rotate\nyour tires", author: 'Gearhead999', duration: '04:23'},
                   "tire_3_pressure": {title: "How to Check\nAir in your Tires", author: 'GoodYearGuy', duration: '02:34'},
                   "tire_4_pressure": {title: "When to buy\nnew tires", author: 'Tirefan', duration: '01:01'},
                   "front_driver_wheel_detail": {title: "How to check\nyour shocks", author: 'MinnAutoShop', duration: '02:45'},
                   "front_passenger_wheel_detail": {title: "How to replace\nauto shocks", author: 'AutopartsDlr', duration: '06:34'},
                   "rear_driver_wheel_detail": {title: "How to check\nyour shocks", author: 'MinnAutoShop', duration: '02:45'},
                   "rear_passenger_wheel_detail": {title: "How to replace\nauto shocks", author: 'AutopartsDlr', duration: '06:34'}
                 },

      itemVideoView = Ti.UI.createView({
        width: 352,
        height: 150,
        top: 125
      }),

      itemVideoSeparator = UI.createImageView({
        image: '/images/health_wiper_focus_separator.png',
        height: 10,
        width: 324,
        top: 1,
        left: 10
      }),

      itemVideo = UI.createImageView({
        image: '/images/video_thumbnail.png',
        width: 171,
        height: 95,
        top: 25,
        left: 20
      }),

      itemVideoTitle = UI.createLabel({
        text: videoText[healthItem.input_name].title,
        left: 206,
        top: 25
      }),

      itemVideoAuthor = UI.createLabel({
        text: 'by ' + videoText[healthItem.input_name].author,
        left: 206,
        top: 75,
        font: {fontSize: 10}
      }),

      itemVideoDuration = UI.createLabel({
        text: videoText[healthItem.input_name].duration,
        left: 206,
        top: 95,
        font: {fontSize: 10}
      }),

      wiperFluidPoi = UI.createView({
        backgroundImage: '/images/health_wiper_focus_poi_bg.png',
        height: 222,
        width: 337,
        left: 12,
        top: 442
      }),

      findNearestBg = UI.createView({
        backgroundImage: '/images/wiperfocus_blank_find_nearest_btn.png',
        backgroundSelectedImage: '/images/wiperfocus_blank_find_nearest_btn_p.png',
        width: 310,
        height: 46,
        top: 30
      }),

      findNearest = UI.createImageView({
        image: '/images/wiperfocus_find_nearest_btn.png',
        width: 310,
        height: 46
      }),

      findNearestLabel = Ti.UI.createLabel({
        text: 'Nearby Service and Automotive:',
        color: 'white',
        font: {fontSize: 12},
        top: 5,
        left: 16
      }),

      findDealBg = UI.createView({
        backgroundImage: '/images/wiperfocus_blank_deal_btn.png',
        backgroundSelectedImage: '/images/wiperfocus_blank_deal_btn_p.png',
        width: 310,
        height: 75,
        top: 116
      }),

      findDeal = UI.createImageView({
        image: '/images/wiperfocus_deal_btn.png',
        width: 310,
        height: 75
      }),

      findDealLabel = Ti.UI.createLabel({
        text: 'Deal!',
        color: 'white',
        font: {fontSize: 12},
        top: 85,
        left: 16
      }),

      backButton = UI.createButton({
        backgroundImage: '/images/back_to_overview_btn.png',
        backgroundSelectedImage: '/images/back_to_overview_btn_p.png',
        width: 135,
        height: 29,
        top: 107,
        right: 235,
        zIndex: 100
      }),

      guideWin = UI.createWindow({
          height: 520,
          width: 520,
          modal: true,
          backgroundImage: '/images/guide_popup_bg.png'
        }),
        
        okayButton = UI.createView({
          backgroundImage: '/images/guide_popup_okay_btn.png',
          backgroundSelectedImage: '/images/guid_popup_okay_btn_p.png',
          width: 272,
          height: 42,
          top: 460
        }),
        
        guideContent = UI.createImageView({
          image: '/images/guide_popup_content.png',
          width: 500,
          height: 436,
          top: 15
        });
     
  guideWin.add(okayButton);
  guideWin.add(guideContent);

  itemFocusLabelView.add(itemLabel);
  itemFocusLabelView.add(itemImage);

  itemFocus.add(itemFocusLabelView);
  itemFocus.add(itemSeparator);
  itemGuide.add(itemGuideLabel);
  itemFocus.add(itemGuide);
  itemFocus.add(itemStatus);

  itemVideoView.add(itemVideoSeparator);
  itemVideoView.add(itemVideo);
  itemVideoView.add(itemVideoTitle);
  itemVideoView.add(itemVideoAuthor);
  itemVideoView.add(itemVideoDuration);
  itemFocus.add(itemVideoView);

  findNearestBg.add(findNearest);
  findDealBg.add(findDeal);
  wiperFluidPoi.add(findNearestLabel);
  wiperFluidPoi.add(findDealLabel);
  wiperFluidPoi.add(findNearestBg);
  wiperFluidPoi.add(findDealBg);

  itemLabel.addEventListener('click', function() {
    Layouts.application.contentRightView.clear();  
    Layouts.application.contentRightView.clear();  
    Ti.App.fireEvent('onBack');
    Controllers.health.index();
  });

  itemGuide.addEventListener('click', function() { guideWin.open(); });
  okayButton.addEventListener('click', function() { guideWin.close() });
       
  backButton.addEventListener('click', function() {
    Layouts.application.contentRightView.clear();
    Layouts.application.contentRightView.clear();
    Ti.App.fireEvent('onBack');
    Controllers.health.index();
  });

  Layouts.application.contentRightView.add(backButton);
  Layouts.application.contentRightView.add(wiperFluidPoi);
  Layouts.application.contentRightView.add(itemFocus);

 /* searchTerms = {
   "gas_level": 'how to pump gas',
   "washer_fluid_level": 'how to change washer fluid',
   "oil_pressure": 'how to change oil',
   "transmission_fluid": 'how to change transmission fluid',
   "tire_1_pressure": 'how to check air in tire',
   "tire_2_pressure": 'how to check air in tire',
   "tire_3_pressure": 'how to check air in tire',
   "tire_4_pressure": 'how to check air in tire',
   "front_driver_wheel_detail": 'how to check auto shocks',
   "front_passenger_wheel_detail": 'how to check auto shocks',
   "rear_driver_wheel_detail": 'how to check auto shocks',
   "rear_passenger_wheel_detail": 'how to check auto shocks',
  };*/

  /*(var getVids = function() {
    var xhr = Ti.Network.createHTTPClient({
          onload: function(e) {
            var data = JSON.parse(this.responseText),
                entry = data.feed.entry[0],
                title = entry.title.$t,
                author = entry.author[0].name.$t,
                duration = entry.media$group.yt$duration.seconds,
                minutes = Math.floor(duration/60),
                seconds = duration % 60,
                durationOutput = String(minutes) + ':' + String(seconds);
               // link = first(first(data.feed.entry).link).href;
               // itemVideo.url = link;
                itemVideoTitle.text = title;
                itemVideoAuthor.text = 'by ' + author; 
                itemVideoDuration.text = durationOutput;
          },
          onerror: function(e) {
          }
        }),
        
        url = 'http://gdata.youtube.com/feeds/api/videos?q='+searchTerms[healthItem.input_name]+'&alt=json&max-results=1&start-index=1';
        xhr.open("GET", url);
        xhr.send();
  };

  getVids();*/
};

