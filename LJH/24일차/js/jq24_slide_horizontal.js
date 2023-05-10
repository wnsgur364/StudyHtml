$(function(){


    // var imgWidth = $("#wrap ul li").width();
    // // 이미지 한장의 너비
    // // 요소의 크기를 구하는 제이쿼리 메서드
    // // .width() : 내부 너비(실제 크기)
    // // .innerWidth() : 내부 너비 + padding
    // // .outerWidth() : 내부 너비 + padding + border
    // // .outerWidth(true) : 내부 너비 + padding + border + margin
    // // height도 동일

    // var imgHeight = $("#wrap ul li").height();


    // var imgLength = $("#wrap ul li").length;
    // // 이미지의 개수
    // // .length : 요소의 개수 속성(괄호 붙이지 말것!!)
    
    // // console.log(imgWidth);   // 600
    // // console.log(imgLength);  // 3

    // // $("#wrap").css("width", "1800px");
    // // $("#wrap").css("width", imgWidth * imgLength + "px");
    // // 전체를 감싸는 #wrap 요소의 너비를 이미지너비 * 개수로 늘려줌(가로로 정렬)

    // $("#wrap ul li").last().prependTo("#wrap ul");
    // // 마지막 요소를 앞쪽에 끼워넣어줌(이전 요소를 보여줄 때를 대비해 준비)
    // // 자식요소.prependTo("부모요소") 자식요소를 부모요소의 앞에 끼워넣는다

    // // $("#wrap").css("margin-left", "-600px");
    // // $("#wrap").css("margin-left", - imgWidth + "px");
    // $("#wrap").css("margin-top", - imgHeight + "px");
    // // 순서가 밀리기 때문에 첫번째 장을 보여주는 상태로 세팅하기 위해 전체적으로 너비 한개 만큼 당겨줌



    // // 자동 슬라이드
    // setInterval(function(){
    //     // setInterval(실행함수, 반복 간격 밀리초);


    //     $("#wrap").animate({
    //         // #wrap을 animate 시킨다.


    //         // marginLeft : parseInt( $("#wrap").css("margin-left") ) - 600 + "px"
    //         marginTop : parseInt( $("#wrap").css("margin-top") ) - imgHeight + "px"
    //         // #wrap의 marginLeft값을 변경
    //         // parseInt(값) : 값을 정수로 변환해주는 JS 함수(값이 문자로 시작될 경우를 제외하고 숫자로 변경, 소수점 제거)
    //         // Number("문자형 숫자") : 숫자로 형변환(소수점이 있을 경우 그대로 변환)
    //         // $("#wrap").css("margin-left") 값이 "-600px" 이기 때문에 뒷쪽에 있는 -600px과 계산이 안되기 때문에 정수로 변환해서 계산을 해줌(-600 - 600 + "px")


    //     }, 200, "swing", function(){

    //         // $("#wrap").css("margin-left","-600px");
    //         $("#wrap").css("margin-top", - imgHeight + "px");
    //         // 이미지 박스가 계속 앞으로 당겨지는 것을 방지하기 위해 제자리로 되돌려주는 역할(원상복구)

    //         $("#wrap ul li").first().appendTo("#wrap ul");
    //         // 첫번째 요소를 뒤로 붙여줘서 연속적으로 슬라이드의 순서가 연결되게 해주는 역할

    //     });


    //     // .animate({변경할 CSS 속성}, duration, ease, callback함수);
    //     // .animate({변경할 CSS 속성}, 실행되는 시간, 가속도, 애니메이션 종료 후 바로 실행될 함수);
    //     // 실행되는 시간 : 밀리초
    //     // 가속도(생략가능) : 기본적으로 "swing", "linear"
    //     // 콜백함수(생략가능) : 작업이 끝나고 난 뒤 바로 실행할 함수



    //     // console.log( $("#wrap").css("margin-left") );
    //     // console.log( parseInt( $("#wrap").css("margin-left") ) );



    // }, 2000);







    // 이전 버튼 클릭 이벤트
    // $("#prev").click(function(){



    //     $("#wrap").animate({
    //         marginLeft : parseInt( $("#wrap").css("margin-left") ) + imgWidth + "px"
    //         // 왼쪽에서 한칸 만큼의 너비를 밀어줌
    
    //     }, 200, "swing", function(){
    //         $("#wrap").css("margin-left", - imgWidth + "px");
    //         // 애니메이션 끝나고 다시 제자리로 원상복구
    
    //         $("#wrap ul li").last().prependTo("#wrap ul");
    //         // 순서 계속 이어지게 마지막번째꺼 앞으로 붙여주기
    //     });

        


    // });


    // 다음 버튼 클릭 이벤트
    // $("#next").click(function(){

        
    //     $("#wrap").animate({
    //         marginLeft : parseInt( $("#wrap").css("margin-left") ) - imgWidth + "px"
    //         // 왼쪽으로 한칸 만큼의 너비를 당겨줌
    
    //     }, 200, "swing", function(){
    //         $("#wrap").css("margin-left", - imgWidth + "px");
    //         // 애니메이션 끝나고 다시 제자리로 원상복구
    
    //         $("#wrap ul li").first().appendTo("#wrap ul");
    //         // 순서 계속 이어지게 첫번째꺼 뒤로 붙여주기
    //     });


    // });







    // 슬라이드 2번 방식(3번까지 보여지면 다시 1번 위치로 재지정)

    // var slider = $("#wrap");                // 전체를 감싸는 박스(움직임 담당)
    // var slideImg = slider.find("li");       // 슬라이드 이미지들
    // var slideLength = slideImg.length;      // 이미지들의 개수
    // var slideWidth = slideImg.width();      // 이미지의 너비

    // // 슬라이드 이미지들을 감싸는 박스를 이미지 개수 * 100 % 한 값으로 늘려준다(가로로 배치)
    // slider.css({
    //     width: 100 * slideLength + "%"  // 현재는 300%
    // });

    // var i = 0;  // 마진값을 늘려주기 위한 카운터 변수 0, 1, 2, 0, 1, 2.....

    // function autoSlide() {

    //     if(i < slideLength - 1) {
    //         // 첫번째 이미지는 이미 보여지고있는 상태였기 때문에
    //         // 움직이는 횟수에서 1을 뺀다.
    //         // 1회전 i = 0 < 2(3-1) true
    //         // 2회전 i = 1 < 2(3-1) true
    //         // 3회전 i = 2 < 2(3-1) false
    //         i++;
    //     } else {
    //         i = 0;
    //         // 다시 첫번째 카운터로 되돌려주는 역할(1번 이미지)
    //     }

    //     // 애니메이션 해주는 소스
    //     slider.animate({
    //         marginLeft: - slideWidth * i
    //         //          -     600    * 0 = 0
    //         //          -     600    * 1 = -600
    //         //          -     600    * 2 = -1200
    //         //          -     600    * 0 = 0
    //         // ...


    //     }, 500);

    // }

    // // setInterval(autoSlide, 2000);
    // // 한개의 함수만 반복한다면 함수명만 괄호 없이 작성

    // // 실행함수를 바로 작성한다면 그 안에서 함수를 다시 호출할 때 함수명(); 괄호를 넣어야함!
    // setInterval(function(){
    //     autoSlide();
    // }, 2000);








    // 페이드 인 아웃 슬라이드

    var slider = $("#wrap");                // 전체를 감싸는 박스(움직임 담당)
    var slideImg = slider.find("li");       // 슬라이드 이미지들
    var slideLength = slideImg.length;      // 이미지들의 개수

    var i = 0;

    // 모든 슬라이드 이미지들을 가려놓고
    slideImg.hide();
    // 첫번째 슬라이드만 보여지게 세팅
    slideImg.first().show();


    function autoSlide() {

        // i값을 0, 1, 2, 0, 1, 2....
        if(i < slideLength - 1) {
            i++;
        } else {
            i = 0;
        }


        slideImg.eq(i).siblings().fadeOut();
        slideImg.eq(i).fadeIn();
        // 선택자.eq(인덱스번호) : 인덱스번호에 해당하는 요소를 선택하는 메서드
        // 선택자.siblings() : 선택자를 제외한 나머지 형제 요소들
        // 1번슬라이드 = 인덱스번호 0번

        // 1회전 : 0번슬라이드를 제외한 나머지 형제들(1, 2) fadeOut / 0번은 fadeIn
        // 2회전 : 1번슬라이드를 제외한 나머지 형제들(0, 2) fadeOut / 1번은 fadeIn
        // 3회전 : 2번슬라이드를 제외한 나머지 형제들(0, 1) fadeOut / 2번은 fadeIn

        

    }

    
    setInterval(function(){
        autoSlide();
    }, 2000);





    




});