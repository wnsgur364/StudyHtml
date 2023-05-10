$(function(){

    // 인풋태그 클릭시 레이블 이동
    // 레이블태그를 placeholder같이 사용하고 싶을 때
    $(".form_group input").focus(function(){
        // .focus() : 포커스가 잡혔을 때 이벤트 메서드
        // 클릭했을 때도 포커스가 잡히기 때문에 포함된다.
        $(this).siblings("label").addClass("active");
        // 클릭한 인풋태그의 형제요소 중 label태그인것
    });

    // .blur() : 포커스가 벗어났을 때
    // $(".form_group input").blur(function(){
    //     $(this).siblings("label").removeClass("active");
    // });
    // 이 경우 인풋태그에 내용을 입력하더라도 레이블이 되돌아와서 겹쳐진다.

    $(".form_group input").blur(function(){
        if( $(this).val() == "" ) {
            // .val() : 인풋태그 안에 입력한 값을 반환하거나 변경해주는 메서드
            // input태그에 아무런 값이 없으면(빈 문자열)

            $(this).siblings("label").removeClass("active");
        }
    });


    // 모두 동의하기 체크박스
    $("#all_agree").click(function(){
        // 모두 동의하기 체크박스에 클릭을 하면

        if(  $("#all_agree").prop("checked")  ) {
            // #all_agree에 체크가 되어있으면

            $(".agree_check:checkbox").prop("checked", true);
            // .agree_check클래스의 :checkbox에 checked 상태를 true로 변경(체크한다)

        } else {

            $(".agree_check:checkbox").prop("checked", false);
            // .agree_check클래스의 :checkbox에 checked 상태를 false로 변경(체크를 푼다)

        }
        // .prop() : property - 불리언값으로 반환
        // .attr()와 비슷하나, .prop()은 form 요소의 disabled, selected, checked와 같은 속성값을 가져오거나 변경할 때 주로 사용.
        // .attr()은 checked를 반환, .prop()은 true/false로 반환
        // :checkbox 제이쿼리의 가상선택자. css 속성 선택자 [type=checkbox]와 동일

    });



    // 인풋태그(폼 요소) 유효성검사 : 인풋태그 안에 유효한 값이 입력되었는지 여부를 검사
    // regular expression(regexp) : 정규표현식. 각 언어마다 표현식은 약간의 차이가 있다. 특정한 규칙을 가진 문자열의 집합을 표현하는데 사용하는 형식 언어. 문자열의 검색과 치환 등을 위해 지원
    // 공백 허용 안됨
    // /정규식/
    // ^ : 문자열의 처음
    // $ : 문자열의 마지막

    var reg_id = /^[a-zA-Z0-9_-]{3,10}$/;
    // 아이디 유효성 검사하는 정규식 : 소문자 a-z, 대문자A-Z, 숫자0-9, 언더스코어(_), 하이픈(-)이 올 수 있고 최소 3자, 최대 10자 이하

    var reg_pw = /^[a-z0-9_-]{6,18}$/;
    // 패스워드 유효성 검사 정규식 : 소문자 a-z, 숫자0-9, 언더스코어(_), 하이픈(-)이 올 수 있고 최소 6자, 최대 18자 이하

    var reg_name = /^[가-힣]{2,5}$/;
    // 이름 유효성 검사 정규식 : 한글인지 확인, 2자~5자

    var reg_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i;
    // 이메일 유효성 검사 정규식 : 시작을 소문자, 대문자, 숫자, ., _, -으로 할 수 있고 뒤에 @를 붙이고 @ 뒤에 소문자, 대문자, 숫자, ., _, -가 올 수 있고, . 이후에 소문자, 대문자가 2자 이상 4자 이하로 온다.
    // i는 대소문자 구분안함
    // 점(.)앞에 역슬래시는 역슬래시 뒤에 오는 문자를 문자 그대로 해석하라는 뜻(이스케이프 처리)

    var reg_phone = /^[0-9]{9,11}$/;
    // 연락처 유효성 검사

    $("form").submit(function(e){
        // .submit() : form태그에 submit이벤트가 일어나면(확인 버튼을 누르면)
        // 폼태그 내부의 값을 모두 입력한 후 엔터를 치면 기본적으로 submit이벤트가 실행된다.

        e.preventDefault;
        // submit 이벤트의 기본 내장 이벤트로 action속성값으로 넘어가기 때문에 이를 방지하기 위해 추가


        // 아이디 빈칸인지 여부, 유효성 검사
        if( $("#user_id").val() == "" ) {
            // 아이디 칸의 value 값이 빈문자열인 경우(아무것도 입력하지 않았을 때)

            alert("아이디를 입력해주세요.");
            // 경고창 띄우고
            $("#user_id").focus();
            // 포커스를 칸에 다시 맞춰줌

            return false;
            // 아이디가 입력이 안되어있으면 false를 반환해 submit이벤트 중지

        } else if ( !reg_id.test( $("#user_id").val() )  ) {
            // 아이디 유효성 검사를 통과하지 못하면
            // .test() : 문자열 일치여부를 테스트하는 메서드. 일치하면 true, 불일치하면 false를 반환

            alert("아이디를 올바르게 입력해주세요.");
            // 경고창 띄우고
            $("#user_id").focus();
            // 포커스를 칸에 다시 맞춰줌

            return false;
            // false를 반환해 submit이벤트 중지

        }



        // 비밀번호 빈칸 여부, 유효성 검사
        if( $("#user_pw").val() == "" ) {

            alert("패스워드를 입력해주세요.");
            $("#user_pw").focus();
            return false;

        } else if( !reg_pw.test( $("#user_pw").val() ) ) {

            alert("패스워드를 올바르게 입력해주세요.");
            $("#user_pw").focus();
            return false;

        }



        // 패스워드 확인란 빈칸 여부, 패스워드와 일치하는지 확인
        if( $("#user_pw_check").val() == "" ) {

            alert("패스워드를 한번 더 입력해주세요.");
            $("#user_pw_check").focus();
            return false;

        } else if ( $("#user_pw").val() != $("#user_pw_check").val() ) {

            alert("비밀번호가 일치하지 않습니다.");
            $("#user_pw_check").focus();
            return false;
        }



        // 성명 빈칸 여부, 유효성 검사
        if( $("#user_name").val() == "" ) {

            alert("성명을 입력해주세요.");
            $("#user_name").focus();
            return false;

        } else if( !reg_name.test( $("#user_name").val() ) ) {

            alert("성명을 올바르게 입력해주세요.");
            $("#user_name").focus();
            return false;

        }

        // 이메일 빈칸 여부, 유효성 검사
        if( $("#user_email").val() == "" ) {

            alert("이메일을 입력해주세요.");
            $("#user_email").focus();
            return false;

        } else if( !reg_email.test( $("#user_email").val() ) ) {

            alert("이메일을 올바르게 입력해주세요.");
            $("#user_email").focus();
            return false;

        }

        // 연락처 빈칸 여부, 유효성 검사
        if( $("#user_phone").val() == "" ) {

            alert("연락처를 입력해주세요.");
            $("#user_phone").focus();
            return false;

        } else if( !reg_phone.test( $("#user_phone").val() ) ) {

            alert("연락처를 올바르게 입력해주세요.");
            $("#user_phone").focus();
            return false;

        }

    });


    $("#user_id, #user_pw, #user_pw_check, #user_name, #user_email, #user_phone")
            .after("<span class='input_hint'></span>");
            // .after() : 뒤에 삽입(형제요소로 추가)
            // .before() : 앞에 삽입(형제요소로 추가)

    // 입력 힌트 띄워주기
    $("#user_id").keyup(function(){
        // .keyup() : 키를 눌렀다 떼었을 때 실행(뗄 때마다 실행)
        
        if( $("#user_id").val().length < 3 ) {
            $(this).next("span").text("아이디를 3자 이상 입력해주세요.");
        } else if ( $("#user_id").val().length == 3 ) {
            $(this).next("span").text("");
        } else if ( $("#user_id").val().length > 10 ) {
            $(this).next("span").text("아이디를 10자 이하로 입력해주세요.");
        }

    });

    $("#user_pw").keyup(function(){

        if( $("#user_pw").val().length < 6 ) {
            $(this).next("span").text("패스워드는 6자 이상 입력해주세요.");
        } else if ( $("#user_pw").val().length == 6 ) {
            $(this).next("span").text("");
        } else if ( $("#user_pw").val().length > 18 ) {
            $(this).next("span").text("패스워드는 18자 이하로 입력해주세요.");
        }

    });

    $("#user_pw_check").keyup(function(){

        if( $("#user_pw").val() == $("#user_pw_check").val() ) {
            $(this).next("span").text("");
        } else {
            $(this).next("span").text("비밀번호와 동일하게 입력해주세요.");
        }

    });




});