/* main2.js */

var devWidth;
var limitsize = 768;
window.addEventListener('load', function(){
	devWidth = document.querySelector("body").offsetWidth;
	console.log(devWidth);

	window.addEventListener('resize', function(){
		devWidth = document.querySelector("body").offsetWidth;
		console.log(devWidth);
	});

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 햅버거 버튼 클릭*/
	var mobBtn = document.querySelector("div.mobBtn");
	var mob = document.querySelector(".mob");
	var mobClose = document.querySelector("div.mobBtn_close");
	var body = document.querySelector("body");
	var bg = mobBtnClose = document.querySelector(".bg");
	
	mobBtn.addEventListener('click', function(){
		mob.classList.add("on");
		mobClose.classList.add("on");
		body.classList.add("on");
		bg.classList.add("on");
		mobBtn.style.display = "none";
	});

	// 모바일 닫기 클릭
	mobClose.addEventListener('click', function(){
		mob.classList.remove("on");
		mobClose.classList.remove("on");
		body.classList.remove("on");
		bg.classList.remove("on");
		mobBtn.style.display = "block";
	});

	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 주메뉴

	var gnbMenu = document.querySelectorAll(".gnb>ul>li");
	var headerWrap = document.querySelector(".header_wrap");
	var formSrch = document.querySelector("form.srch");
	var srchOpen = document.querySelector(".srch_open");
	var topMenuDD = document.querySelectorAll("dl.topMenu > dd");
	var subMenu = document.querySelectorAll(".gnb>ul>li>ul");
	
	for (var i = 0; i < gnbMenu.length; i++) {
		gnbMenu[i].addEventListener("mouseover", function () {
			if (devWidth < limitsize) {
				return false;
			}
			if (formSrch.offsetWidth > 0 && srch.offsetHeight > 0) {
				formSrch.classList.remove("on");
				srchOpen.classList.remove("on");
			}
			if (topMenuDD[4].classList.contains("on")) {
				topMenuDD[4].classList.remove("on");
			}
			headerWrap.classList.add("on");
			// gnb.style.display = "block";
			subMenu.forEach(function(item) {
				item.classList.add("on");
			});
		});
		gnbMenu[i].addEventListener("mouseout", function () {
			if (devWidth < limitsize) {
				return false;
			}
			headerWrap.classList.remove("on");
			// gnb.style.display = "block";
			subMenu.forEach(function(item) {
				item.classList.remove("on");
			});
		}); //mouseout
		//mouseout
	} //for

	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 로그인 이미지 */
	var appear = "";
	for(var i=0; i<57; i++){
		if(i < 10){
			appear += "<img src='images/appear/appear_0000" + i + ".png' alt='appear" + i + "' />";
		}else{
			appear += "<img src='images/appear/appear_000" + i + ".png' alt='appear" + i + "' />";
		}
	}
	document.querySelector("a.appear").innerHTML = appear;

	var loop = "";
	for(var i=0; i<82; i++){
		if(i<10){
			loop += "<img src='images/loop/loop_0000" + i + ".png' alt='loop" + i + "' />";
		}else{
			loop += "<img src='images/loop/loop_000" + i + ".png' alt='loop" + i + "' />";
		}
	}
	document.querySelector("a.loop").innerHTML = loop;

	/* 로그인 애니메이션 */
	var appearImg = document.querySelectorAll(".appear >img");
	for(var k=0; k<57; k++){
		appearImg[k].style.animation = "ani 2.75s linear " + (k*0.05) + "s 1 normal"; 
	}

	var loopImg = document.querySelectorAll(".loop > img");
	for(var j=0; j<82; j++){
		loopImg[j].style.animation = "ani 4.1s linear " + (2.85 + j*0.05) + "s infinite normal"; 
	}

	
	
	
	/* 검색열기 */
	srchOpen.addEventListener("click", function(){
		this.classList.toggle("on");
		formSrch.classList.toggle("on");

		if (this.classList.contains("on")) {
			this.children[0].setAttribute("title", "검색입력서식 닫기");
		} else {
			this.children[0].setAttribute("title", "검색입력서식 열기");
		}
	});

	/* 고객센터 */
	topMenuDD[4].addEventListener("click", function(){
		this.classList.toggle("on");
		if (this.classList.contains("on")) {
			this.children[0].setAttribute("title", "고객센터 닫기");
		} else {
			this.children[0].setAttribute("title", "고객센터 열기");
		}
	});

	/* 모바일 고객센터 */
	var mobTopMenu = document.querySelectorAll(".mob_topMenu > dd");
	mobTopMenu[4].addEventListener('click', function(){
		this.classList.toggle("on");
		if( this.classList.contains("on") ){
			this.children[0].setAttribute("title", "고객센터 닫기");
		}else{
			this.children[0].setAttribute("title", "고객센터 열기");
		}
	});


	/* 모바일 주메뉴 2단 */
	var mobGnbLi= document.querySelectorAll(".mob_gnb > ul > li");
	for(var i=0; i< mobGnbLi.length; i++){
		mobGnbLi[i].addEventListener('click', function(){
			//siblings() 메소드는 자바스크립트에는 없어서 함수로 만들어서 해야한다. 
			mobGnbLi.forEach(function(item){
				item.classList.remove("on");
			});
			this.classList.toggle("on");
		});
	}
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* 배너 */
	var bnnNum = 0;
	var lastNum = document.querySelectorAll(".banner_frame > section").length - 1;
	var banner_w = document.querySelector("body > section").offsetWidth; //배너의 넓이
	
	window.addEventListener('resize', function(){
		banner_w = document.querySelector("body > section").offsetWidth;
		console.log(banner_w);
	});

	var next = document.querySelector(".next");
	var bannerFrame = document.querySelector(".banner_frame");

	var bannerSection = document.querySelectorAll(".banner_frame > section");
	var arrowA = document.querySelectorAll(".arrow > a");
	var rollingA = document.querySelectorAll(".rolling a");
	var banner_rollA = document.querySelectorAll('.banner_roll a'); 
	
	var prev = document.querySelector(".prev");
	var Play = document.querySelector('a.play');

	

	//다음
	next.addEventListener('click', function(){
		bnnNum++;
		if(bnnNum > lastNum) bnnNum = 0;
		bannerFrame.style.left = bnnNum * -banner_w + "px";

		if( bannerSection[bnnNum].classList.contains('white') ){
			arrowA.forEach(function(item){
				item.classList.add('white');
			});
			rollingA.forEach(function(item){
				item.classList.add('white');
			});
		}else{
			arrowA.forEach(function(item){
				item.classList.remove('white');
			});
			rollingA.forEach(function(item){
				item.classList.remove('white');
			});
		}
		banner_rollA.forEach(function(item){
			item.classList.remove('on');
		});
		banner_rollA[bnnNum].classList.add('on');
	});

	//이전
	prev.addEventListener('click', function(){
		bnnNum--;
		if(bnnNum < 0) bnnNum = lastNum;

		bannerFrame.style.left = bnnNum * -banner_w + "px";

		if( bannerSection[bnnNum].classList.contains('white') ){
			arrowA.forEach(function(item){
				item.classList.add('white');
			});
			rollingA.forEach(function(item){
				item.classList.add('white');
			});
		}else{
			arrowA.forEach(function(item){
				item.classList.remove('white');
			});
			rollingA.forEach(function(item){
				item.classList.remove('white');
			});
		}
		banner_rollA.forEach(function(item){
			item.classList.remove('on');
		});
		banner_rollA[bnnNum].classList.add('on');
	});

	// 오토배너 
	function autoBanner(){
		//next버튼 눌렀을 때랑 같다. 
		bnnNum++;
		if(bnnNum > lastNum) bnnNum = 0;
		bannerFrame.style.left = bnnNum * -banner_w + "px";

		if( bannerSection[bnnNum].classList.contains('white') ){
			arrowA.forEach(function(item){
				item.classList.add('white');
			});
			rollingA.forEach(function(item){
				item.classList.add('white');
			});
		}else{
			arrowA.forEach(function(item){
				item.classList.remove('white');
			});
			rollingA.forEach(function(item){
				item.classList.remove('white');
			});
		}
		banner_rollA.forEach(function(item){
			item.classList.remove('on');
		});
		banner_rollA[bnnNum].classList.add('on');
	}
	var autoBnn = setInterval(autoBanner,5000);

	//배너 재생 멈춤
	var flag = true;
	Play.addEventListener('click', function(){
		if(flag){
			clearInterval(autoBnn);
			this.classList.add('pause');
			flag = false;
		}else{
			autoBnn = setInterval(autoBanner,5000);
			this.classList.remove('pause');
			flag = true;
		}
	});

	/* 롤링 클릭 */
	var banner_roll = document.querySelectorAll(".banner_roll li");
	banner_roll.forEach(function(item){
		item.addEventListener('click', rollAction);
	});

	function rollAction(item){
		curRoll = item.currentTarget;
		parentRoll = curRoll.parentElement;
		childRoll = parentRoll.children;
		bnnNum = Array.from(childRoll).indexOf(curRoll);


		bannerFrame.style.left = bnnNum * -banner_w + "px";

		if( bannerSection[bnnNum].classList.contains('white') ){
			arrowA.forEach(function(item){
				item.classList.add('white');
			});
			rollingA.forEach(function(item){
				item.classList.add('white');
			});
		}else{
			arrowA.forEach(function(item){
				item.classList.remove('white');
			});
			rollingA.forEach(function(item){
				item.classList.remove('white');
			});
		}
		banner_rollA.forEach(function(item){
			item.classList.remove('on');
		});
		banner_rollA[bnnNum].classList.add('on');
	}

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* content1 */
	/* 퀵메뉴 이미지 */
	var quick1 = "";
	for(var i=0; i<20; i++){
		if(i<10){
			quick1 += "<img src='images/quick01/quick01_0000" + i + ".png' alt='quick1 메뉴" + i + "' />";
		}else{
			quick1 += "<img src='images/quick01/quick01_000" + i + ".png' alt='quick1" + i + "' />";
		}
	}
	document.querySelector(".quick1").innerHTML = quick1;

	var quick2 = "";
	for(var i=0;i<20;i++){
		if(i<10){
			quick2 += "<img src='images/quick02/quick02_0000" + i + ".png' alt='quick2" + i + "' />";
		}else{
			quick2 += "<img src='images/quick02/quick02_000" + i + ".png' alt='quick2" + i + "' />";
		}
	}
	document.querySelector(".quick2").innerHTML = quick2;

	var quick3 = "";
	for(var i=0;i<20;i++){
		if(i<10){
			quick3 += "<img src='images/quick03/quick03_0000" + i + ".png' alt='quick3" + i + "' />";
		}else{
			quick3 += "<img src='images/quick03/quick03_000" + i + ".png' alt='quick3" + i + "' />";
		}
	}
	document.querySelector(".quick3").innerHTML = quick3;

	var quick4 = "";
	for(var i=0;i<20;i++){
		if(i<10){
			quick4 += "<img src='images/quick04/quick04_0000" + i + ".png' alt='quick4" + i + "' />";
		}else{
			quick4 += "<img src='images/quick04/quick04_000" + i + ".png' alt='quick4" + i + "' />";
		}
	}
	document.querySelector(".quick4").innerHTML = quick4;

	//마우스 올렸을 때
	var quick = document.querySelectorAll(".content1 ul li");
	quick.forEach(function(item){
		item.addEventListener("mouseover",function(){
			for(var k = 0; k < 20; k++){
				var imgLi = this.children[0].children[0].children;
				imgLi[k].style.animation = "ani 1s linear " + 0.05 * k + "s 1 normal";
			}
		});
	});

	// 마우스 뗐을 때
	quick.forEach(function(item){
		item.addEventListener("mouseout",function(){
			for(var k = 0; k < 20; k++){
				var imgLi = this.children[0].children[0].children;
				imgLi[k].style.animation = "none";
			}
		});
	});

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* content2 */
	




	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//content3

	// 마우스 올렸을 때
	var all = document.querySelectorAll('.content3_inner > div > ul > li');

	//for(var i=0; i<all.length; i++){
	//	all[i].addEventListener('mouseover',function(){
	//		this.classList.add('on');
	//	});

	//	all[i].addEventListener('mouseout',function(){
	//		this.classList.remove('on');
	//	});
	//}
	
	// 위랑 같은 표현임
	all.forEach(function(item){
		item.addEventListener('mouseover',function(){
			this.classList.add('on');
		});
		item.addEventListener('mouseout',function(){
			this.classList.remove('on');
		});
	});

	/* 대분류 */
	var group = document.querySelectorAll(".content3_inner > ul > li > a");
	var all = document.querySelectorAll(".content3_inner > div > ul > li");
	var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
	var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
	var dinner = document.querySelectorAll(".content3_inner > div > ul > li.dinner");
	var box = document.querySelectorAll(".content3_inner > div > ul > li.box");
	
	for(var k=0; k<group.length; k++){//a가 여러개니깐 //forEach안에 forEach넣어도 된다.
		group[k].addEventListener("click", function(event){
			event.preventDefault(); // 점핑방지
			group.forEach(function(idx){
				idx.classList.remove("on"); //모든 a에 다 해줘야 되니깐 forEach사용해준다.
			});
			this.classList.add("on");

			var className = this.parentElement.getAttribute("class"); // this는 a //get을 쓰면 class속성값을 가져올 수 있다.
			// 값을 가져올때는 get, 값을 지정할때는 set을 사용한다.
			console.log(className);
			
			all.forEach(function(item){ //모든 애들을 하나씩 안보이게 해줘야 한다. 
				item.style.display = "none";
			});
			
			switch(className){
				case "all" :
					all.forEach(function(item){ // 배열에 있는 애들 하나하나를 가져와서 display를 적용시켜줘야 한다. 
						item.style.display = "block";
					});
					break;
				case "ent" :
					ent.forEach(function(item){ 
						item.style.display = "block";
					});
					break;
				case "shop" :
					shop.forEach(function(item){ 
						item.style.display = "block";
					});
					break;
					break;
				case "dinner" :
					dinner.forEach(function(item){ 
						item.style.display = "block";
					});
					break;
				case "box" :
					box.forEach(function(item){ 
						item.style.display = "block";
					});
					break;
				default :
					break;
			}

		});	// click
	}


	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/* footer */
	/* 패밀리사이트 */
	var familySite = document.querySelector(".family_site");
	familySite.addEventListener("click", function (e) {
		e.preventDefault();
		this.classList.toggle("on");

		if (this.classList.contains("on")) {
			this.children[0].setAttribute("title", "닫기");
		} else {
			this.children[0].setAttribute("title", "열기");
		}
	});





	/* 스크롤이벤트 */
	//top버튼
	var top = document.querySelector(".top");

	window.addEventListener("scroll", function () {
		var scroll = document.querySelector("html").scrollTop;
		console.log(scroll);

		if (scroll <= 0) {
			top.classList.remove("on", "ab");
		} else if (scroll > 0 && scroll < 2700) {
			top.classList.remove("ab");
			top.classList.add("on");
		} else {
			top.classList.add("ab");
		}
	

	

		// 도넛
		var doughnutLeftL = document.querySelector(".doughnut_Left_L");
		var doughnutLeftS = document.querySelector(".doughnut_Left_S");
		var combineLeft = document.querySelector(".combine_Left");
		var doughnutCenterM = document.querySelector(".doughnut_Center_M");
		var doughnutCenterS = document.querySelector(".doughnut_Center_S");
		var doughnutRightM = document.querySelector(".doughnut_right_M");
		var doughnutRightS = document.querySelector(".doughnut_right_S");
		var combineRight = document.querySelector(".combine_right");
		
		doughnutLeftL.style.top = 71+scroll*0.5+ "px";
		doughnutLeftS.style.top = 796-scroll*1.1+ "px";
		combineLeft.style.top = 1726+scroll*0.1+ "px";

		doughnutCenterM.style.top = 722+scroll*0.1+ "px";
		doughnutCenterS.style.top = 991+scroll*1.1+ "px";

		doughnutRightM.style.top = 365+scroll*0.5+ "px";
		doughnutRightS.style.top = 310+scroll*0.1+ "px";
		combineRight.style.top = -300+scroll*0.7+ "px";
	});


	top.addEventListener("click", function (e) {
		e.preventDefault();
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});

});

