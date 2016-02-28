$(window).ready(function() {
   // Pre-loader
   $("#pre-loader").fadeOut(1500);

   // Setting Vegas
   $("#intro").vegas({
      slides: [
         { src: "img/slide1.jpg" },
         { src: "img/slide4.jpg" },
         { src: "img/slide3.jpg" }
      ]
   });

   // Setting Carousel
   $("#owl-client").owlCarousel({
      autoHeight: true,
      autoPlay: true,
      pagination: false,
      navigation: true,
      navigationText: [
	      "<span class='arrow left'></span>",
	      "<span class='arrow right'></span>"
      ],
      singleItem: true,
      transitionStyle:"fade"
   });
});
