 
$(document).ready(function() {  
   $("#myCarousel").swiperight(function() {  
      $("#myCarousel").carousel('prev');  
    });  
   $("#myCarousel").swipeleft(function() {  
      $("#myCarousel").carousel('next');  
   });  
});  
