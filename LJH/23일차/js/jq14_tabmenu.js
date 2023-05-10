$(function(){

    // 세팅

    var tabMenu = $("#tab_menu");
    // 요소를 변수에 담아놓으면 요소를 선택할때마다 탐색하는 것을 방지해준다.

    tabMenu.find("ul>li>div").hide();
    // tabMenu의 하위요소인 ul>li>div들을 모두 가려놓는다.

    tabMenu.find("ul>li.active>div").show();
    // 탭 내용 중 active 클래스가 있는 요소를 보여줌(첫번째 내용)




    // 클릭이벤트 함수
    function tabList() {

        var target = $(this);
        // 클릭한 해당 a태그

        target.next().show()
        // 클릭한 해당 a태그의 다음요소(div=콘텐츠)를 보여주고
        // (클릭한 내용 보여주기)
        
              .parent("li").addClass("active")
            // 그 div의 부모인 li태그에 active클래스를 추가하고(클릭한 버튼에 불 켜기)
              
              .siblings("li").removeClass("active")
            // 불켜진 요소의 나머지 형제에 active클래스 제거(불끄기)
              
              .find("div").hide();
            // active클래스를 제거한 li의 하위요소인 div를 가림
            // (클릭하지 않은것의 내용 가리기)

    }



    tabMenu.find("ul>li>a").click(tabList).focus(tabList);
    // 탭메뉴의 하위요소 중 ul>li>a를 찾고 그 요소에 클릭이나 포커스가 잡혔을 때 tabList함수를 호출


});