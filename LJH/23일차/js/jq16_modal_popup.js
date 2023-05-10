$(function(){

    $("#popup_btn").click(function(){

        // $("#modal_box").show();
        // $("#modal_box").toggle();
        // $("#modal_box").addClass("modal_active");
        // $("#modal_box").toggleClass("modal_active");
        // 만약 한 개 버튼으로 클래스 추가/제거를 적용하는 경우 .toggleClass("클래스명") 으로 작업할 수 있다.
        $("#modal_box").fadeIn();



    });

    $("#cancel_btn").click(function(){

        // $("#modal_box").hide();
        // $("#modal_box").removeClass("modal_active");
        $("#modal_box").fadeOut();

    });


});