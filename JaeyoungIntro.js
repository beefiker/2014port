	$(document).ready(function() {
			$('#portback').click(function() {
		n = 0;	
		$('#imga').fadeIn(1000);
		$('#boxwrapper').animate({
			top:'0%'
		},1000,'easeInExpo');
		$('#contact_receive').animate({
					opacity:0
				},1000);
		$('#parent, .rotatedbox1').animate({
					backgroundColor:'#fff',
					color:'#000',
					opacity:1  
				},1000);
				$('#portfoliotext, #footer').css({
					color: '#000'
				},2000);
				exe = clearTimeout(exe);
		});
		$('#gotorightbutton').click(function() {
		switch(r){
			case 0:
			$('#wrap').animate({
			left:'-20%'
		},300,'easeOutQuart');
		$('#parent').animate({
			left:'-45%'
		},300,'easeOutQuart');
		$('#rightbox').animate({
			left:'80%'
		},300,'easeOutQuart');
		$('.rotatedbox1').animate({
			left:'-70.5%'
		},300,'easeOutQuart');
			r=1;
			break;
			
			case 1:
				$('#wrr2').animate({
					left:'48.5%'
			},300);			
		$('#wrap').animate({
			left:0
		},300,'easeOutQuart');
		$('#parent').animate({
			left:'-25%'
		},300,'easeOutQuart');
		$('#rightbox').animate({
			left:'100%'
		},300,'easeOutQuart');
		$('.rotatedbox1').animate({
			left:'-52.5%'
		},300,'easeOutQuart');
			r=0;
			break;
		}
		$('#imga,#parent,#onfooter,#footer,#contents,#flatbox1,#flatbox2,#flatbox3').click(function() {
			if(r==1){
			$('#wrr2').animate({
					left:'48.5%'
			},300,'easeOutQuart');		
		$('#wrap').animate({
			left:0
		},300,'easeOutQuart');
		$('#parent').animate({
			left:'-25%'
		},300,'easeOutQuart');
		$('#rightbox').animate({
			left:'100%'
		},300,'easeOutQuart');
		$('.rotatedbox1').animate({
			left:'-52.5%'
		},300,'easeOutQuart');
		r=0;	
		}
		});
	});
	
		function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
            
            $('#buttonwrapper,#cubewrap,#controltxt,#controltxt1').hide();
            $('#explorer').show();
            $('.shine').css({
            	'color': 'rgba(255, 255, 255, 1)',
            	'background':'rgba(255, 255, 255, 0)'
            });
           }
        else{                 // If another browser, return 0
           $('#explorer').hide();
           
			$('#buttonwrapper,#cubewrap,#controltxt').show();
   return false;
}
}
msieversion();
			snowCount = 0;
			$('#newhalfdownbox3,#newhalfdownclonebox4,#newhalfdownclonedbox3').hover(function() {
				$(this).css({
		'-webkit-animation': 'animatedBackground 0.4s ease-out 1',
		'-moz-animation': 'animatedBackground 0.4s ease-out 1',
		'-ms-animation': 'animatedBackground 0.4s ease-out 1',
		'-webkit-animation-fill-mode': 'forwards',
		'-ms-animation-fill-mode': 'forwards'
				});
			},function() {
				$(this).css({
		'-webkit-animation': 'animatedBackground1 0.4s ease-out 1',
		'-moz-animation': 'animatedBackground1 0.4s ease-out 1',
		'-ms-animation': 'animatedBackground1 0.4s ease-out 1',
		'-webkit-animation-fill-mode': 'forwards',
		'-ms-animation-fill-mode': 'forwards',
				'z-index':100
		});	
			});
			$('#flatboxclone,#flatboxclone1,#flatboxclone2,#flatboxclone3,#flatboxclone4,#flatboxclone5,#flatboxclone6,#flatboxclone7,#flatboxclone8,#flatboxclone9').hover(function() {
					$(this).css({
		'-webkit-animation': 'moreanimatedBackground 0.4s ease-out 1',
		'-moz-animation': 'moreanimatedBackground 0.4s ease-out 1',
		'-ms-animation': 'moreanimatedBackground 0.4s ease-out 1',
		'-webkit-animation-fill-mode': 'forwards',
		'-ms-animation-fill-mode': 'forwards',
		'z-index':999999999
				});
			},function () {
				$(this).css({
		'-webkit-animation': 'moreanimatedBackground1 0.4s ease-out 1',
		'-moz-animation': 'moreanimatedBackground1 0.4s ease-out 1',
		'-ms-animation': 'moreanimatedBackground1 0.4s ease-out 1',
		'-webkit-animation-fill-mode': 'forwards',
		'-ms-animation-fill-mode': 'forwards',
		'z-index':100
				});
			});
		$('#flatbox1').hover(function() {
			$(this).css({
	'-webkit-animation': 'rotating 0.4s linear',
   '-moz-animation': 'rotating 0.4s linear',
    '-o-animation': 'rotating 0.4s linear',
    '-ms-animation': 'rotating 0.4s linear',
    '-webkit-animation-fill-mode':'forwards',
     	'background':'url(images/email-icon.png) no-repeat center center', 
 	'-webkit-background-size': 'cover',
 	'-moz-background-size': 'cover',
 	'-o-background-size': 'cover',
  	'background-size': 'cover'
			});
			$('#flatboxcontent1 span').animate({
				color:'#000'
			},250);
			},function(){
				$(this).css({
	'-webkit-animation': 'rotating1 0.2s linear',
   '-moz-animation': 'rotating1 0.2s linear',
    '-o-animation': 'rotating1 0.2s linear',
    '-ms-animation': 'rotating1 0.2s linear',
    'background':'#1E7AD7'
			});
			$('#flatboxcontent1 span').animate({
				color:'#fff'
			},250);
		});
		
		$('#flatbox2').hover(function() {
			$(this).css({
	'-webkit-animation': 'rotating 0.4s linear',
   '-moz-animation': 'rotating 0.4s linear',
    '-o-animation': 'rotating 0.4s linear',
    '-ms-animation': 'rotating 0.4s linear',
    '-webkit-animation-fill-mode':'forwards',
     	'background':'url(images/512phone.png) no-repeat center center', 
 	'-webkit-background-size': 'cover',
 	'-moz-background-size': 'cover',
 	'-o-background-size': 'cover',
  	'background-size': 'cover'
			});
			$('#flatboxcontent2 span').animate({
				color:'#000'
			},250);
			},function(){
				$(this).css({
	'-webkit-animation': 'rotating1 0.2s linear',
   '-moz-animation': 'rotating1 0.2s linear',
    '-o-animation': 'rotating1 0.2s linear',
    '-ms-animation': 'rotating1 0.2s linear',
    'background':'#675d9a'
			});
			$('#flatboxcontent2 span').animate({
				color:'#fff'
			},250);
		});
		$('#flatbox3').hover(function() {
			$(this).css({
	'-webkit-animation': 'rotating 0.4s linear',
   '-moz-animation': 'rotating 0.4s linear',
    '-o-animation': 'rotating 0.4s linear',
    '-ms-animation': 'rotating 0.4s linear',
    '-webkit-animation-fill-mode':'forwards',
     	'background':'url(images/512address.png) no-repeat center center', 
 	'-webkit-background-size': 'cover',
 	'-moz-background-size': 'cover',
 	'-o-background-size': 'cover',
  	'background-size': 'cover'
			});
			$('#flatboxcontent3 span').animate({
				color:'#000'
			},250);
			},function(){
				$(this).css({
	'-webkit-animation': 'rotating1 0.2s linear',
   '-moz-animation': 'rotating1 0.2s linear',
    '-o-animation': 'rotating1 0.2s linear',
    '-ms-animation': 'rotating1 0.2s linear',
    'background':'#5faa71'
			});
			$('#flatboxcontent3 span').animate({
				color:'#fff'
			},250);
		});
		$('#flatbox1').toggle(function() {
			$(this).css({
				"z-index":10,
				 	'background': 'url(images/email-icon.png) no-repeat center center',
				 	'-webkit-background-size': 'cover',
				 	 '-o-background-size': 'cover',
				 	 '-moz-background-size': 'cover',
				 	 'background-size': 'cover'
			});
			
			$('#sub').html('<p  align="center" id="whitecontact">F I K E R @ N A V E R . C O M</p>');
			$('#sub > p').click(function() {
				window.open('http://mail.naver.com/?n=1418891742837&v=f#%7B%22fClass%22%3A%22write%22%2C%22oParameter%22%3A%7B%22orderType%22%3A%22new%22%2C%22sMailList%22%3A%22%22%7D%7D',target="_blank");
			});
			$('#sub > p').css({
	'-webkit-animation': 'texting 1s linear forwards',
   	'-moz-animation': 'texting 1s linear forwards',
    '-o-animation': 'texting 1s linear forwards',
    '-ms-animation': 'texting 1s linear forwards'
			});
			$('#flatbox2,#flatbox3').animate({
				left:'10%',
				bottom:0
			},500);
			
		},function() {
			$('#sub > p').css({
	'-webkit-animation': 'textingout 1s linear forwards',
   	'-moz-animation': 'textingout 1s linear forwards',
    '-o-animation': 'textingout 1s linear forwards',
    '-ms-animation': 'textingout 1s linear forwards'
			});
			$('#flatbox2').animate({
				left:'45%',
				'margin-top':'-10%'
			},500);
			$('#flatbox3').animate({
				left:'80%',
				'margin-top':'-10%'
			},500);
			$(this).css({
				'background':'#1E7AD7',
				"z-index":7		
			});
		});
		$('#flatbox2').toggle(function() {
			$('#sub').html('<p align="center" id="whitecontact">0 1 0 - 8 5 5 9 - 2 6 8 0</p>');
			$('#sub > p').css({
	'-webkit-animation': 'texting 1s linear forwards',
   	'-moz-animation': 'texting 1s linear forwards',
    '-o-animation': 'texting 1s linear forwards',
    '-ms-animation': 'texting 1s linear forwards'
			});
			$(this).css({
				"z-index":10,
				 	'background': 'url(images/512phone.png) no-repeat center center',
				 	'-webkit-background-size': 'cover',
				 	 '-o-background-size': 'cover',
				 	 '-moz-background-size': 'cover',
				 	 'background-size': 'cover'
			});
			$('#flatbox1,#flatbox2,#flatbox3').animate({
				left:'10%'
			},500);
		},function() {
			$('#sub > p').css({
	'-webkit-animation': 'textingout 1s linear forwards',
   	'-moz-animation': 'textingout 1s linear forwards',
    '-o-animation': 'textingout 1s linear forwards',
    '-ms-animation': 'textingout 1s linear forwards'
			});
			$('#flatbox1').animate({
				left:'10%'
			},500);
			$('#flatbox3').animate({
				left:'80%',
				'margin-top':'-10%'
			},500);
			$(this).animate({
				left:'45%'
			},500);
			$(this).css({
				'background':'#675d9a',
				"z-index":8	
			});
		});
		
		$('#flatbox3').toggle(function() {
			$('#sub').html('<p align="center" id="whitecontact1">지번 주소 : 경기도 성남시 중원구 상대원1동 <br />도로명 주소 : 경기도 성남시 중원구 박석로5번길</p>');
			$('#sub > p').css({
	'-webkit-animation': 'texting 1s linear forwards',
   	'-moz-animation': 'texting 1s linear forwards',
    '-o-animation': 'texting 1s linear forwards',
    '-ms-animation': 'texting 1s linear forwards'
			});
			$(this).css({
				"z-index":10,
				 	'background': 'url(images/512address.png) no-repeat center center',
				 	'-webkit-background-size': 'cover',
				 	 '-o-background-size': 'cover',
				 	 '-moz-background-size': 'cover',
				 	 'background-size': 'cover'
			});
			$('#flatbox1,#flatbox2,#flatbox3').animate({
				left:'10%'
			},500);
		},function() {
			$('#sub > p').css({
	'-webkit-animation': 'textingout 1s linear forwards',
   	'-moz-animation': 'textingout 1s linear forwards',
    '-o-animation': 'textingout 1s linear forwards',
    '-ms-animation': 'textingout 1s linear forwards'
			});
			$('#flatbox1').animate({
				left:'10%'
			},500);
			$('#flatbox2').animate({
				left:'45%',
				'margin-top':'-10%'
			},500);
			$(this).animate({
				left:'80%'
			},500);
			$(this).css({
				'background':'#5faa71',
				"z-index":9				
			});
		});
		
		window.addEventListener("keydown", function(event) {
   
    
    if (event.keyCode == 97) {
    $('#cube').css({
				'transform' : 'rotateY(0deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : 'rotateY(0deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : 'rotateY(0deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : 'rotateY(0deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : 'rotateY(0deg)',
				'-ms-transition-duration': '1.5s'
			});
    }
    if (event.keyCode == 98) {
    $('#cube').css({
				'transform' : 'rotateY(-90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : 'rotateY(-90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : 'rotateY(-90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : 'rotateY(-90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : 'rotateY(-90deg)',
				'-ms-transition-duration': '1.5s'
			});
    }
    if (event.keyCode == 99) {
     $('#cube').css({
				'transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-ms-transition-duration': '1.5s'
			});
    }
    if (event.keyCode == 100) {
    $('#cube').css({
			'transform' : ' rotateY(180deg) rotateZ(90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-ms-transition-duration': '1.5s'
			});
    }
    if (event.keyCode == 101) {
     $('#cube').css({
				'transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-ms-transition-duration': '1.5s'
			});
    }
    if (event.keyCode == 102) {
     $('#cube').css({
				'transform' : ' rotateX(90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : ' rotateX(90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : ' rotateX(90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : ' rotateX(90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : ' rotateX(90deg)',
				'-ms-transition-duration': '1.5s'
				
			});
    }
}, false);
			var n = 0;
			var r = 0;
			var fade = 500;
			var icons = [];
			icons = ["#first","#second","#third","#four","#five","#six","#seven","#eight","#nine","#ten","#ele","#twe","#tht","#ft","#fft","#st","#svt"];
		    var ic = [];
		    ic[0] = "#first";
		$('.ico').hover(function(){
			$(this).css({
				'width':'50%',
				'z-index':9,
				'margin-left':'-15%',
				'margin-top':'-10%'
			});
		},function() {
			$(this).css({
				'width':'20%',
				'z-index':4,
					'margin-left':0,
					'margin-top':0
			});
		});
			$('#first').hover(function(){
			$(this).css({
				'width':'50%',
				'z-index':9,
				'margin-left':'-15%'
			});
		},function() {
			$(this).css({
				'width':'20%',
				'z-index':4,
					'margin-left':0
			});
		});
			$('#ft,#fft').hover(function(){
			$(this).css({
				'width':'50%',
				'z-index':9,
				'margin-left':'-15%',	
				'margin-top':'-25%'
			});
		},function() {
			$(this).css({
				'width':'20%',
				'z-index':4,
				'margin-left':0,
				'margin-top':0
			});
		});

	$('#centeredbox').hover(function() {
		$('#onrotatedbox').stop(false,true).animate({
			bottom : '-20%'
		},200,'easeOutQuart');
		$('#onrotatedbox_text').stop(false,true).animate({
			bottom : '-40%'
		},200,'easeOutQuart');
	},function() {
		$('#onrotatedbox').stop(false,true).animate({
			bottom :'20%'
		},200,'easeOutQuart');
		$('#onrotatedbox_text').stop(false,true).animate({
			bottom : '0%'
		},200,'easeOutQuart');
	});
		
	$('#rightbox1, #rightbox2, #rightbox3, #rightbox4, #rightbox5, #rightbox6, #rightbox7').hover(function(){
		$(this).animate({
			opacity:1
		},100);
	},function() {
		$(this).animate({
			opacity:0.4
		},50);
	});
	
	$('#rightbox1').click(function() {
		n = 0;	
		$('#imga').fadeIn(1000);
		$('#boxwrapper').animate({
			top:'0%'
		},1000,'easeInExpo');
		$('#contact_receive').animate({
					opacity:0
				},1000);
		$('#parent, .rotatedbox1').animate({
					backgroundColor:'#fff',
					color:'#000',
					opacity:1  
				},1000);
				$('#portfoliotext, #footer').css({
					color: '#000'
				},2000);
				exe = clearTimeout(exe);
	});
		$('#rightbox2').click(function() {
		n = 1;
		$('#imga').fadeIn(1000);
		$('#boxwrapper').animate({
			top:'-100%'
		},1000,'easeInExpo');
		$('#parent, .rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff',
					opacity:1
				},1000);
				$('#contact_receive').animate({
					opacity:0
				},1000);
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
				$('#halfboxclone1').delay(1000).animate({
			left:0
		},1000,'easeOutBounce');
		$('#halfboxclone2,#halfboxclone3').delay(2500).animate({
			left:'0%'
		},1000,'easeOutExpo');
		exe = clearTimeout(exe);
	});
		$('#rightbox3').click(function() {
		n = 2;
		$('#imga').fadeIn(1000);
	$('#parent, .rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff',
					opacity:1
				},1000);
				$('#contact_receive').animate({
					opacity:0
				},1000);
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
		$('#boxwrapper').animate({
			top:'-200%'
		},1000,'easeInExpo');
		$('#box3').animate({
			backgroundColor:'#fff'
		},1500);
		$('#newhalfdownbox2').delay(750).animate({
									left:'-24%'
								},500,'swing');
		$('#newhalfdownbox1').delay(750).animate({
									left:'49%'
								},500,'swing');
		$('#newhalfdownbox3').delay(1250).animate({
									left:0,
									opacity:1
								},1000,'swing');
		$('#newhalfdownbox4').delay(1250).animate({
									left:'50%'
								},500,'swing');
				exe = clearTimeout(exe);
								
	});
		$('#rightbox4').click(function() {
		n = 3;
		$('#imga').fadeIn(1000);
	$('#parent, .rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff',
					opacity:1
				},1000);
				$('#contact_receive').animate({
					opacity:0
				},1000);
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
		$('#boxwrapper').animate({
			top:'-300%'
		},1000,'easeInExpo');
		$('#newhalfdownclonebox2').delay(750).animate({
									left:'-24%'
								},500,'swing');
		$('#newhalfdownclonebox1').delay(750).animate({
									left:'49%'
								},500,'swing');
		$('#newhalfdownclonebox3').delay(1250).animate({
									left:0
								},500,'swing');
		$('#newhalfdownclonebox4').delay(1550).animate({
									left:'50%',
									opacity:1
								},1000,'swing');
								$('#box4').animate({
				backgroundColor:'#fff'
				},2500);
				exe = clearTimeout(exe);
	});
		$('#rightbox5').click(function() {
		n = 4;
		$('#imga').fadeIn(1000);
		$('#parent, .rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff',
					opacity:1
				},1000);
				$('#contact_receive').animate({
					opacity:0
				},1000);
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
		$('#boxwrapper').animate({
			top:'-400%'
		},1000,'easeInExpo');
		$('#newhalfdownclonedbox2').delay(750).animate({
									left:'-24%'
								},500,'swing');
		$('#newhalfdownclonedbox1').delay(750).animate({
									left:'49%'
								},500,'swing');
		$('#newhalfdownclonedbox3').delay(1250).animate({
									left:0,
									opacity:1
								},1000,'swing');
		$('#newhalfdownclonedbox4').delay(1250).animate({
									left:'50%'
								},500,'swing');
								$('#box5').animate({
				backgroundColor:'#fff'
				},2500);
				exe = clearTimeout(exe);
	});
	$('#rightbox6').click(function() {
		n = 5;
			$('#parent, .rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff',
					opacity:1
				},1000);
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},1000);
		$('#boxwrapper').animate({
			top:'-500%'
		},1000,'easeInExpo');
	$('#contact_receive').animate({
					opacity:0
				},2000);
								$('#imga').fadeIn(1000);
				for(var i=0;i<icons.length;i++){
						$(icons[i]).delay(fade).animate({
						opacity:1
					},500);
					fade += 375;
				}
				fade = 500;
				exe = clearTimeout(exe);
	});
	$('#rightbox7').click(function() {
		n = 6;
		$('#secondary').delay(2500).animate({
			top:'10%'
		},1500,'easeOutBounce');
			$('#parent').animate({
					opacity:0
				},1000);
				$('.rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff'
				})
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
		$('#boxwrapper').animate({
			top:'-600%'
		},1000,'easeInExpo');
	$('#contact_receive').animate({
					opacity:1
				},1000);
				$('#imga').fadeOut(1000);
				snowFlakes();
	});
	
				$('#tuto').click(function() {
					$(this).fadeOut(500);
				});
				$('#newhalfdownbox3').click(function() {
					window.open('project1/index.html',target="_blank");
				});
				$('#newhalfdownclonebox4').click(function() {
					window.open('project2/index.html',target="_blank");
				});
				$('#newhalfdownclonedbox3').click(function() {
					window.open('project3/index.html',target="_blank");
				});
			
		$('#imga').hover(function() {
			$(this).animate({
				bottom:'10%'
			},100);
			
		},function() {
			$(this).animate({
				bottom:0
			},100);
			
		});
		$('.lets').hover(function() {
			$('.rotatedbox1').stop(false,true).animate({
				bottom:'-30%'
			},100);
			
		},function() {
				$('.rotatedbox1').stop(false,true).animate({
				bottom:'-30%'
			},100);
			
		});
			
		
			/*cube*/
			
		var h=$('#imag').css('height');
		var t=$('#imag').css('top');
	
		function a() {
		
	
		var wd = ($('#cubewrap').width() /2);
		$('#cube > .cub1').css({
			'transform':'translateZ('+wd+'px)',
			'-ms-transform':'translateZ('+wd+'px)',
			'-o-transform':'translateZ('+wd+'px)',
			'-moz-transform':'translateZ('+wd+'px)',
			'-webkit-transform':'translateZ('+wd+'px)'
		});
		$('#cube > .cub2').css({
			'transform':'  rotateY(90deg) translateZ('+wd+'px)',
			'-ms-transform':'  rotateY(90deg) translateZ('+wd+'px)',
			'-o-transform':'  rotateY(90deg) translateZ('+wd+'px)',
			'-moz-transform':'  rotateY(90deg) translateZ('+wd+'px)',
			'-webkit-transform':'  rotateY(90deg) translateZ('+wd+'px)'
			
		});
		$('#cube > .cub3').css({
			'transform':'rotateY(90deg) rotateX(90deg) translateZ('+wd+'px)',
			'-ms-transform':'rotateY(90deg) rotateX(90deg) translateZ('+wd+'px)',
			'-o-transform':'rotateY(90deg) rotateX(90deg) translateZ('+wd+'px)',
			'-moz-transform':'rotateY(90deg) rotateX(90deg) translateZ('+wd+'px)',
			'-webkit-transform':'rotateY(90deg) rotateX(90deg) translateZ('+wd+'px)'
			
		});
		$('#cube > .cub4').css({
			'transform':'rotateY(180deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-ms-transform':'rotateY(180deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-o-transform':'rotateY(180deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-moz-transform':'rotateY(180deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-webkit-transform':'rotateY(180deg) rotateZ(90deg) translateZ('+wd+'px)'
			
		});
		$('#cube > .cub5').css({
			'transform':'rotateY(-90deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-ms-transform':'rotateY(-90deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-o-transform':'rotateY(-90deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-moz-transform':'rotateY(-90deg) rotateZ(90deg) translateZ('+wd+'px)',
			'-webkit-transform':'rotateY(-90deg) rotateZ(90deg) translateZ('+wd+'px)'
			
		});
		$('#cube > .cub6').css({
			'transform':'rotateX(-90deg) translateZ(0px) translateZ('+wd+'px)',
			'-ms-transform':'rotateX(-90deg) translateZ(0px) translateZ('+wd+'px)',
			'-o-transform':'rotateX(-90deg) translateZ(0px) translateZ('+wd+'px)',
			'-moz-transform':'rotateX(-90deg) translateZ(0px) translateZ('+wd+'px)',
			'-webkit-transform':'rotateX(-90deg) translateZ(0px) translateZ('+wd+'px)'
		});
		
		
		
		$('#btngoto1').click(function(){
			sw=1;
			$('#cube').css({
				'transform' : 'rotateY(0deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : 'rotateY(0deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : 'rotateY(0deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : 'rotateY(0deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : 'rotateY(0deg)',
				'-ms-transition-duration': '1.5s'
			});
		});
		
		$('#btngoto2').click(function(){
			sw=2;
			$('#cube').css({
				'transform' : 'rotateY(-90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : 'rotateY(-90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : 'rotateY(-90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : 'rotateY(-90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : 'rotateY(-90deg)',
				'-ms-transition-duration': '1.5s'
			});
		});
		$('#btngoto3').click(function(){
			sw=3;
			$('#cube').css({
				'transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : 'rotateX(-90deg) rotateY(-90deg)',
				'-ms-transition-duration': '1.5s'
				
			});
		});
		$('#btngoto4').click(function(){
			sw=4;
			$('#cube').css({
				'transform' : ' rotateY(180deg) rotateZ(90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : ' rotateY(180deg) rotateZ(90deg)',
				'-ms-transition-duration': '1.5s'
			});
		});
		$('#btngoto5').click(function(){
			sw=5;
			$('#cube').css({
				'transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : ' rotateX(-90deg) rotateY(180deg) rotateZ(90deg)',
				'-ms-transition-duration': '1.5s'
			});
		});
		$('#btngoto6').click(function(){
			sw=6;
			$('#cube').css({
				'transform' : ' rotateX(90deg)',
				'transition-duration': '1.5s',
				'-webkit-transform' : ' rotateX(90deg)',
				'-webkit-transition-duration': '1.5s',
				'-moz-transform' : ' rotateX(90deg)',
				'-moz-transition-duration': '1.5s',
				'-o-transform' : ' rotateX(90deg)',
				'-o-transition-duration': '1.5s',
				'-ms-transform' : ' rotateX(90deg)',
				'-ms-transition-duration': '1.5s'
				
			});
		});
	}
	a();
	$(window).resize(function () {
		a();
			$('#second').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#first") 
		});
		$('#third').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#first")
		});
		$('#four').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#second") 
		});
	$('#five').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#third")
		});
		$('#six').position({		
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#first") 
		});
		$('#seven').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#first")
		});
		$('#eight').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#five")
		});
		$('#nine').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#five")
		});
			$('#ten').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#four")
		});
			$('#ele').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#third")
		});
			$('#twe').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#four")
		});
			$('#tht').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#second")
		});
			$('#ft').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#seven")
		});
		$('#fft').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#six")
		});
		$('#st').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#twe")
		});
		$('#svt').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#eight")
		});
	});
		
			$('#imga').click(function() {
				n += 1;
				if(n == 1) {	
				$('#boxwrapper').animate({
					top:'-100%'
				},1000,'easeInExpo');
				$('#parent, .rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff'   
				},1000);
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
				$('#halfboxclone1').delay(1000).animate({
			left:0
		},1000,'easeOutBounce');
		$('#halfboxclone2,#halfboxclone3').delay(1500).animate({
			left:'0%'
		},1000,'easeOutExpo');
				}
				if(n == 2){
					$('#boxwrapper').animate({
					top:'-200%'
				},1000,'easeInExpo');			
					$('#newhalfdownbox2').delay(750).animate({
									left:'-24%'
								},500,'swing');
		$('#newhalfdownbox1').delay(750).animate({
									left:'49%'
								},500,'swing');
		$('#newhalfdownbox3').delay(1250).animate({
									left:0,
									opacity:1
								},1000);
		$('#newhalfdownbox4').delay(1250).animate({
									left:'50%'
								},500);
				
				$('#box3').animate({
				backgroundColor:'#fff'
				},2500);		
				}
				if(n == 3){
					$('#boxwrapper').animate({
					top:'-300%'
				},1000,'easeInExpo');
					$('#newhalfdownclonebox2').delay(750).animate({
									left:'-24%'
								},500,'swing');
		$('#newhalfdownclonebox1').delay(750).animate({
									left:'49%'
								},500,'swing');
		$('#newhalfdownclonebox3').delay(1250).animate({
									left:0
								},500,'swing');
		$('#newhalfdownclonebox4').delay(1550).animate({
									left:'50%',
									opacity:1
								},1000,'swing');
								$('#box4').animate({
				backgroundColor:'#fff'
				},2500);
				}
				if(n == 4){
					$('#boxwrapper').animate({
					top:'-400%'
				},1000,'easeInExpo');
				$('#newhalfdownclonedbox2').delay(750).animate({
									left:'-24%'
								},500,'swing');
		$('#newhalfdownclonedbox1').delay(750).animate({
									left:'49%'
								},500,'swing');
		$('#newhalfdownclonedbox3').delay(1250).animate({
									left:0,
									opacity:1
								},1000,'swing');
		$('#newhalfdownclonedbox4').delay(1250).animate({
									left:'50%'
								},500,'swing');
								$('#box5').animate({
				backgroundColor:'#fff'
				},2500);
				}
				if(n == 5){
					$('#boxwrapper').animate({
					top:'-500%'
				},1000,'easeInExpo');	
				for(var i=0;i<icons.length;i++){
						$(icons[i]).delay(fade).animate({
						opacity:1
					},500);
					fade += 375;
				}
				fade = 500;			
				}
				if(n == 6) {					
					$('#boxwrapper').animate({
						top:'-600%'
					},1000,'easeInExpo');
					$('#parent').animate({
					opacity:0
				},1000);
				$('.rotatedbox1').animate({
					backgroundColor:'#000',
					color:'#fff'
				})
				$('#portfoliotext, #footer').css({
					color: 'rgb(255,255,255)'
				},2000);
				$('#contact_receive').animate({
					opacity:1
				},1000);
				$('#imga').fadeOut(1000);
				snowFlakes()
				}
				
				});
		
		$('#halfbox1').animate({
			left:0
		},1000,'easeOutBounce');
		$('#halfbox2').delay(1500).animate({
			left:'0%'
		},1000,'easeOutExpo');
		
		$('#second').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#first")
		});
		$('#third').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#first")
		});
		$('#four').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#second") 
		});
		$('#five').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#third")
		});
		$('#six').position({		
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#first") 
		});
		$('#seven').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#first")
		});
		$('#eight').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#five")
		});
		$('#nine').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#five")
		});
		$('#ten').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#four")
		});
			$('#ele').position({
			"my" : "right top",
			"at" : "left bottom",
			"of" : $("#third")
		});
			$('#twe').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#four")
		});
			$('#tht').position({
			"my" : "left top",
			"at" : "right bottom",
			"of" : $("#second")
		});
		$('#ft').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#seven")
		});
			$('#fft').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#six")
		});
		$('#st').position({
			"my" : "left bottom",
			"at" : "right top",
			"of" : $("#twe")
		});
		$('#svt').position({
			"my" : "right bottom",
			"at" : "left top",
			"of" : $("#eight")
		});
	snowCount = 0;
function snowFlakes(){
    if(snowCount > 25){
        return false
    }else{
    var randomTime = Math.floor(Math.random() * (500) * 2);
  var exe = setTimeout(function(){
        snowCount = snowCount +1;
        jquerysnow();
       snowFlakes();
    },randomTime);
    }
}
function jquerysnow() {
       var snow = $('<div class="snow" id="rotating"></div>');
        $('#snowflakes').prepend(snow);
        snowX = Math.floor(Math.random() * $('#snowflakes').width());
        snowSpd = Math.floor(Math.random()+5 * (500) * 4);
        snow.css({'left':snowX+'px'});
    	snow.html('<span id="ice">*</span>');
        snow.animate({
            top: "100%",
            opacity : "0",
        }, 13000, function(){
            $(this).remove();
            jquerysnow();
        });
}
	});