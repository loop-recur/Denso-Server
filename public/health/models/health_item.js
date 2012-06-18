HealthItem = function(opts) {
  this.title = opts.title;
  this.stat = eval('new ' + opts.type);
  this.image = '/images/wiperfocus_wiper_icon.png';
  this.input_name = opts.input_name;
};

