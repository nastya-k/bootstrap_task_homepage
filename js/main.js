
$( document ).ready(function() {
   var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
       columnWidth: '.col-xs-4',
        horizontalOrder: true
    }
});
$('.portfolio__sidebar').on('click', '.portfolio__sidebar-item', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});
    
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });
});
    
    
});

