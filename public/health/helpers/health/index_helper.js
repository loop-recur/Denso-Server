var _buildHealthItemList = function(carListViewInner) {
  var carHealthItems = [
												{title:"Gas Level", type:"FluidStat", input_name: 'gas_level'},
                        {title:"Wiper Fluid", type:"FluidStat", input_name: 'washer_fluid_level'},
                        {title:"Oil", type:"FluidStat", input_name: "oil_pressure"},
                        {title:"Transmission Fluid", type:"FluidStat", input_name: "transmission_fluid"},
                        {title:"Front Driver Tire", type:"AirStat", input_name: "tire_1_pressure"},
                        {title:"Front Passenger Tire", type:"AirStat", input_name: "tire_2_pressure"},
                        {title:"Rear Driver Tire", type:"AirStat", input_name: "tire_3_pressure"},
                        {title:"Rear Passenger Tire", type:"AirStat", input_name: "tire_4_pressure"},
                        {title:"Front Driver Shock", type:"MechStat", input_name: "front_driver_wheel_detail"},
                        {title:"Front Passenger Shock", type:"MechStat", input_name: "front_passenger_wheel_detail"},
                        {title:"Rear Driver Shock", type:"MechStat", input_name: "rear_driver_wheel_detail"},
                        {title:"Rear Passenger Shock", type:"MechStat", input_name: "rear_passenger_wheel_detail"}
                       ];

    var makeRow = function(i) {
      var hi = new HealthItem(i),

          stat = hi.stat,

          row = Ti.UI.createTableViewRow({
            color: 'white',
            healthItem: hi,
						width: "100%",
            attention: hi.stat.attention,
            input_name: i.input_name
          }),

          titleLabel = UI.createLabel({
            text: i.title,
            left: 20,
            font: {fontSize: 16}
          }),

          statusLabel = UI.createLabel({
            text: String(stat.report()),
            right: 30,
            font: {fontSize: 12}
          }),

          statusImage = UI.createImageView({
						repeatCount: 1,
						duration: 20,
						image: '/images/health_meter/health_meter0.png',
            right: 5,
						width: stat.image_size.width,
						height: stat.image_size.height
          }), 
          
          alertImage = UI.createImageView({
            image: '/images/health_list_alert.png',
            left: 0,
            height: 19,
            width: 22
          });

			var setLastImage = function(images) {
				if(isAndroid) {
					var newStatusImage = UI.createImageView({
						image: last(images),
            right: 5,
						width: statusImage.width,
						height: statusImage.height
          });
					
					row.add(newStatusImage);
					row.remove(statusImage);
					statusImage = newStatusImage;
				} else {
					statusImage.image = last(images);
				}
			}
			
			var clearImages = function() {
				setLastImage(statusImage.images);
				statusImage.removeEventListener('stop', clearImages);
			}
			
			var startAnimation = function() {
				statusImage.start();
				statusImage.addEventListener('stop', clearImages);
			}
			
			var resetImages = function(images) {
				statusImage.images = images;
			}
			
			var setReportText = function() {
				statusLabel.text = hi.stat.report();
			}
			
			var setAttention = function() {
				row.attention = hi.stat.attention;
				alertImage.visible = hi.stat.attention;
			}
			
			var animateNumbers = function() {
				var statuses = hi.stat.reportStatuses();
        var i = 0, len = statuses.length;
        setInterval(function() {
          if (i < len) { statusLabel.text = statuses[i]; }
          i++;
        }, 20);
			}

      row.add(titleLabel);
      row.add(statusLabel);
			row.add(alertImage);
      row.add(statusImage);
      row.addEventListener('click', showItem);
      row.refresh = function() {
				var images = hi.stat.reportImages();
        setReportText();
				setAttention();
				animateNumbers();
				isAndroid ? setLastImage(images) : compose(startAnimation, resetImages)(images);
      };

      return row;
    };

    var showItem = function() {
          Layouts.application.contentRightView.clear();
					Layouts.application.contentRightView.clear();
          Ti.App.removeEventListener('car_stats_received', updateStats);
          Ti.App.fireEvent('onShow');
          Controllers.health.show(this.healthItem);  
			    Views.health.carChassis.update(this.healthItem);
        };

  var updateStat = defn(function(data, row) {
    var healthItem = row.healthItem, 
        updatedData = filterByProperty('input_name', row.input_name, data);

    if(updatedData && healthItem.stat.needsUpdate(updatedData.input_value)) {
      healthItem.stat.update(updatedData.input_value); 
			Views.health.carChassis.update(healthItem);
      row.refresh();
    }
  });

  var updateStats = function(e) {
    var data = e.data, children = carListViewInner.data[0].rows;
    map(updateStat(data), children);
  };

  var rows = map(makeRow, carHealthItems);

  Ti.App.addEventListener('car_stats_received', updateStats);
        
  return rows;
};

