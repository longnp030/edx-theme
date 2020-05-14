document.addEventListener("DOMContentLoaded",function(){
var nuttrai=document.querySelector(".js-carousel-nav.carousel-arrow.prev");
var nutphai=document.querySelector(".js-carousel-nav.carousel-arrow.next");
var slide=document.querySelectorAll(".slick-slide.carousel-item");
console.log(slide);
var k=4;
nutphai.addEventListener('click',function(){
	if (k<=slide.length&&k>=0) {
		for (var i = 0; i < slide.length; i++) {
		slide[i].classList.remove("slick-active");
	}
   for (var h=k; h <k+4; h++) {
   	     slide[h].classList.add("slick-active");
   }
      k=k+4;
    if (k==slide.length) {
   	nuttrai.removeAttribute("disabled");
   }
	}
});
   

   	nuttrai.addEventListener('click',function(){
   		 if (k>=0&&k<=slide.length) {
   		 k=k-4;
   		console.log(k);
	for (var i = 0; i < slide.length; i++) {
		slide[i].classList.remove("slick-active");
	}
   for (var h=k-1; h>=k-4; h--) {
   	     slide[h].classList.add("slick-active");
    }
}
   });
  

});

   