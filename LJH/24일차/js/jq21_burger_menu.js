$(function(){

    $("#open_btn").click(function(){

        // $("nav").animate({left: 0}, 500);
        // $("nav").show();
        $("nav").fadeIn();

    });

    $("#close_btn").click(function(){

        // $("nav").animate({left: -300}, 500);
        // $("nav").hide();
        $("nav").fadeOut();

    });

    $(".sub_menu").hide();
    // 서브메뉴 모두 가림(세팅)

    $(".sub_menu").siblings("a").append('<span class="menu_down"></span>');
    // 서브메뉴의 형제관계에 있는 a태그의 하위요소로 span태그를 추가한다.
    // (서브메뉴를 가지고 있는 a태그 옆에 작은 삼각형 달기)

    $(".main_menu>li>a").click(function(){

        $(".sub_menu").slideUp();
        // 해당 서브메뉴가 열렸을 때 다른 서브메뉴를 접으면서 표현 하고싶을 때
        // 해당 서브메뉴가 열리는 구문 앞에 넣어야 함!

        $(this).next(".sub_menu").slideToggle();
        // 클릭한 a태그의 다음 요소인 서브메뉴를 펼치거나 접는다
        

        $(this).find("span").toggleClass("menu_up");
        // 클릭한 a태그의 하위요소인 span태그(삼각형)에 menu_up 클래스를 붙였다 뗐다 함
        // toggleClass는 클래스를 상태에 따라 추가/삭제(삼각형 위>아래 방향 변경)

        return false;

    });




});