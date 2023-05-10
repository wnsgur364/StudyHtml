$(function(){


    

    var floatPosition = parseInt( $("#floatBanner").css("top") );
    // 기존에 저장되어있던 플로팅배너의 위치(top) 값을 가져와 저장(현재 100px)
    // 숫자만 가져오기 위해 정수로 변환(parseInt)

    

    // top버튼 스크롤이벤트(어느정도 내려갔을 때만 보여줌)
    $(window).scroll(function(){
        // 브라우저에서 스크롤이벤트가 발생했을 때 

        if( $(this).scrollTop() > 300 ) {
            // this : 스크롤이벤트가 일어난 window객체
            // .scrollTop() : 브라우저의 수직스크롤값을 반환해주는 메서드
            // 스크롤값이 300보다 크면 top버튼을 나타나게 한다.


            // $(".topBtn").css("display","flex");
            $(".topBtn").fadeIn();

        } else {
            $(".topBtn").fadeOut();
        }

        // console.log( $(this).scrollTop() );




        var scrollTop = $(window).scrollTop();
        // window의 스크롤 위치값을 가져와서 저장

        var newPosition = scrollTop + floatPosition;
        // window의 스크롤 위치값 + 플로팅배너의 초기 설정 위치값

        // 스크롤 이벤트가 발생할 때마다 플로팅배너의 top값을 업데이트 해주면서 css에서 position을 fixed로 한 것과 같이 위치를 잡아준다.
        // $("#floatBanner").css({
        //     top : newPosition
        // });

        $("#floatBanner").stop().animate({
            top : newPosition
        }, 200);
        // 실제 스크롤값이 계속 누적되면서 올라가서 애니메이션이 실행될 때 큐가 중복되어 느리게 적용됨.
        // 마지막 스크롤 위치의 애니메이션만 실행이 될 수 있도록 stop 메서드를 추가해 중복된 큐를 멈춰준다.


    });



    // top버튼 클릭시 부드럽게 이동
    $(".topBtn").click(function(){

        $("html, body").animate({

            scrollTop : 0
            // html, body(페이지)의 scrollTop값을 0으로 지정한다.(애니메이션 시킨다.)

        }, 500);
        // 500ms의 시간 동안 스크롤이 이동되면서 부드럽게 이동하는 것처럼 보이게 한다.

        return false;

    });

    // 메뉴 클릭시 부드럽게 이동
    $(".scroll").click(function(){

        $("html, body").animate({

            scrollTop : $(this.hash).offset().top
            // scrollTop : 브라우저의 수직 스크롤 이동 높이값을 반환
            // 클릭한 요소에서 hash값(#이 붙은 값)을 찾는다.(연결된 섹션 요소를 찾음)
            // 선택자.offset().top
            // 선택한 요소가 문서(document) 기준으로 수직(top)/수평(left) 위치가 얼만큼 떨어져있는지를 반환

        }, 500);

        return false;

    });


    




});