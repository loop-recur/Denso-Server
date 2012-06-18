Titanium.UI.setBackgroundColor('#000');
isAndroid = Ti.Platform.osname == 'android';

Controllers = {};
Models = {};
Layouts = {};
Views = {};
Views.health = {};

if (isAndroid) {
  Ti.include('/support/date.js');
  Ti.include('/lib/socket_page.js');
  Ti.include('/ui/ui.js');
  Ti.include('/lib/date_formatter.js');
  Ti.include('/support/functional.js');
  Ti.include('/support/more_functional.js');
  Ti.include('/lib/android_file_cache.js');
  Ti.include('/lib/html_file_cache.js');
  Ti.include('/lib/file_cache.js');
  Ti.include('/theme.js');
  Ti.include('/models/stat.js');
  Ti.include('/models/health_item.js');
  Ti.include('/services/ip_wizard.js');
  Ti.include('/services/prompt_connect.js');
  Ti.include('/layouts/application.js');
  Ti.include('/views/health/index.js');
  Ti.include('/views/health/show.js');
  Ti.include('/views/health/car_chassis.js');
  Ti.include('/controllers/application.js');
  Ti.include('/controllers/health.js');
} else {
  Ti.include('../support/date.js');
  Ti.include('../lib/socket_page.js');
  Ti.include('../ui/ui.js');
  Ti.include('../lib/date_formatter.js');
  Ti.include('../support/functional.js');
  Ti.include('../support/more_functional.js');
  Ti.include('../lib/android_file_cache.js');
  Ti.include('../lib/html_file_cache.js');
  Ti.include('../lib/file_cache.js');
  Ti.include('../theme.js');
  Ti.include('../models/stat.js');
  Ti.include('../models/health_item.js');
  Ti.include('../services/ip_wizard.js');
  Ti.include('../services/prompt_connect.js');
  Ti.include('../layouts/application.js');
  Ti.include('../views/health/index.js');
  Ti.include('../views/health/show.js');
  Ti.include('../views/health/car_chassis.js');
  Ti.include('../controllers/application.js');
  Ti.include('../controllers/health.js');
}
