carChassisHelper = function(view) {
  var chassisItems = ['gas_level', 'washer_fluid_level', 'coolant_fluid', 'oil_pressure', 'transmission_fluid', 'tire_1_pressure', 'tire_2_pressure', 'tire_3_pressure', 'tire_4_pressure', 'brake_fluid', 'power_steering_fluid', 'front_driver_wheel_detail', 'front_passenger_wheel_detail', 'rear_driver_wheel_detail', 'rear_passenger_wheel_detail'];

	var _chassisImage = function(itemName, level) {
		return isAndroid ? "/images/chassis/chassis_"+itemName+"_"+level+".png" : "images/chassis/chassis_"+itemName+"_"+level+".png"
	}

  var _buildChassisItem = function(title) {
    view[title] = view.buildChassisItem();
    view.carView.add(view[title]);
  };

  map(_buildChassisItem, chassisItems);

  view.update = function(healthItem) {
		var level = healthItem.stat.reportChassisLevel();
    if(view[healthItem.input_name] && level) view[healthItem.input_name].image = _chassisImage(healthItem.input_name, level);
  };  

  view.clear = function() {
    for(var i = 0, len = chassisItems.length; i < len; i++) {
      if(view[chassisItems[i]]) view[chassisItems[i]].image = null;
    }
  };

  Ti.App.addEventListener('onShow', function() {
        view.overAllHealth.visible = false;
        view.clear();
  });

  Ti.App.addEventListener('onBack', function() {
        view.overAllHealth.visible = true;
        view.clear();
  });

};

