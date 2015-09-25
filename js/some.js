  $(document).ready(function(){
	  $(document).on("mouseenter mouseleave", ".item-character", function(){
	    $(this).find(".action").toggleClass("active");
	  });
  });

 $(".action-single").on("mouseenter", function(){
	nombreVariable =  $(this).text();
	console.log(nombreVariable);
 });

