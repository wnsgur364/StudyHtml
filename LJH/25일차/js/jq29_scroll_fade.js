$(function(){

    // 아래로 스크롤시 헤더 가려짐
    var lastScrollTop = 0;
    var delta = 5;  // 동작의 구현이 시작되는 위치 초기값 설정.
    var headerHeight = $("header").outerHeight();   // 헤더의 높이
    var didScroll;  // 추후 사용을 위한 변수 설정

    $(window).scroll(function(){

        didScroll = true;
        // 스크롤이벤트가 발생하면 didScroll 변수에 true 저장



        // 스크롤시 요소가 페이드인 되면서 나타남
        $(".fadeInLeft").each(function(){
            // .each() : 배열에 저장된 문서 객체만큼 인덱스에 하나씩 차례로 접근해서 메서드가 반복실행된다. 자바스크립트에서의 for문과 비슷하다.

            var bottomOfElement = $(this).offset().top + $(this).outerHeight();
            // 현재 요소의 offset 높이값(페이지를 기준으로 위에서 얼마나 떨어져있는지)

            var bottomOfWindow = $(window).scrollTop() + $(window).height();
            // window객체의 수직 스크롤 이동 높이 + window객체의 높이

            if( bottomOfWindow > bottomOfElement ) {
                // 높이를 기준으로 비교해 엘리먼트의 값이 더 작을 경우 요소를 나타낸다.(창의 하단이 요소의 하단을 지나갈 때)

                $(this).animate({
                    opacity: 1,
                    marginLeft: 0
                }, 500);

            }

            // 스크롤이 너무 긴 페이지의 경우 실행 속도에 영향을 줄 수 있음. 특정한 엘리먼트만 적용하거나 페이지가 나뉜 곳에서 사용하는 것이 좋다.





        });




        
        

    });

    function hasScrolled() {

        var scrollTop = $(this).scrollTop();
        // 현재 스크롤의 위치 저장

        if( Math.abs( lastScrollTop - scrollTop ) <= delta ) return;
        // 설정한 delta값보다 더 스크롤 되었는지 확인한다.
        // Math.abs(값) : 값을 절댓값으로 변환. 자바스크립트의 수학객체

        if( scrollTop > lastScrollTop && scrollTop > headerHeight ) {
        // 스크롤위치 >     0         && 스크롤위치> 헤더높이
        //    0     >     0         &&     0   >   50
        // 스크롤을 한번이라도 내리면 true

            // 스크롤을 다운했을 때
            $("header").addClass("header_up")

        } else {

            // 스크롤을 올렸을 때
            $("header").removeClass("header_up")

        }

        lastScrollTop = scrollTop;
        // lastScrollTop에 현재 스크롤위치를 지정해서 그 위치를 기준으로 비교를 한다(올렸는지 내렸는지)


        console.log("scrollTop : " + scrollTop);
        console.log("lastScrollTop : " + lastScrollTop);
        console.log("headerHeight : " + headerHeight);


    }


    // 300ms마다 스크롤 위치를 체크
    setInterval(function(){
        
        // 스크롤 이벤트가 발생하면 didScroll에 true가 저장되면서 if문이 실행된다.
        // 스크롤 이벤트가 발생될 때마다 실행
        if(didScroll) {

            hasScrolled();
            //스크롤을 아래로 내렸는지 위로 올렸는지 판단해서 실행해주는 함수
            didScroll = false;
            // true인 상태에서 다시 체크하기 위해 false로 되돌려줌
        }

    }, 300);






    




});