$(function(){

    //  첫번째 이미지가 보여지는 상태로 세팅
    $("#wrap ul li").hide();
    $("#wrap ul li").first().show();



    // setInterval(함수, 반복 실행 간격 밀리초);
    setInterval(function(){

        $("#wrap ul").append( $("#wrap ul li").first() );
        // #wrap ul 내부에 첫번째 li을 가져가 맨 뒤에 삽입한다.(밀어내면서 순서가 바뀌게 된다.)

        $("#wrap ul li").last().hide();
        // #wrap ul li 중 마지막 요소를 가려줌

        $("#wrap ul li").first().fadeIn();
        // #wrap ul li 중 첫번째 요소를 서서히 나타낸다.
        // 첫번째 요소가 계속해서 바뀌기 때문에 보여질 때 순서가 바뀌면서 보여지는 원리

    }, 2000);

});