/* main.js */

var $devWidth;
var $limitsize = 768;

$(document).ready(function(){
	
	$devWidth = $("body").width();
	console.log($devWidth);

	$(window).resize(function(){
		$devWidth = $("body").width();
		console.log($devWidth);
	});

	/* 주메뉴 */
	// a에 마우스 올려놓으면 height값 늘어나야 되고 하위 ul은 diplay block으로 바꿔줘야하고
	// header_wrap 은 에니메이트로 한다
	$(".gnb > ul > li > a").bind("mouseover focus",function(){
		//모바일에서 수행X
		if($devWidth < $limitsize) return false;

		if( $("form.srch").is(":visible") ){/* 주메뉴에 마우스를 올렸는데 검색창이 열려있어(보이니?) */
			// element.offsetWidth > 0 && element.offsetHeight > 0; 가로세로값이 0보다 크면 보이는거니깐
			$("form.srch").removeClass("on");
			$("srch_open").removeClass("on")
		}

		if( $("dl.topMenu > dd").eq(4).hasClass("on") ){ //.classList.contains('on')
			$("dl.topMenu > dd").eq(4).removeClass("on")
		}
		
		$(".header_wrap").animate({"height":"445px"},300,"linear" ,function(){
			$(".gnb > ul > li > ul").css("display","block");
		});
	});

	$(".gnb").bind("mouseleave blur",function(){
		//모바일에서 수행X
		if($devWidth < $limitsize) return false;

		$(".header_wrap").animate({"height":"120px"},300,"linear",function(){
			$(".gnb > ul > li > ul").css("display","none");
		});
	});

	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 로그인 이미지 */
	var appear="";
	for(var i=0; i<57; i++){
		if(i <10){
			appear +="<img src='images/appear/appear_0000" + i + ".png' alt='로그인버튼" + i + "' />";
		}else{
			appear +="<img src='images/appear/appear_000" + i + ".png' alt='로그인버튼" + i + "' />";
		}
	}
	$("a.appear").html(appear);


	var loop="";
	for(var i=0; i<82; i++){
		if(i <10){
			loop +="<img src='images/loop/loop_0000" + i + ".png' />";
		}else{
			loop +="<img src='images/loop/loop_000" + i + ".png' />";
		}
	}
	$("a.loop").html(loop);

	/* 로그인 애니메이션 */
	for(k=0; k<57; k++){
		$(".appear > img").eq(k).css({"animation":"ani 2.85s linear "+(k*0.05)+"s 1 normal"});
	}

	/* loop 애니메이션 */
	for(j=0; j<82; j++){
		$(".loop > img").eq(j).css({"animation":"ani 4.1s linear "+(2.85+j*0.05)+"s infinite normal"});
	}

	/* 검색열기 */
	$("span.srch_open").click(function(){
		$(this).toggleClass("on");
		$("form.srch").toggleClass("on");
	});

	/* 고객센터 */
	$("dl.topMenu > dd").eq(4).click(function(){
		$(this).toggleClass("on");
	});


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 햅버거 버튼 클릭*/
	// 햄버거 버튼을 누르면 바깥에 있다가 안으로 들어오고 닫기버튼도 스르르
	$("div.mobBtn").click(function(){
		$("div.mob").addClass("on");
		$("div.mobBtn_close").addClass("on");
		$("body").addClass("on");
		$("div.bg").addClass("on");
		
		$(this).hide();

	});
	$("div.mobBtn_close").click(function(){
		$("div.mob").removeClass("on");
		$("div.mobBtn_close").removeClass("on");
		$("body").removeClass("on");
		$("div.bg").removeClass("on");
		$("div.mobBtn").show();

	});

	/* 모바일 고객센터 */
	$("dl.mob_topMenu > dd").eq(4).click(function(){
		$(this).toggleClass("on");

		if( $(this).hasClass("on") ){
			$(this).children("a").attr("title","검색서식닫기");
		}else{
			$(this).children("a").attr("title","검색서식열기");
		}
	});

	/* 모바일 주메뉴 2단 */
	$("nav.mob_gnb > ul > li").click(function(){
		$(this).siblings().removeClass("on");
		$(this).toggleClass("on");
	});



	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 배너 */
	var $bnnNum = 0;
	var $lastNum = $(".banner_frame > section").size() - 1;
	var $banner_w = $("body > section").width(); //배너의 넓이

	//리사이즈 반응형이기 때문
	$(window).resize(function(){
		$banner_w = $("body > section").width();
	});

	//다음
	$(".next").click(function(){
		$bnnNum++;
		if($bnnNum > $lastNum) $bnnNum = 0;
		$(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){
			
			if( $(".banner_frame > section").eq($bnnNum).hasClass("white") ){ //class white를 가지고 있냐?
				$(".arrow > a").addClass("white");
				$(".rolling a").addClass("white");
			}else{
				$(".arrow > a").removeClass("white");
				$(".rolling a").removeClass("white");
			}
			
			$(".banner_roll a").removeClass("on");
			$(".banner_roll a").eq($bnnNum).addClass("on");
		});
	});

	//이전
	$(".prev").click(function(){
		$bnnNum--;
		if($bnnNum < 0) $bnnNum = $lastNum;
		$(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){
			
			if( $(".banner_frame > section").eq($bnnNum).hasClass("white") ){ //class white를 가지고 있냐?
				$(".arrow > a").addClass("white");
				$(".rolling a").addClass("white");
			}else{
				$(".arrow > a").removeClass("white");
				$(".rolling a").removeClass("white");
			}

			$(".banner_roll a").removeClass("on");
			$(".banner_roll a").eq($bnnNum).addClass("on");
		});
	});

	/* 오토배너 */
	function autoBanner(){
		//next버튼 눌렀을 때 랑 똑같이 적용하면 된다.
		$bnnNum++;
		if($bnnNum > $lastNum) $bnnNum = 0;
		$(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){
			
			if( $(".banner_frame > section").eq($bnnNum).hasClass("white") ){ //class white를 가지고 있냐?
				$(".arrow > a").addClass("white");
				$(".rolling a").addClass("white");
			}else{
				$(".arrow > a").removeClass("white");
				$(".rolling a").removeClass("white");
			}
			
			$(".banner_roll a").removeClass("on");
			$(".banner_roll a").eq($bnnNum).addClass("on");
		});
	};

	// 일정한 시간 동안 계속 반복
	var $autoBnn = setInterval(autoBanner,5000);

	/* 재생멈춤 */
	var flag = true;
	$("a.play").click(function(){
		if(flag){
			//멈춰라
			clearInterval($autoBnn);
			$(this).addClass("pause");
			flag = false;
		}else{
			//재생
			$autoBnn = setInterval(autoBanner,5000);
			$(this).removeClass("pause");
			flag = true;
		}
	});


	/* 롤링 클릭 */
	// 해당index번호에 해당되는 배너번호로 기차가 움직이면 되는것!
	var $banner = $(".banner_roll a").click(function(){
		$bnnNum = $banner.index(this); // 해당 클릭된 a를 $bnnNum에 넣어준다 // 배너 인덱스 번호로 저장을 해준다. 

		//바뀐 배너번호로 움직이면 된다. // 바뀐 배너번호로 기차가 이동해라
		$(".banner_frame").stop().animate({"left":$bnnNum * (-$banner_w)},600,"linear",function(){
			
			if( $(".banner_frame > section").eq($bnnNum).hasClass("white") ){ //class white를 가지고 있냐?
				$(".arrow > a").addClass("white");
				$(".rolling a").addClass("white");
			}else{
				$(".arrow > a").removeClass("white");
				$(".rolling a").removeClass("white");
			}
			
			$(".banner_roll a").removeClass("on");
			$(".banner_roll a").eq($bnnNum).addClass("on");
		});
	});


	// 모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른 위치에 있도록 에니메이션 적용
	$("body > section").bind("orientationchange",function(){
		$banner_w = $("body > section").width();
		$(".banner_frame").animate({"left":$bnnNum * (-$banner_w)},600,"linear");
	});

	// 모바일에서 
	$("body > section").bind("swipeleft",function(){
		$(".next").trigger("click");
	});
	$("body > section").bind("swiperight",function(){
		$(".prev").trigger("click");
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* content1 */
	/* 퀵메뉴 이미지 */
	var quick1="";
	for(var i=0; i<20; i++){
		if(i <10){
			quick1 +="<img src='images/quick01/quick01_0000" + i + ".png' alt='quick01_" + i + "' />";
		}else{
			quick1 +="<img src='images//quick01/quick01_000" + i + ".png' alt='quick01_" + i + "' />";
		}
	}
	$("span.quick1").html(quick1);

	var quick2="";
	for(var i=0; i<20; i++){
		if(i <10){
			quick2 +="<img src='images/quick02/quick02_0000" + i + ".png' alt='quick02_" + i + "' />";
		}else{
			quick2 +="<img src='images/quick02/quick02_000" + i + ".png' alt='quick02_" + i + "' />";
		}
	}
	$("span.quick2").html(quick2);
	
	var quick3="";
	for(var i=0; i<20; i++){
		if(i <10){
			quick3 +="<img src='images/quick03/quick03_0000" + i + ".png' alt='quick03_" + i + "' />";
		}else{
			quick3 +="<img src='images/quick03/quick03_000" + i + ".png' alt='quick03_" + i + "' />";
		}
	}
	$("span.quick3").html(quick3);

	var quick4="";
	for(var i=0; i<20; i++){
		if(i <10){
			quick4 +="<img src='images/quick04/quick04_0000" + i + ".png' alt='quick04_" + i + "' />";
		}else{
			quick4 +="<img src='images/quick04/quick04_000" + i + ".png' alt='quick04_" + i + "' />";
		}
	}
	$("span.quick4").html(quick4);

	// 마우스를 올렸을때
	$(".content1 a").hover(function(){
		//마우스 올렸을 때 //애니메이션 실행 
		for(k=0; k<20; k++){
			// 하위 요소중에 span을 찾고 span의 children이 img
			$(this).find("span").children().eq(k).css({"animation":"ani 1.0s linear "+(k*0.05)+"s 1 normal"});
		}
	},function(){
		//마우스 뗏을 때 //애니메이션이 없어진다.
		for(k=0; k<20; k++){
			// 하위 요소중에 span을 찾고 span의 children이 img
			$(this).find("span").children().eq(k).css({"animation":"none"});
		}
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* content2 */
	/* 스크롤이벤트 */
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		console.log(scroll);

		// top 버튼
		if( scroll < 100){
			$("div.top").removeClass("on ab");
		}

		if( scroll >= 100 && scroll < 2800){
			$("div.top").removeClass("ab");
			$("div.top").addClass("on");
		}

		if( scroll >= 2800 ){
			$("div.top").addClass("ab");
		}

		// 도넛
		$(".doughnut_Left_L").css({"top":71+scroll*0.5});
		$(".doughnut_Left_S").css({"top":796+scroll*1.1});
		$(".combine_Left").css({"top":1726+scroll*0.1});

		$(".doughnut_Center_M").css({"top":722+scroll*0.1});
		$(".doughnut_Center_S").css({"top":991+scroll*1.1});
		
		$(".doughnut_right_M").css({"top":365+scroll*0.5});
		$(".doughnut_right_S").css({"top":957+scroll*0.1});
		$(".combine_right").css({"top":-300+scroll*0.7});
	});




	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* content3 */
	$(".content3_inner > div > ul > li").hover(function(){
		//마우스를 올렸을 때
		$(this).addClass("on");
	},function(){
		//마우스를 뗐을 때
		$(this).removeClass("on");
	});


	/* 대분류 */
	$(".content3_inner > ul > li > a").bind("click focus",function(e){
		e.preventDefault();
		// 기존 on 삭제
		$(".content3_inner > ul > li > a").removeClass("on");
		// click한 부분에 on 추가
		$(this).addClass("on");

		var $className = $(this).parent().attr("class");
		console.log($className);
		$(".content3_inner > div >  ul > li").hide();

		switch($className){
			case "all" :
				$(".content3_inner > div >  ul > li").show();
				break;
			case "ent" :
				$(".content3_inner > div > ul").find(".ent").show();
				break;
			case "shop" :
				$(".content3_inner > div > ul > li").filter(".shop").show();
				break;
			case "dinner" :
				$(".content3_inner > div > ul").find(".dinner").show();
				break;
			case "box" :
				$(".content3_inner > div > ul").find(".box").show();
				break;
			default :
				break;
		};
	});



	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* footer */
	/* 패밀리사이트 */
	$("dd.family_site").bind("click focus",function(e){
		e.preventDefault();
		$(this).toggleClass("on")
		
		if( $(this).hasClass("on") ){
			$(this).children("a").attr("title","닫기");
		}else{
			$(this).children("a").attr("title","열기");
		}
	});






});