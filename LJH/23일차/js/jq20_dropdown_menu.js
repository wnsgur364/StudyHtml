$(function(){


    // 1. mouseover, mouseleave를 이용한 방법

    // // $("ul.main_menu>li>a").mouseover(function(){
    // // 이렇게 하면 메인메뉴를 벗어나는 순간 서브메뉴가 접히기 때문에 클릭할 수가 없다!
    // $("ul.main_menu>li").mouseover(function(){
    // // 서브메뉴를 포함하고있는 부모요소인 li에 마우스 이벤트를 걸어야 서브메뉴가 접히지 않음!

    //     // $("ul.sub_menu").stop().slideDown();
    //     // 풀다운 메뉴를 만들때(전체 서브메뉴 다 보이게 할 때)는 이렇게 작성하면 된다.
    //     // .stop()를 .slideDown() 앞에 추가해줘야 여러 번의 마우스 움직임으로 인해 오버된 횟수만큼 애니메이션이 실행되는 것을 방지해준다.(한번 실행되고 끝나게. 즉시 중지, 대기열 삭제)

    //     // $(this).find("ul.sub_menu").stop().slideDown();
    //     $(this).children("ul.sub_menu").stop().slideDown();
    //     // 마우스를 올린 요소의 자식인 서브메뉴만 나오게 할 때

    // });

    // $("ul.main_menu>li").mouseleave(function(){
    //     $("ul.sub_menu").stop().slideUp();
    // });



    // 2. hover를 이용한 방법
    // $("ul.main_menu>li").hover(function(){
    //     // .hover() : .mouseover() + .mouseleave()

    //     $(this).children("ul.sub_menu").stop().slideToggle();
    //     // .slideToggle() : .slideUp() + .slideDown()
        
    // });


    // 3. hover를 이용, :animated 선택자를 사용한 방법
    // $("ul.main_menu>li").hover( function(){}, function(){} );
    $("ul.main_menu>li").hover(
        function(){
            // $("ul:not(:animated)", this).slideDown();
            $(this).find("ul:not(:animated)").slideDown();
            // :animated : 제이쿼리 선택자. 움직이는 동적 요소를 선택
            // ul 중 animated(애니메이션이 실행중인 것)가 '아닌' 부정선택자를 사용해
            // 현재 애니메이션이 실행되지 않고 있는 것(접혀있는것)에 슬라이드 다운 명령을 준다.
            // 그래서 애니메이션이 실행되고있는것은 펼쳐지지 않는다.

            // 제이쿼리 선택자 위치에 2개의 인자를 넣을 경우 두번째 인자는 context 매개변수
            // 선택자(요소 혹스 속성)이 적용되는 범위를 한정한다 .find()와 같음
            // ex: $("ul", this)을 $(this).find("ul")로 바꾸어 사용 가능
        },
        function(){
            // $("ul", this).slideUp();
            $(this).find("ul").slideUp();
            // 마우스가 벗어났을 때 벗어난 요소는 접는다.
        }
    );

    

    // $("ul.main_menu>li").hover(function(){
    //     $("ul.sub_menu, .menu_bg").stop().slideToggle();
    //     // 전체 메뉴 배경하고 같이 나오게 실행
    // });



});