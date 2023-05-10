$(function(){

    // 기본 세팅
    $(".tab_content").hide();
    $(".tab_content:first").show();
    // $(".tab_content").first().show();
    // 콘텐츠들을 모두 숨기고, 첫번째 탭의 콘텐츠 내용을 보여지게 세팅

    $(".tab_menu a:first").addClass("tab_active");
    // 탭 메뉴 첫번째에 선택되어있는 상태로 만들기 위해 메뉴에 tab_active 클래스 추가



    // 클릭 이벤트
    $(".tab_menu a").click(function(){
        // 탭메뉴의 버튼을 클릭하면

        $(".tab_menu a").removeClass("tab_active");
        // 모든 탭메뉴에 있는 tab_active 클래스를 삭제(뭐가 선택되어있을지 모르기 때문에 전체 다 삭제)(불 끄기)
        $(this).addClass("tab_active");
        // 메뉴들 중 내가 클릭한 요소(클릭이벤트가 발생한 요소)에 tab_active클래스를 붙인다.(불 켜기)

        $(".tab_content").hide();
        // 모든 콘텐츠 내용 가리기(뭐가 보여지고있는 상태인지 모르기 때문에 전체 다 삭제)
        var activeTab = $(this).attr("href");
        console.log(activeTab);
        // activeTab 변수에 해당 클릭한 요소(a태그)의 href속성값을 가져와 저장(클릭할때마다)

        $(activeTab).show();
        // 해당 ID속성을 가지고있는 콘텐츠만 보여줌
        // <a href="#tab1"> 클릭-> $("#tab1").show();


    });




});