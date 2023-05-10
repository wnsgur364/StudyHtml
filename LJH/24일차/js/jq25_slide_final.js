$(function(){

    var container = $(".slider_wrap");  // 슬라이드가 표시되는 영역
    var slideGroup = container.find(".slider"); // 실제 움직여주는 역할을 하는 박스
    var slides = slideGroup.find("li"); // 슬라이드 이미지들
    var nav = container.find(".btn");   // 이전, 다음 버튼들
    var indicator = container.find(".indicator ul");    // 인디케이터

    var slideCount = slides.length; // 슬라이드 개수
    var currentIdx = 0; // 현재 보여지는 슬라이드의 인덱스 번호를 담을 변수
    var duration = 500; // 슬라이드 전환 시간(장이 넘어가는 속도)
    var easing = "swing";   // 슬라이드 가속도
    var interval = 2000;    // 슬라이드 자동 실행 간격
    var timer;  // 아래쪽에서 interval을 걸어줄 변수를 선언


    // 슬라이드 위치 설정 및 인디케이터 생성
    for(var i = 0; i < slideCount; i++) {

        slides.eq(i).css({
            left: 100 * i + "%"
        });
        // 각 슬라이드의 위치 설정
        // (left 값에 0, 100%, 200%... 를 넣어서 일렬로 배치)

        // 도트 인디케이터 사용시
        // indicator.append("<li></li>");
        // 인디케이터를 슬라이드 개수만큼 for문이 반복되면서 생성해준다.


        // 썸네일 인디케이터 사용시
        var slideImgSrc = slides.eq(i).find("img").attr("src");
        // 각 슬라이드 이미지 주소를 가져와 slideImgSrc 변수에 저장

        indicator.append("<li><img src='" + slideImgSrc + "'></li>");
        //                <li><img src='     이미지 주소   '></li>
        // 슬라이드 개수만큼 for문이 반복되면서 인디케이터를 추가하고 그 안에 썸네일 이미지 추가



    }




    // 슬라이드 실행 함수
    function goToSlide(index) {

        slideGroup.animate({
            left: - 100 * index + "%"
        }, duration, easing);
        // 전체 슬라이드를 움직이는 코드
        // console.log(currentIdx);

        currentIdx = index;
        // 현재 슬라이드의 인덱스값을 저장해서 넘겨주는 역할
        // 함수가 실행될 때마다 인덱스번호가 업데이트

        // console.log(currentIdx);
        // console.log(index);


        // 캡션
        var slideImg = slides.find("img");
        var imgTitle = slideImg.eq(currentIdx).attr("title");
        // console.log(slideImg);
        // console.log(imgTitle);
        var caption = container.find(".caption");

        // 이미지 태그에 title속성이 있는 경우 그 속성값을 가져와 caption 박스에 text로 입력
        if( imgTitle == undefined ) {
            caption.hide(); // title 속성이 없으면 caption박스도 가림
        } else {
            caption.show().text(imgTitle);
        }



        update();
        // 슬라이드 실행함수(goToSlide())가 실행될 때마다 함께 실행되면서 내비게이션 상태 업데이트


    }

    goToSlide(currentIdx);
    // 함수 실행시 바로 값을 전달하면서(매개변수에)


    // 내비게이션 버튼 클릭 이벤트
    nav.click(function(){
    // .btn을 클릭하면 if-else문을 통해서 그 버튼이 이전/다음 여부를 확인한 다음 그것에 맞는 코드를 실행

        if( $(this).hasClass("prev") ) {
            // 클릭한 요소가 .prev을 갖고있는지 확인 : prev버튼을 클릭했을 때
            // 선택자.hasClass("클래스명") : 선택자에 클래스가 있는지 여부를 확인 true/false

            goToSlide(currentIdx - 1);
            // goToSlide함수를 실행(currentIdx에서 1을 뺀 값을 바로 함수의 매개변수인 index로 전달하면서 인덱스번호를 변경한다.)

        } else {

            goToSlide(currentIdx + 1);

        }

    });



    // 슬라이더의 상태(인덱스 번호)에 따라 내비게이션, 인디케이터를 업데이트 하는 함수
    function update() {

        var navPrev = nav.filter(".prev");
        // .btn 클래스를 가지고 있는 것 중 .prev 클래스를 가지고 있는 것
        // 선택자.filter("선택자"); 선택한 요소를 필터링 하는 선택 메서드
        var navNext = nav.filter(".next");

        
        if( currentIdx == 0 ) {             // 현재 슬라이드 번호가 0이면(첫번째 슬라이드면)
            navPrev.addClass("disabled");   // disabled 클래스 추가(이전 버튼 없앰)
        } else {                                // 첫번째가 아니면
            navPrev.removeClass("disabled");    // disabled 클래스 제거(이전 버튼 살리기)
        }

        if( currentIdx == slideCount - 1 ) {
            // 인덱스 번호 4번 == 슬라이드의 개수(5개) - 1 같아지면
            // 마지막 슬라이드에 도달하면
            navNext.addClass("disabled");
        } else {
            navNext.removeClass("disabled");
        }


        // 현재 슬라이드의 인덱스에 맞는 인디케이터에 active 추가(불켜기)
        indicator.find("li")
        // 인디케이터 요소 선택
                 .removeClass("active")
                //  혹시 먼저 active가 붙어있을 수도 있으니 전체적으로 다 클래스 삭제해줌
                 .eq(currentIdx).addClass("active");
                //  해당 인덱스 번호에 맞는 요소만 선택해서 active 붙여줌


    }




    // 인디케이터 클릭 이벤트
    indicator.children().click(function(){
        // 인디케이터 버튼을 클릭하면

        if( !$(this).hasClass("active") ) {
            // 클릭한 해당 요소가 active클래스를 가지고있지 '않은' 경우만 실행
            // active상태가 아닌 인디케이터를 클릭했을 때

            goToSlide( $(this).index() );
            // 선택자.index() : 선택자의 인덱스 번호를 반환하는 메서드
            // 클릭한 요소의 인덱스 번호를 가져와 goToSlide함수의 매개변수로 전달하며 같은 인덱스번호로 이동하도록 실행한다.

        }

    });



    // 오토플레이 실행 함수
    function autoPlay() {

        timer = setInterval(function(){

            var nextIndex = ( currentIdx + 1 ) % slideCount;
            // nextIndex변수에 현재 인덱스번호에 1을 더한 값을 슬라이드 개수로 나는 나머지값을 이용해 아래 goToSlide함수에 적용한다.
            //                  0        + 1   %   5 = 1
            //                  1        + 1   %   5 = 2
            //                  2        + 1   %   5 = 3
            //                  3        + 1   %   5 = 4
            //                  4        + 1   %   5 = 0

            goToSlide(nextIndex);

        }, interval)

    }

    // autoPlay();



    // 오토플레이 해제 함수
    function stopAutoPlay() {
        clearInterval(timer);
        // 반복실행을 만들어줄 때는 setInterval(반복실행될함수,밀리초간격)
        // 반복실행을 멈출 때는     clearInterval(인터벌되고있는함수)
    }


    // 재생, 일시정지 버튼 이벤트
    $(".play").click(function(){
        if( overlapClick() ) return;    // 플레이 버튼을 누를 때마다 if문을 이용해서 값을 체크해서 실행여부를 따짐
        autoPlay();
        console.log(overlapClickFlag);
    });

    $(".pause").click(function(){
        stopAutoPlay();                 // 일시정지 버튼을 클릭하면 먼저 스탑시킨 다음
        overlapClickFlag = false;       // 플래그 변수의 값을 다시 false로 저장시켜 이후 플레이 버튼을 클릭했을 때 값을 초기화 시킨다.
        console.log(overlapClickFlag);
    });




    // 플레이 버튼 중복 클릭 방지
    // 플레이 버튼을 계속해서 클릭하면 setInterval이 계속해서 중첩으로 실행되서 속도가 빨라진다.
    // 이를 방지하기 위해서 플래그 변수를 선언하고 불리언타입으로 값을 반환할 수 있게 설정해둔다.

    var overlapClickFlag = false;
    // 불리언타입의 플래그 변수(무언가를 기억하거나 다른 프로그램에게 약속된 신호를 남기기 위한 용도의 변수)

    function overlapClick() {

        if(overlapClickFlag) {  // 플래그변수가 true이면

            return overlapClickFlag;    //플래그변수를 return시킨다.

        } else {                // 플래그변수가 false이면

            overlapClickFlag = true;    // 플래그변수의 값은 true로 저장한 다음
            return false;               // false를 반환하고 종료

        }

    }
    // overlapClick()함수를 호출하면 최초 1회는 false를 반환, 2회부터는 계속 true를 반환
    // false를 한 번 return하고 나서는 다시 false를 반환하지 않고 계속 true만 반환








});