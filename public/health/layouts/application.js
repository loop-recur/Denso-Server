Layouts.application = (function() {
  var win;

  var _registerContentView = function() {
    Layouts.application.contentView = Ti.UI.createView({
      width: 768,
      left: 256
    });

    Layouts.application.contentLeftView = Ti.UI.createView({
      width: 384,
      left: 0,
      clear: function() {
        map(function(c) { Layouts.application.contentLeftView.remove(c) }, Layouts.application.contentLeftView.children);
      }
    });

    Layouts.application.contentRightView = Ti.UI.createView({
      width: 384,
      right: 0,
      clear: function() {
        map(function(c) { Layouts.application.contentRightView.remove(c) }, Layouts.application.contentRightView.children);
      }
    });

    Layouts.application.contentLeftView.add(Views.health.carChassis.init());
    Layouts.application.contentView.add(Layouts.application.contentLeftView);
    Layouts.application.contentView.add(Layouts.application.contentRightView);
    win.add(Layouts.application.contentView);
  };

  var _buildTopBar = function() {
    var topBar = UI.createView({
          width: '100%',
          top: 0,
          left: 0,
          backgroundImage: '/images/top_bar_bg.png',
          height: 40,
          zIndex: 15
        }),

        carIcon = UI.createImageView({
          image: '/images/topbar_car_icon.png',
          height: 36,
          width: 36,
          left: 795
        }),

        time = UI.createLabel({
          text: DateFormatter.time(),
          font: {fontSize: 16},
          left: 482,
          top: 12
        }),

        date = UI.createLabel({
          text: DateFormatter.date(),
          font: {fontSize: 16},
          top: 12,
          left: 50
        }),
  
        powerButton = UI.createImageView({
          image: '/images/topbar_on_icon.png',
          width: 36,
          height: 36,
          left: 760
        }),

        emergencyButton = Ti.UI.createButton({
          backgroundImage: '/images/top_bar_emergency_btn.png',
          backgroundSelectedImage: '/images/top_bar_emergency_btn_a.png',
          width: 35,
          height: 35,
          left: 5
        }),

        logo = UI.createImageView({
          image: '/images/top_bar_logo.png',
          width: 150,
          left: 844
        });
		
    topBar.add(emergencyButton);
    topBar.add(powerButton);
    topBar.add(carIcon);
    topBar.add(time);
    topBar.add(date);
    topBar.add(logo);
    win.add(topBar);
  };

  var _buildMediaBar = function() {
    var mediaPlayer = UI.createView({
          width: '100%',
          height: 80,
          bottom: 0,
          backgroundImage: '/images/media_bar_bg.png',
          zIndex: 15
        }),

        coverArt = UI.createImageView({
          image: '/images/Media-Bar1-_31.png',
          left: 30
        }),

        nowPlaying = Ti.UI.createLabel({
          text: 'Now Playing',
          top: 15,
          left: 100,
          color: 'gray',
          font: {fontSize: 14}
        }),

        songTitle = Ti.UI.createLabel({
          text: "Moment's Notice",
          top: 30,
          left: 100,
          color: 'white'
        }),

        artist = Ti.UI.createLabel({
          text: 'John Coltrane',
          top: 48,
          left: 100,
          color: 'gray',
          font: {fontSize: 14}
        }),

        mediaBack = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_back.png',
          backgroundSelectedImage: '/images/media_bar_back_p.png',
          left: 385.5,
          width: 68,
          height: 68,
          top: 10
        }),

        mediaForward = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_fwd.png',
          backgroundSelectedImage: '/images/media_bar_fwd_p.png',
          left: 570.5,
          zIndex: 10,
          width: 68,
          height: 68,
          top: 10
        }),

        mediaPlay = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_play.png',
          backgroundSelectedImage: '/images/media_bar_play_p.png',
          left: 468.5,
          width: 87,
          height: 87,
          top: 5
        }),

        mediaRepeat = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_repeat.png',
          backgroundSelectedImage: '/images/media_bar_repeat_p.png',
          left: 255,
          width: 44,
          height: 40
        }),

        mediaShuffle = Ti.UI.createButton({
          backgroundImage: '/images/media_bar_shuffle.png',
          backgroundSelectedImage: '/images/media_bar_shuffle_p.png',
          left: 305,
          width: 44,
          height: 40,
          enabled: true
        }),

        sliderView = Ti.UI.createView({
          width: 345,
          height: 25,
          left: 654,
          zIndex: 19
        }),

        volumeSlider = Ti.UI.createSlider({
          width: 275,
          height: 20,
          left: 35,
          zIndex: 20
        }),

        smallVolume = UI.createImageView({
          image: '/images/media_bar_low_vol.png',
          height: 25,
          width: 25,
          left: 15,
          zIndex: 20
        }),

        largeVolume = UI.createImageView({
          image: '/images/media_bar_hi_vol.png',
          height: 25,
          width: 25,
          left: 308,
          zIndex: 20
        });

    mediaPlayer.add(smallVolume);
    mediaPlayer.add(largeVolume);
    mediaPlayer.add(nowPlaying);
    mediaPlayer.add(songTitle);
    mediaPlayer.add(artist);
    mediaPlayer.add(coverArt);
    mediaPlayer.add(mediaBack);
    mediaPlayer.add(mediaForward);
    mediaPlayer.add(mediaPlay);
    mediaPlayer.add(mediaRepeat);
    mediaPlayer.add(mediaShuffle);

    sliderView.add(smallVolume);
    sliderView.add(volumeSlider);
    sliderView.add(largeVolume);
    mediaPlayer.add(sliderView);
    win.add(mediaPlayer);
  };

  var _buildSideBar = function() {
    var sideBar = UI.createView({
          width: 256,
          left: 0,
          backgroundImage: '/images/sidebar_overlay.png'
        }),

        underTheHood = UI.createImageView({
          image: '/images/sidebar_under_the_hood_heading.png',
          left: 38,
          top: 125,
          width: 188,
          zIndex: 15
        }),

        sideBarBack = UI.createImageView({
          image: '/images/sidebar_backhome.png',
          top: 95,
          left: 10,
          height: 19,
          width: 63,
          zIndex: 15
        }),

        sideBarInner = Ti.UI.createTableView({
          top: 175,
          left: 0,
          width: 238
        }),

        sidePanelData = [
                          {title: 'Health', icon: '/images/sidebar_health_icon.png', color: '/images/sidebar_1.png'},
                          {title: 'Stats', icon: '/images/sidebar_stats_icon.png', color: '/images/sidebar_2.png'}, 
                          {title: "Scheduled\nMaintenance", icon: '/images/sidebar_maitnence_icon.png', color: '/images/sidebar_3.png'}, 
                          {title: 'Guide', icon: '/images/sidebar_guide_icon.png', color: '/images/sidebar_4.png'} 
                        ],

        rows = [];

    for (var i=0, len=sidePanelData.length; i < len; i++) {
      var data = sidePanelData[i],
          row = Ti.UI.createTableViewRow({
            width: '100%',
            height: 80,
            backgroundImage: ((sidePanelData[i].title == "Health") ? '/images/health_background.png' : ''),
          }),

          icon = UI.createView({
            backgroundImage: data.icon,
            left: 35,
            height: 40,
            width: 40,
            zIndex: 16
          }),

          color = UI.createView({
            backgroundImage: data.color,
            left: 0,
            width: 19,
            zIndex: 16
          }),

          label = Ti.UI.createLabel({
            text: data.title,
            color: 'white',
            left: 95
          });

      row.add(icon);
      row.add(color);
      row.add(label);
      rows.push(row);
    }

    sideBarInner.setData(rows);
    sideBar.add(sideBarInner);
    win.add(sideBarBack);

    sideBarBack.addEventListener('click', function() {
      Layouts.application.contentRightView.clear();  
      Layouts.application.contentRightView.clear();  
      Ti.App.fireEvent('onBack');
      Controllers.health.index();
    });

    win.add(underTheHood);
    win.add(sideBar);
  };

  var _buildCarSummary = function() {
    var healthAutoBox = Ti.UI.createView({
          backgroundImage: '/images/health_auto_box.png',
          top: 64,
          left: 286,
          width: 194,
          height: 59
        });

    var carPreview = UI.createImageView({
          image: '/images/cadillac_xts_avatar.png',
          width: 40,
          height: 40,
          top: 7,
          left: 5
        });

    var carMakeModel = Ti.UI.createLabel({
          text: '2011 Cadillac XTS',
          color: 'white',
          bottom: 5,
          right: 5,
          font: {fontSize: 14}
        });

    healthAutoBox.add(carPreview);
    healthAutoBox.add(carMakeModel);
    win.add(healthAutoBox);
  };

  var build = function(w) {
    win = w; 
    _registerContentView();
    _buildTopBar();
    _buildMediaBar();
    _buildSideBar();
    _buildCarSummary();
  };

  return {build: build}
})();
