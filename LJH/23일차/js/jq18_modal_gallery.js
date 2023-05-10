$(function(){

    $("#wrap ul li a").click(function(e){
        // 작은 이미지(앵커태그)를 클릭하면

        e.preventDefault();
        // 기본 클릭 이벤트 해제

        $(".modal_bg").fadeIn();
        // 배경레이어를 나타낸다.

        $(".modal_box").fadeIn()
        // 모달 박스를 나타내고
                       .html( "<img src='" + $(this).attr("href") + "'>" )
                    //         <img src='클릭한 앵커태그의 주소(큰 이미지)'>
                    //    모달박스 안에 큰이미지를 삽입하고
                       .append( "<button class='close_btn'><i class='fa-solid fa-xmark'></i></button>" );
                    //    버튼을 뒤에 삽입한다.

        $(".close_btn, .modal_bg").click(function(){
            // 닫기버튼, 배경을 클릭하면

            $(".modal_bg").fadeOut();
            // 배경, 박스를 가린다.
            
        });


    });



});