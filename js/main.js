// var fixColumnHeights = function() {
//   $('.columnizer-row').each(function(){
//   	var self = this;
//     $(self).imagesLoaded(function(){
//     	var maxHeight = 0;
//     	$(self).find('.asset-inner').each(function(){
//     	  $(this).height('auto');
//     	  var innerHeight = $(this).innerHeight();
//     	  if (innerHeight > maxHeight) {
//     	    maxHeight = innerHeight;
//     	  }
//     	});
//     	$(this).find('.asset-inner').innerHeight(maxHeight);	
//     });
//   });
// }

$(document).on('pop-initialized', function(){
  // if ($('html').css('content') !== "\u2063") {
  //   $('.columnizer-row .asset').live('initialize', fixColumnHeights);
  //   $('.columnizer-row .asset').live('destroy', function(){
  //     $(this).find('.asset-inner').height('auto');
  //   });  
  // }

  $('.asset').live('initialize', function(e, data){
    if ($(this).find('a[href*="spinshop.com"]').length > 0 && $('#topspin_js').length == 0) {
      var script = document.createElement('script');
      script.src = "http://cdn.topspin.net/javascripts/topspin_core.js?aId=23919&amp;timestamp=1359500513";
      script.id  = 'topspin_js';
      document.body.appendChild(script);
    }
  });
});