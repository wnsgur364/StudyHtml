$(function(){

    // 변수 선언
    var container = 800;    // 컨테이너 박스의 너비
    var display = 5;        // 아이템이 보여질 개수
    var itemWidth = container / display;    // 각 아이템(이미지)의 너비값을 전체너비값에서 보여지는 개수를 나누어 item에 저장(800/5 = 160)
    var count = $(".item").length;  // 총 이미지의 개수
    var slideBox = itemWidth * count;   // 전체 모든 이미지들을 감싸주는 박스의 너비값(.slider)
    // 이 박스가 움직임을 담당해주는 박스가 될 것임
    // 이미지의 너비 * 이미지의 개수



    // 세팅
    $(".container").css("width", container);
    $(".slider").css("width", slideBox);
    $(".item").css("width", itemWidth);


    // 이전, 다음 버튼을 판단하는 함수 및 클릭 이벤트
    function moveSlider() {

        var btnCheck = $(this).attr("data-btn");
        // data-btn의 값에 따라 prev(0), next(1)을 결정, btnCheck변수에 저장
        // console.log(btnCheck);

        if(btnCheck == 0) { //이전 버튼을 클릭하면

            $(".slider").animate({
                left : "+=" + itemWidth
                // left값을 아이템의 너비만큼 계속 누적시킨다.
            }, 300, slideEnd);
            
        } else {

            $(".slider").animate({
                left : "-=" + itemWidth
            }, 300, slideEnd);
        }
    }

    $(".next, .prev").click(moveSlider);



    // 슬라이드 끝에 도달했을 때 실행 이벤트
    function slideEnd() {

        var nowLeft = $(".slider").position().left;
        // 선택자.position() : 요소의 포지션값을 반환 메서드(부모위치를 기준으로 반환)
        // 선택자.position().left;
        // 선택자.position().top;
        // 선택자.offset() : 요소의 절대좌표 반환 메서드(페이지 기준)
        // 선택자.offset().left;

        console.log(nowLeft);

        var end = - (slideBox - container);
        // 안쪽에 있는 전체 이미지를 감싸고 있는 너비값(.slider)에서 보여지는 너비값(.container)를 빼고 -를 붙임
        // 현재 end는 - (1600 - 800) = -800


        if(nowLeft <= end) {
            // 현재 슬라이더의 위치값이 end(-800)보다 작거나 같은 경우(마지막 슬라이드에 도달했을 때)

            $(".slider").animate({left: end});
            // 슬라이더의 left값을 다시 end로 지정
            // 마지막 슬라이드에 왔을 때 next버튼을 또 누르면 다시 left값을 -800으로 고정시키면서 값을 재지정해 튀는듯한 효과를 준다.

        } else if(nowLeft > 0) {
            // 현재 슬라이더의 위치값이 0보다 큰 경우(첫번째 슬라이드에 도달했을 때) 이전 버튼을 한번 더 누르면 값이 0보다 커짐. left값을 다시 0으로 재지정해서 처음 슬라이드의 위치로 돌아온다.            

            $(".slider").animate({left: 0});
        }
    }


});