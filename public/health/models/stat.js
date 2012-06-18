var halfAndRound = function(n) { return Math.round(n/2); };
var getMeterImage = function(n) { return '/images/health_meter/health_meter'+n+'.png'; };

Stat = function() { this.level = 0; };
Stat.prototype = {
	attention: false,
	className: "meter",
	image_size: {width: 21, height: 9},
  
  reportLevel: function() { return this.level; },

  update: function(n) { 
    this.oldLevel = this.level;
    this.level = Number(n); 
  },

  needsUpdate: function(n) { return n != this.level;},

	getImageFun: compose(getMeterImage, halfAndRound),
	
	getStepFun: function() {
		var self = this;
		var incIfGreater = function(n){ if(self.level > n) return [self.getImageFun(n), n+1]; }
		var decIfLower = function(n){ if(self.level < n) return [self.getImageFun(n), n-1]; }

		return this.oldLevel > this.level ? decIfLower : incIfGreater;
	},
	
	reportImages: function() {
                        if(this.level < 0 && this.level > 100) return [];
												return uniq(unfoldr(this.getStepFun(), this.oldLevel));
                      },

  reportChassisLevel: function() {
		if(this.levelIsLow()) return "red";
		if(this.levelIsMedium()) return "yellow";
    if(this.levelIsHigh()) return "green";
  }

};

FluidStat = function() {
  
  this.measurementName = 'Volume: ';

  this.measurementSuffix = 'L';

  this.availableMeasurement = 8;

  this.currentMeasurement = function() { return this.availableMeasurement * (this.level/100); };

  this.thresholds = { 5: 'veryLow', 
                35: 'low', 
                80: 'good', 
                100: 'veryGood'
              };

  this.messages = { veryLow: 'Very Low', 
              low: 'Low', 
              good: 'Good', 
              veryGood: 'Very Good'
            };

  this.reportStatuses = function() {
    var msg_array = [], 
        greaterThan = (this.oldLevel > this.level);

    if (greaterThan) {
      while (this.oldLevel >= this.level) {
        var msg = this.messages[this.reportStatusLevel()];
            msg += ' ('+this.oldLevel+'%)';
            msg_array.push(msg);
            this.oldLevel -= 1;
      }
    } else {
      while (this.oldLevel <= this.level) {
        var msg = this.messages[this.reportStatusLevel()];
            msg += ' ('+this.oldLevel+'%)';
            msg_array.push(msg);
            this.oldLevel += 1;
      }
    }

    return msg_array;
  };

  this.reportStatusLevel = function() {
      for (t in this.thresholds) {
        if(this.thresholds.hasOwnProperty(t)  && +this.oldLevel <= t) {
          return this.thresholds[t];
        }
      }
  };

  this.report = function() {
            var msg = this.messages[this._reportThreshold()];

            this._setAttention(msg);

            msg += ' ('+this.reportLevel()+'%)';
            return (this.level >= 0 && this.level <= 100) ? msg : '';
          };

  this.reportStaticImage = function() {
    return (this.level >= 0 && this.level <= 100) ? ('/images/health_meter/health_meter'+Math.round(this.level/2)+'.png') : ''
  };

	this.levelIsHigh = function() { return (this.level > 68 && this.level <= 100); };
	this.levelIsMedium = function() { return (this.level > 46 && this.level <= 68); };
	this.levelIsLow = function() { return (this.level >= 0 && this.level <= 46); };

  this._setAttention = function(msg) { this.attention = (msg == "Very Low") };

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t)  && +this.reportLevel() <= t) {
                          return this.thresholds[t]
                        }
                      }
                    };
};

MechStat = function() {
	this.className = "dot";
	this.image_size = {width: 14, height: 14};
  this.thresholds = { 40: 'check', 75: 'ok', 100: 'good' };

  this.messages = { check: 'Check', ok: 'OK', good: 'Good' };

  this.reportStatuses = function() {
    return [this.messages[this._reportThreshold()]];
  };

  this.report = function() {
            var msg = this.messages[this._reportThreshold()];
            this._setAttention(msg);
            return msg;
  };

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t) && +this.reportLevel() <= t) {
                          return this.thresholds[t]
                        }
                      }
                    };

	this.levelIsHigh = function() { return (this.level > 75 && this.level <= 100); };
	this.levelIsMedium = function() { return (this.level > 40 && this.level <= 75); };
	this.levelIsLow = function() { return (this.level <= 40); };

  this._setAttention = function(msg) { this.attention = (msg == "Check") };

  this.reportStaticImage = function() {
    if(this.messages[this._reportThreshold()] === "Check") {
      return '/images/health_list_red.png';
    } else if(this.messages[this._reportThreshold()] === "OK") {
      return '/images/health_list_yellow.png';
    } else {
      return '/images/health_list_green.png';
    }

  };

  this.reportImages = function() {
    if(this.messages[this._reportThreshold()] === "Check") {
      return ['/images/health_list_red.png', '/images/health_list_red.png'];
    } else if(this.messages[this._reportThreshold()] === "OK") {
      return ['/images/health_list_yellow.png', '/images/health_list_yellow.png'];
    } else {
      return ['/images/health_list_green.png', '/images/health_list_green.png'];
    }
  };
};

AirStat = function() {
  this.measurementName = 'Pressure: ';

  this.measurementSuffix = ' psi';

  this.availableMeasurement = 50;

  this._reportThreshold = function() {
                      for (t in this.thresholds) {
                        if(this.thresholds.hasOwnProperty(t)  && +this.reportLevel() <= t) {
                          return this.thresholds[t];
                        }
                      }
                    };

  this.currentMeasurement = function() { return this.availableMeasurement * (this.level/50); };

  this.report = function() { 
    this._setAttention();
    return (this.level >= 0 && this.level <= 50) ? (this.reportLevel() + ' psi') : ''; 
  };

  this.reportStaticImage = function() {
    return (this.level >= 0 && this.level <= 50) ? ('/images/health_meter/health_meter'+this.level+'.png') : ''
  };

	this.getImageFun = getMeterImage;

  this.reportStatuses = function() {
    var msg_array = [], 
        greaterThan = (this.oldLevel > this.level);

    if (greaterThan) {
      while (this.oldLevel >= this.level) {
        var msg = ' '+this.oldLevel+' psi';
            msg_array.push(msg);
            this.oldLevel -= 1;
      }
    } else {
      while (this.oldLevel <= this.level) {
        var msg = ' '+this.oldLevel+' psi';
            msg_array.push(msg);
            this.oldLevel += 1;
      }
    }

    return msg_array;
  };

  this._setAttention = function() { this.attention = (this.level <= 23) };
	
	this.levelIsHigh = function(){ return (this.level > 38 && this.level <= 50); };
	this.levelIsMedium = function(){ return (this.level > 23 && this.level <= 38); };
	this.levelIsLow = function(){ return (this.level >= 0 && this.level <= 23); };

};

MechStat.prototype = new Stat();
FluidStat.prototype = new Stat();
AirStat.prototype = new Stat();

