/* Author:

*/
$('document').ready( function() {
  
  //Date Slider
  $( "#slider-range" ).slider({
			range: true,
			min: 1549,
			max: 1568,
			values: [ 1549, 1568 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
   $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
			" - " + $( "#slider-range" ).slider( "values", 1 ) );		
  //End Date Slider
  
  $('#search-accordion').collapse();
  $('#search-accordion').on('show hide', function(e){
    $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-minus icon-plus', 200);
});
  $('#show-filter').button();

  // Toggle active class when button is clicked and trigger filter event
  $('#show-filter .btn').bind( 'click', function() {
    $(this).toggleClass( 'active', !$(this).hasClass('active') ).trigger('filterView');
  });

  // Toggle opacity or display of elements when buttons are activated
  $('#show-filter .btn').bind( 'filterView', function(e) {
    var filter = $(this).attr('id').split('-btn')[0];
    if( filter == 'analysis' ) {
      $('.' + filter).toggle('fast', 'swing');
    } else {
      var hidden = $(this).hasClass('active') ? 1 : 0;
      $('.' + filter).animate( {opacity: hidden}, 'fast', 'swing' ); 
    }

  });

});


