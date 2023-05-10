$(function(){

    var $menu = $(".floating_menu li.menu"),
        $contents = $(".scroll"),
        $doc = $("html, body");
    // 제이쿼리에서 요소를 선택해서 담는 변수명 앞에는 $를 붙여서 스크립트 용도의 변수와 구분을 한다.


    // 해당 섹션으로 스크롤 이동하는 이벤트
    $menu.on("click", "a", function(){
        // 메뉴에 클릭이벤트가 일어났을때 (a태그 범위 안에서)
        // $menu.find("a").click()와 같음!

        var $target = $(this).parent(), // 클릭한 앵커태그의 부모요소인 li(ex: 메뉴1 a태그의 부모 li)
            idx = $target.index(),      // 클릭한 li의 인덱스번호(ex: 메뉴1을 클릭하면 idx = 0)
            section = $contents.eq(idx),    // idx에 저장된 인덱스번호로 선택. 섹션 중 인덱스번호가 idx와 일치는 것을 선택(ex: 0번째 섹션)
            offsetTop = section.offset().top;   // 클릭한(선택한) 섹션의 offset 높이값

        $doc.animate({
            scrollTop : offsetTop
            // 스크롤위치를 클릭한 앵커태그를 통해 가지고온 섹션의 offset 높이값으로 이동시킨다.
        }, 1000);

    });

    // 메뉴에 불 켜기
    $(window).scroll(function(){

        var sclTop = $(window).scrollTop();
        // 브라우저의 스크롤 값을 가져옴

        $.each( $contents, function(idx, item){

            // $(선택자).each(function(){});
            // $.each( $(선택자), function(매개변수1, 매개변수2){} );
            // 매개변수1 : 배열에 저장된 인덱스 값
            // 매개변수2 : 배열에 저장된 객체

            var $target = $contents.eq(idx),
            // 각각의 섹션의 인덱스값을 통해 섹션을 선택(ex: 0번째)
                i = $target.index(),
                // 해당 섹션의 인덱스값을 저장(ex: 0)
                targetTop = $target.offset().top;
                // 해당 섹션의 offest 높이값(ex: 0번 섹션의 offset 높이값)

            if( targetTop <= sclTop ) {
                // 해당 섹션의 offset 높이값이 스크롤위치값보다 작으면(스크롤이 섹션의 위쪽을 통과할 때)

                $menu.removeClass("on");    // 모든 메뉴에 on 클래스 삭제
                $menu.eq(idx).addClass("on");   // 해당 idx 값과 일치하는 인덱스 요소 메뉴에 on 클래스 붙임

            }

            if( !(200 <= sclTop) ) {
                // sclTop(스크롤 높이값)이 200보다 크거나 같지 않으면(맨 위에 갔을 때)

                $menu.removeClass("on");
                // 메뉴에 불 끄기
            }


        } );


    });




    // top버튼 부드럽게 이동
    var $btnTop = $(".btn_top");

    $btnTop.on("click", "a", function(){
    // Top 버튼의 a태그를 클릭했을 때

        $doc.animate({
        // 도큐먼트의 스크롤 높이값을 0으로 만든다(1초 동안)

            scrollTop : 0
            
        },1000);

    });





});