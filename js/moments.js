// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-sizer'
  }
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.isotope('layout');
});

// Isotope click function
$('.iso-nav ul li').click(function () {
  $('.iso-nav ul li').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.grid').isotope({
    filter: selector
  });
  return false;
});