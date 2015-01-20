$(document).ready(function() {
	
	// LAZY LOAD IMAGES
  	$('.lazy').unveil();


    // SHOW/HIDE REWARDS
    $('.show-rewards, .close-rewards').on('click', function(e) { 
      e.preventDefault();
      $('.rewards-box').slideToggle('slow');
    }); 


    // SHOW/HIDE USER BIO
    $('.show-user-bio').on('click', function(e) { 
      e.preventDefault();
      $('.user-info').slideToggle('slow');
    });

      // FORM VALIDATION
    $('.validate').bootstrapValidator({
      container: 'tooltip',
      feedbackIcons: {
        valid: 'fa fa-check',
        invalid: 'fa fa-warning',
        validating: 'fa fa-spinner'
      }
});


});
