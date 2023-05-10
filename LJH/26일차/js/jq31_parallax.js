$(function(){

    var wd = $(window);
    // 브라우저

    $("div[data-type=background]").each(function(){

        var bg = $(this);
        // 배경 지정된 div

        wd.scroll(function(){
            // 윈도우에 스크롤 이벤트가 발생했을 때

            var yPos = - ( wd.scrollTop() / bg.data("speed") );
            // y축의 포지션값을 구한다.
            // 윈도우의 스크롤값 / bg에 저장되어있는 data-speed값
            // 움직이는 속도를 조절

            var coords = "50%" + yPos + "px"
            // X축 위치는 50%로 하고, Y축 위치는 스크롤과 속도 조절값으로 지정
            console.log(coords);

            bg.css({
                backgroundPosition : coords
                // 배경박스의 backgroundPosition에 스크롤이벤트가 일어날때마다 Y축의 스크롤 값을 변경해서 지정. 자식요소와 스크롤 속도를 다르게 해서 시간차가 나는 것처럼 보이게 한다.
            });



        });

    });


});