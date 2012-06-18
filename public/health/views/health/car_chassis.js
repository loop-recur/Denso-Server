if (isAndroid) {
  Ti.include('/helpers/health/car_chassis_helper.js');
} else {
  Ti.include('../../helpers/health/car_chassis_helper.js');
}

Views.health.carChassis = (function() {
  var self = {
        carView: UI.createView({
          width: 337,
          height: 517,
          left: 31,
          top: 147,
          backgroundImage: '/images/health_main_content_box.png'
        }),

        carChassisView: UI.createView({
          backgroundImage: '/images/chassis/chassis_base.png',
          width: '100%'
        }),

        overAllHealth: UI.createView({
          backgroundImage: '/images/health_overall_health_good.png',
          width: 84,
          height: 29,
          top: 5,
          left: 5
        })
      };

    self.buildChassisItem = function() {
      return UI.createImageView({
        width: 320,
        height: 520
      });
    };

    self.init = function() {
      carChassisHelper(self);
      self.carView.add(self.overAllHealth);
      self.carView.add(self.carChassisView);
      return self.carView;
    };

  return self;
})();

