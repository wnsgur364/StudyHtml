$(function(){


    var carWidth = $(".wrap").width();  // 보여질 박스의 너비
    var carLength = $(".column").length;    // 아이템의 개수

    $(".inner").css({
        // .column들을 감싸는 박스를 늘려주어 요소를 가로로 배치

        width : carWidth * carLength,
        // 보여질 박스의 너비 * 아이템 개수

        marginLeft : - carWidth
        // 마지막번째 요소가 끼어들어 순서가 밀리기 때문에 한 칸 만큼 앞으로 당겨줌


    });

    function prevReady() {
        $(".column").last().prependTo(".inner");
        // 첫번째 칼럼에서 이전 버튼을 누를 경우에도 이어질 수 있도록 마지막 칼럼을 첫번째에 끼워넣어 준비해둔다.
    }

    prevReady();
    // 처음에 페이지에 접근했을 때 1번칼럼이 보여지는 상태에서도 이전버튼을 클릭했을 때 이어지게끔 준비해둠



    function prevAni() {
        // 이전 버튼 눌렀을 때 애니메이션

        $(".btn").hide();
        // 버튼을 누르면 애니메이션 되는 동안(이미지가 움직이는 동안) 버튼을 가려줌

        $(".inner").animate({

            marginLeft : parseInt( $(".inner").css("margin-left") ) + carWidth

        }, function(){

            updateSetting();
            // 원위치로 되돌려줌
            prevReady();
            // 마지막요소를 앞으로 대기

        });


    }

    function nextAni() {
        // 다음 버튼 눌렀을 때 애니메이션

        $(".btn").hide();
        // 버튼을 누르면 애니메이션 되는 동안(이미지가 움직이는 동안) 버튼을 가려줌

        $(".inner").animate({

            marginLeft : parseInt( $(".inner").css("margin-left") ) - carWidth
            // margin-left 값을 한칸 너비만큼 -로 입력해 왼쪽으로 당겨준다

        }, function(){

            updateSetting();
            // 애니메이션 끝난 뒤 업데이트

            $(".column").first().appendTo(".inner");
            // 첫번째 칼럼을 뒤로 끼워넣는다.

        });


    }


    function updateSetting() {
        // 콜백함수. 애니메이션이 끝난 뒤 바로 실행해줄 함수

        $(".btn").show();

        $(".inner").css("margin-left", "-860px");
        // 처음 원위치로 되돌리기 위해 한칸 너비만큼 당겨줌

    }

    $(".prev").click(prevAni);
    $(".next").click(nextAni);



});