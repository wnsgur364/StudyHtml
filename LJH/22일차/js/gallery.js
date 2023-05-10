$(function(){


    $("#nav a").on("mouseover focus click", function(event){

        event.preventDefault();
        // e.preventDefault();      function(e) {}
        // 현재 걸고자하는 이벤트 외에 브라우저행동(이미 약속되어있는 기본 이벤트)를 막기 위해 사용한다. 함수의 매개변수에 event 또는 e를 작성하고 걸어주면 된다. 위치 상관없음
        
        var imgUrl = $(this).attr("href");
        // console.log(imgUrl);
        // imgUrl 변수에 이벤트가 일어난 요소의 href 값을 가져와 저장(클릭할때마다 or 마우스 올릴때마다)

        $("#view_area img").attr("src", imgUrl);
        // #view_area img태그에 src 속성의 값에 href 속성값(큰이미지 주소)을 삽입



        // return false;
        // a태그 클릭시 href 속성값으로 이동되는 것을 막아준다.
        // a태그에는 기본적으로 href 속성값으로 이동하는 이벤트가 내장되어있는데, 현재는 href속성값으로 이동하지 않고 단순히 click에 대한 처리를 할 수 있도록 한다.
        // return문 : 함수에서 결괏값을 반환하고 강제로 종료
        // false를 반환하면서 클릭이벤트를 먼저 실행하고 a태그의 내장이벤트(이동) 을 막아준다.
        // 주의!!! return문 사용 시 이후의 코드는 종료되기 대문에 꼭 마지막에 넣어줘야 함!!

    });



});