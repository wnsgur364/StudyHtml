$(function(){

    // 세팅
    // 변수 선언
    var wrapper = $("#wrap");
    var title = wrapper.find("a");      // 제목들
    var content = wrapper.find("p");    // 내용들

    content.hide();
    // #wrap p (내용들)을 가려놓는다.
    content.first().show();
    // #wrap p (내용들) 중 첫번째 요소를 보여주는 상태로 세팅


    // 클릭이벤트
    title.click(function(e){
    // 제목을 클릭하면

        e.preventDefault(); // a태그 기본 클릭 이벤트 막기

        $(this).next().slideToggle();
        // 클릭한 앵커태그의 다음 요소(내용)을 슬라이드토글한다.
        // 펼쳐져있으면 접기/접혀있으면 펼치기

        title.not(this).next().slideUp();
        // 클릭한 요소를 제외한 나머지 요소의 다음 요소(내용)을 접는다.(선택사항)

    });


});