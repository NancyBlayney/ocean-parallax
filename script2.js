$(document).ready(function(){

	var clicked = false;

			function oldHeight(){
				$('.row-two, .row-one, .row-three').animate({height: '28vh'}, 300)
			}

			function newHeight(rowA, rowB){
				$(rowA).animate({height: '64vh'}, 300)
				$(rowB).animate({height: '10vh'}, 300)
			}

	// media query event handler
	if (matchMedia) {
	  var mq = window.matchMedia('screen and (min-width : 0px) and (max-width: 640px)');
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {
	  if (mq.matches) {

			function newWidth(block1, block2){
				$(block2).children().delay(200).fadeOut()
				$(block1).delay(400).animate({width:'100%'}, 600)
				$(block2).delay(300).animate({width:'0'}, 600)
				$(block1).children().delay(1000).fadeIn()
			}

			function oldWidth(row){
				$('.content').fadeOut(100);
				$('h2').delay(350).fadeIn();
				if (row.parent().hasClass('row-one')){
					$(row).delay(300).animate({width:'40vw'}, 500);
					$(row.siblings()).delay(350).animate({width:'59vw'}, 500);
				} else if (row.parent().hasClass('row-two')) {
					$(row).delay(300).animate({width:'67vw'}, 500);
					$(row.siblings()).delay(350).animate({width:'32vw'}, 500);
				} else {
					$(row).delay(300).animate({width:'37vw'}, 500);
					$(row.siblings()).delay(350).animate({width:'62vw'}, 500);
				}
			}

			$('.block').click(function(e) {
				if ($(e.target).hasClass('no-click')){
					return;
				} else if ($(e.target).parent().hasClass('project')){
					return;
				} else {
					if ($(this).hasClass('clickable')){
						$('.block').removeClass('clickable');
						newHeight($(this).parent(), $(this).parent().siblings());
						newWidth($(this), $(this).siblings());
						var title = $(this).find('h2:first')
						$(title).fadeOut()
						$(this).delay(400).queue(function(next){
							$(this).addClass('clicked');
							next();
						})
					} else if ($(this).hasClass('clicked')){
						$('.block').toggleClass('clickable');
						$(this).removeClass('clicked')
						oldHeight()
						oldWidth($(this))
					} else {
						return;
					};
				};
			});

			$('.project').click(function(){
				var image = $(this).find('img');
				if (!clicked){
					$(this).animate({height:'60vh'});
					$(image).css('display', 'block');
					clicked = true;
				} else {
					$('.project').animate({height:'15vh'});
					$('.primg').css('display', 'none');
					clicked = false;
				}
			})

	  } else {

			function newWidth(block1, block2){
				$(block2).children().delay(200).fadeOut()
				$(block1).delay(400).animate({width:'100%'}, 600)
				$(block2).delay(300).animate({width:'0'}, 600)
				$(block1).children().delay(1000).fadeIn()
				if($(block1).hasClass('projects')){
					$(this).delay(1500).queue(function(next){
						$('.projects-content').css('display', 'flex');
						next();
					})
				}
			}

			function oldWidth(row){
				$('.content').fadeOut(100);
				$('h2').delay(350).fadeIn();
				if (row.parent().hasClass('row-one')){
					$(row).delay(300).animate({width:'49.5%'}, 500);
					$(row.siblings()).delay(350).animate({width:'49.5%'}, 500);
				} else if (row.parent().hasClass('row-two')) {
					$(row).delay(300).animate({width:'67%'}, 500);
					$(row.siblings()).delay(350).animate({width:'32%'}, 500);
				} else {
					$(row).delay(300).animate({width:'37%'}, 500);
					$(row.siblings()).delay(350).animate({width:'62%'}, 500);
				}
			}


			$('.block').click(function(e) {
				if ($(e.target).hasClass('no-click')){
					return;
				} else if ($(e.target).parent().hasClass('project')){
					return;
				} else {
					if ($(this).hasClass('clickable')){
						$('.block').removeClass('clickable');
						newHeight($(this).parent(), $(this).parent().siblings());
						newWidth($(this), $(this).siblings());
						var title = $(this).find('h2:first')
						$(title).fadeOut()
						$(this).delay(400).queue(function(next){
							$(this).addClass('clicked');
							next();
						})
					} else if ($(this).hasClass('clicked')){
						$('.block').toggleClass('clickable');
						$(this).removeClass('clicked')
						oldHeight()
						oldWidth($(this))
					} else {
						return;
					};
				};
			});

			$('.project').click(function(){
				var image = $(this).find('img');
				if (!clicked){
					$(this).animate({height:'30vh'});
					$(image).css('display', 'block');
					clicked = true;
				} else {
					$('.project').animate({height:'70px'});
					$('.primg').css('display', 'none');
					clicked = false;
				}
			})





	  }

	}

});