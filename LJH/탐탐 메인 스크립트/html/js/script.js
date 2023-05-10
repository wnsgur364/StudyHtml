$(function(){

    // 모바일 내비게이션-----------------------
    $("#m_open_btn a").click(function(e){
        e.preventDefault();

        $("#lnb_m_bg").fadeIn();
        $("#lnb_m").animate({
            left: 0
        });
    });
    $("#m_close_btn, #lnb_m_bg").click(function(){
        $("#lnb_m_bg").fadeOut();
        $("#lnb_m").animate({
            left: -500
        });
    });

    $("#lnb_m .sub_menu, #lnb_m .sub_menu_3depth").hide();
    // 서브메뉴들 가려놓기
    $("#lnb_m .main_menu>li").find(".sub_menu").prev("a").addClass("sub_down");
    // 서브메뉴를 가지고있는 요소에만 아래 화살표 붙이기

    // li으로 선택하면 하위 서브메뉴를 클릭했을 때에도 접혀버림
    $("#lnb_m .main_menu>li>a").click(function(e){
        // 메인메뉴 클릭 이벤트
        e.preventDefault();

        // 서브메뉴를 갖고있는 요소만 실행되게끔 if문 작성
        // length(요소 개수)를 반환하기 때문에 없는 경우 0(false)을 반환하기 때문에 실행 안됨
        if( $(this).next(".sub_menu").length ) {

            $(this).toggleClass("sub_up").next(".sub_menu").slideToggle();
            $(this).parent().siblings().children("a").removeClass("sub_up").next(".sub_menu").slideUp();

        }
    });
    
    $("#lnb_m .sub_menu>li>a").click(function(e){
        e.preventDefault();

        if( $(this).next(".sub_menu_3depth").length ) {
            $(this).next(".sub_menu_3depth").slideToggle();
            $(this).parent().siblings().children(".sub_menu_3depth").slideUp();
        }
    });


    // 슬릭 슬라이더
    $('#main_visual .slick').slick({
        fade: true,
        autoplay : true,
        autoplaySpeed: 2000,
        speed : 1000,
        arrows : false,
        dots : true,
    });

    $('#notice_m .slick').slick({
        vertical : true,
        autoplay : true,
        autoplaySpeed: 3000,
        speed : 800,
        arrows : false,
        dots : false
    });

    $('#notice_pc .slick').slick({
        vertical : true,
        autoplay : true,
        autoplaySpeed: 3000,
        speed : 800,
        arrows : false,
        dots : false
    });


    // 탐앤탐스 메뉴 슬라이드
    $('#toms_menu .slick').slick({
        autoplay : true,
        autoplaySpeed: 2000,
        speed : 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : true,
        dots : true,
        prevArrow : $(".slide_btn_prev a"),
        nextArrow : $(".slide_btn_next a"),
        responsive: [
        { 
          breakpoint: 768,
          settings: {    
            slidesToShow: 1,
            dots : false,
          } 
        },
        { 
            breakpoint: 1400,
            settings: {    
              slidesToShow: 3,
              dots : false,
            } 
          }
      ]
    });


    function menuFraction(){
        var status = $('#toms_menu .fraction');
        var slickElement = $('#toms_menu .slick');

        slickElement.on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide){
            // init : 첫번째 초기화 후 실행
            // reInit : 재초기화할 때마다 발생
            // beforeChange : 슬라이드 변경 전 실행
            // event : 이벤트가 일어났을 때 그 값을 받아오는 인수
            // 슬라이드가 변경될 때마다 실행되며 변수를 업데이트함
            
            var i = (nextSlide ? nextSlide : 0) + 1;
            // nextSlide 현재 0(init 이벤트로 초기화)
            // nextSlide: 0(false) -> nextSlide = 0, i = 1 (슬라이드 변경 전 실행)
            //            1(true)  -> nextSlide = 1 + 1 , i = 2
            //            2(true)  -> nextSlide = 2 + 1 , i = 3
            //            3(true)  -> nextSlide = 3 + 1 , i = 4
            //            4(true)  -> nextSlide = 4 + 1 , i = 5

            // console.log("currentSlide: " + currentSlide);
            // console.log("nextSlide: " + nextSlide);
            // console.log("i: " + i);

            status.text(i + ' / ' + slick.slideCount);
            // slideCount : 슬릭에서 개수 제공해주는 속성

            
        });
    }
    menuFraction();


    $("#toms_menu .pause").click(function(){
        $("#toms_menu .slick").slick("slickPause");
        $(this).css({display: "none"});
        $("#toms_menu .play").css({display: "block"});
    });

    $("#toms_menu .play").click(function(){
        $("#toms_menu .slick").slick("slickPlay");
        $(this).css({display: "none"});
        $("#toms_menu .pause").css({display: "block"});
    });
    



    // 탐앤탐스 md픽 슬라이드
    $('#toms_md .slick').slick({
        autoplay : true,
        autoplaySpeed: 2000,
        speed : 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows : true,
        dots : true,
        prevArrow : $(".slide_btn_prev a"),
        nextArrow : $(".slide_btn_next a"),
        responsive: [
        { 
          breakpoint: 768,
          settings: {    
            slidesToShow: 1,
            dots : false,
          } 
        },
        { 
            breakpoint: 1400,
            settings: {    
              slidesToShow: 3,
              dots : false,
            } 
          }
      ]
    });


    function mdPickFraction(){
        var status = $('#toms_md .fraction');
        var slickElement = $('#toms_md .slick');

        slickElement.on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide){
            // init : 첫번째 초기화 후 실행
            // reInit : 재초기화할 때마다 발생
            // beforeChange : 슬라이드 변경 전 실행
            // event : 이벤트가 일어났을 때 그 값을 받아오는 인수
            // 슬라이드가 변경될 때마다 실행되며 변수를 업데이트함
            
            var i = (nextSlide ? nextSlide : 0) + 1;
            // nextSlide 현재 0(init 이벤트로 초기화)
            // nextSlide: 0(false) -> nextSlide = 0, i = 1 (슬라이드 변경 전 실행)
            //            1(true)  -> nextSlide = 1 + 1 , i = 2
            //            2(true)  -> nextSlide = 2 + 1 , i = 3
            //            3(true)  -> nextSlide = 3 + 1 , i = 4
            //            4(true)  -> nextSlide = 4 + 1 , i = 5

            // console.log("currentSlide: " + currentSlide);
            // console.log("nextSlide: " + nextSlide);
            // console.log("i: " + i);

            status.text(i + ' / ' + slick.slideCount);
            // slideCount : 슬릭에서 개수 제공해주는 속성

            
        });
    }
    mdPickFraction();



    $("#toms_md .pause").click(function(){
        $("#toms_md .slick").slick("slickPause");
        $(this).css({display: "none"});
        $("#toms_md .play").css({display: "block"});
    });

    $("#toms_md .play").click(function(){
        $("#toms_md .slick").slick("slickPlay");
        $(this).css({display: "none"});
        $("#toms_md .pause").css({display: "block"});
    });




    // 메뉴 드롭다운(데스크탑)
    $("#lnb_pc .main_menu>li").hover(function(){
        $(this).children(".sub_menu").stop().fadeToggle(300);
    });



    
    // 스크롤 반응 헤더 높이 조절(데스크탑)
    $(window).scroll(function() {
        // 스크롤 이동 시 실행되는 코드
        if($(window).width() > 1400) {
            if(window.scrollY > 160) {
                $("#header").css({height: "120px"});
                $("#header h1").css({
                    width: "80px",
                    height: "80px"
                })
            } else {
                $("#header").css({height: "140px"});
                $("#header h1").css({
                    width: "94px",
                    height: "94px"
                })
            }
        }

    });



    // 리사이즈 이벤트
    var delay = 100;
    var timer = null;

    $(window).on('resize', function(){
        // 창 크기를 조절하면 실행
        console.log("hello");
        // resize 이벤트가 일어났을 때 계속 실행되기 때문에 비효율적, 브라우저에 과부하를 줄 수 있다.

        clearTimeout(timer);
        // 타이머 함수 제거
        // clearTimeout(setTimeout변수명);
        // setTimeout으로 지정된 함수를 취소해주는 역할
        // 0.1초 안에 리사이즈가 발생되면 계속 timer 값이 취소되어 덮이기 때문에 계속 실행되는 것을 방지

        timer = setTimeout(function(){
            // setTimeout(function, delay) : 일정 시간이 지나면 함수 한번 실행
            
            
            if (window.innerWidth > 1400) {
                // 너비 1400보다 크면(데스크탑 버전에서만 실행)

                if(window.scrollY > 160) {
                    // 스크롤바 위치 160 넘어가면(아래로 스크롤 했을 때)
                    $("#header").css({height: "120px"});
                    $("#header h1").css({
                        width: "80px",
                        height: "80px"
                    })
                } else {
                    // 스크롤바 올렸을 때
                    $("#header").css({height: "140px"});
                    $("#header h1").css({
                        width: "94px",
                        height: "94px"
                    })
                }

            } else {
                // 너비 1400 이하(모바일~태블릿)

                $("#header").css({height: "60px"});
                $("#header h1").css({
                    width: "47px",
                    height: "47px"
                });

            }

        }, delay);
    });

   

    


});