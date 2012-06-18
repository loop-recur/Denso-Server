Controllers.application = (function() {
  var index = function() {
    return Controllers.health.index();
  };
   
  return {index: index};
})();

