	/**  
		scroll to element function
	**/
		function scrollToElement(selector, time, verticalOffset) {
			time = typeof(time) != 'undefined' ? time : 500;
			verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
			element = $(selector);
			offset = element.offset();
			offsetTop = offset.top + verticalOffset;
			$('html, body').animate({
				scrollTop: offsetTop
			}, time);			
		}

		function reloadScrollBars() {
    		document.documentElement.style.overflow = 'auto';  // firefox, chrome
    		document.body.scroll = "yes"; // ie only
		}

		// function unloadScrollBars() {
  //  			document.documentElement.style.overflow = 'hidden';  // firefox, chrome
  //   		document.body.scroll = "no"; // ie only
		// }
		
	/**  
		document ready
	**/		
		$(document).ready(function() {

			$(this).scrollTop(0);

			$('#scroll-to-plastic').animate({"margin-bottom":"0px"},200);

				//unloadScrollBars();

				$('#scroll-to-plastic').click(function (e) {
					e.preventDefault();
					$('#scroll-to-plastic').animate({"margin-bottom":"-150px"},600,function()
						{scrollToElement('#Plastic', 3000, -50); //(id, time, top)
					});
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"0"},10);
						$('#scroll-up').animate({"opacity":"0"},10);
						$('#scroll-to-plastic').animate({"opacity":"0"},10);
					}, 600);
					//scroll down arrow plastic 
					setTimeout(function() {
						$('#scroll-to-final').animate({"opacity":"1"},10);
						$('#scroll-up').animate({"opacity":"1"},10);
						$('#scroll-to-plastic').animate({"opacity":"1"},10);
						$('#scroll-to-final').animate({"margin-bottom":"0px"},600);

					}, 3000); //time of scroll down arro to show up
				});


				//scroll down arrow
				$('#scroll-to-final').click(function (e) {
					e.preventDefault();

					$('#scroll-to-final').animate({"margin-bottom":"-150px"},600,function(){
						scrollToElement('#Final', 60000, -250);
					});

					setTimeout(function() {
						$('#scroll-to-final').animate({"opacity":"0"},10);
						$('#scroll-up').animate({"opacity":"0"},10);
						$('#scroll-to-plastic').animate({"opacity":"0"},10);
					}, 600);

					//points floating in 
					//First Point
					setTimeout(function() {
    					$("#First-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 2000);
					setTimeout(function() {
    					$("#First-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 8000);

					//Extra
					setTimeout(function() {
    					$(".Extra-right").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"50px"}, 600);
					}, 2000);
					setTimeout(function() {
    					$(".Extra-right").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"-400px"}, 600);
					}, 8000);

					//Second Point
					setTimeout(function() {
    					$("#Second-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 10000);
					setTimeout(function() {
    					$("#Second-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 20000);

					//Extra 2
					setTimeout(function() {
    					$(".Extra2").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"50px"}, 600);
					}, 10000);
					setTimeout(function() {
    					$(".Extra2").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"-400px"}, 600);
					}, 20000);

					//Third Point 
					setTimeout(function() {
    					$("#Third-Point").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"50px"}, 600);
					}, 21000);
					setTimeout(function() {
    					// rest of code here
    					$("#Third-Point").css('right', function(){ return $(this).offset().right; })
             			.animate({"right":"-400px"}, 600);
					}, 31000);


					//Extra3
					setTimeout(function() {
    					$(".Extra3").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 21000);
					setTimeout(function() {
    					$(".Extra3").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 31000);

					setTimeout(function() {
    					$("#Fourth-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 32000);
					setTimeout(function() {
    					// rest of code here
    					$("#Fourth-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 42000);

					setTimeout(function() {
    					$("#Fifth-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"50px"}, 600);
					}, 43000);
					setTimeout(function() {
    					// rest of code here
    					$("#Fifth-Point").css('left', function(){ return $(this).offset().left; })
             			.animate({"left":"-400px"}, 600);
					}, 59000);



					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"1"},10);
						$('#scroll-up').animate({"opacity":"1"},10);
						$('#scroll-to-plastic').animate({"opacity":"1"},10);
    					$('#scroll-up').animate({"margin-bottom":"0px"},600);
    					reloadScrollBars();
					}, 60000);
				});


				//back to the top 
				$('#scroll-up').click(function (e) {
					e.preventDefault();
					$('#scroll-up').animate({"margin-bottom":"-150px"},600,function(){
						scrollToElement('#Earth', 25000, -150);
					});
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"0"},10);
						$('#scroll-up').animate({"opacity":"0"},10);
						$('#scroll-to-moplasticon').animate({"opacity":"0"},10);
					}, 600);
					setTimeout(function() {
						$('#scroll-to-mars').animate({"opacity":"1"},10);
						$('#scroll-up').animate({"opacity":"1"},10);
						$('#scroll-to-plastic').animate({"opacity":"1"},10);
    					$('#scroll-to-plastic').animate({"margin-bottom":"0px"},600);
    					reloadScrollBars();
					}, 25000);					
				});
				
			
		});