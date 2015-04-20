var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});

    // delegate calls to data-toggle="lightbox"
    $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
      event.preventDefault();
      return $(this).ekkoLightbox({
        onShown: function() {
          if (window.console) {
	    return console.log('Checking our the events huh?');
	  }
	},
	onNavigate: function(direction, itemIndex) {
	  if (window.console) {
	    return console.log('Navigating '+direction+'. Current item: '+itemIndex);
	  }
	}
      });
    });

    //Programatically call
    $('#open-image').click(function (e) {
      e.preventDefault();
      $(this).ekkoLightbox();
    });
    $('#open-youtube').click(function (e) {
       e.preventDefault();
       $(this).ekkoLightbox();
    });

    $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
      event.preventDefault();
      return $(this).ekkoLightbox({
        onShown: function() {
	  var a = this.modal_content.find('.modal-footer a');
	  if(a.length > 0) {
	    a.click(function(e) {
	      e.preventDefault();
	      this.navigateTo(2);
	    }.bind(this));
	  }
	}
      });
    });
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};