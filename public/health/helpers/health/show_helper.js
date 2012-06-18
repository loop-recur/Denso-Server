var _createItemStatusView =  function(healthItem) {
  var stat = healthItem.stat,
      view = UI.createView({
        top: 50,
        left: 10,
        height: 75,
        width: 200
      }),

      statusLabelView = Ti.UI.createView({
        width: '100%',
        height: 22,
        top: 0,
        layout: 'horizontal'
      }),

      statusLabel = Ti.UI.createLabel({
        text: "Status: " + (stat.report() || 'unreported'),
        top: 5,
        left: 5,
        color: 'white',
        font: {fontSize: 12}
      }),

      statusImage = UI.createImageView({
        image: stat.reportStaticImage(),
        repeatCount: 1,
        duration: 20,
        top: 9,
        left: 5,
				width: stat.image_size.width,
				height: stat.image_size.height
      }),

      currentLabel = Ti.UI.createLabel({
        text: (stat.measurementName && stat.measurementSuffix) ? ('Current '+stat.measurementName+stat.currentMeasurement()+stat.measurementSuffix) : '',
        top: 25,
        left: 5,
        color: 'white',
        font: {fontSize: 12}
      }),

      availableLabel = Ti.UI.createLabel({
        text: (stat.measurementName) ? ('Available '+stat.measurementName+stat.availableMeasurement+stat.measurementSuffix) : '',
        top: 45,
        left: 5,
        color: 'white',
        font: {fontSize: 12}
      });

  statusLabelView.add(statusLabel);
  statusLabelView.add(statusImage);
  view.add(currentLabel);
  view.add(availableLabel);
  view.add(statusLabelView);

  var clearImages = function() {
    if(statusImage.images) statusImage.image = last(statusImage.images);
    statusImage.removeEventListener('stop', clearImages);
  }

	var changeImage = function(images) {
		var newStatusImage = UI.createImageView({
			image: last(images),
      top: 9,
      left: 5,
			width: statusImage.width,
			height: statusImage.height
    });
		
		statusLabelView.remove(statusImage);
		statusLabelView.add(newStatusImage);
		statusImage = newStatusImage;
	}

  var animateImage = function(images) {
		statusImage.images = images;
    statusImage.start();
		statusImage.addEventListener('stop', clearImages);
	}

  var updateStat = function(e) {
    var updatedData = filterByProperty('input_name', healthItem.input_name, e.data);

    if(updatedData && stat.needsUpdate(updatedData.input_value)) {
      stat.update(updatedData.input_value); 
      Views.health.carChassis.update(healthItem);
      statusImage.images = null;
      var imgs = stat.reportImages();
      statusLabel.text = "Status: " + stat.report();
      currentLabel.text = (stat.measurementName) ? ('Current '+stat.measurementName+stat.currentMeasurement()+stat.measurementSuffix) : '';
			isAndroid ? changeImage(imgs) : animateImage(imgs);
    }
  };

  Ti.App.addEventListener('car_stats_received', updateStat);
	Ti.App.addEventListener('onBack', function() {
		Ti.App.removeEventListener('car_stats_received', updateStat);
	});

  return view;
};

