// 팝업쿠키생성함수(쿠키이름을 받는다.)
function createCookie(name){

    //쿠키만료기간
    var date = new Date();
    date.setDate(date.getDate()+1); //오늘부터 1일

    //쿠키구문
    var cookie = "";
    cookie += name + "=true;"; //있다없다만판별하면 되니까 true 써줌... ???????????????????????
    cookie += "expires="+date.toUTCString()+";";

    //쿠키생성
    document.cookie = cookie;
}


// 쿠키 확인 함수
function getCookie(name){
    var cookies = document.cookie.split(";");
    for(var i=0; i<cookies.length; i++){
        if(cookies[i].indexOf(name) != -1 ){ // name 쿠기가 포함되어 있다면 (=쿠기가 생성되어 있다면)
            return true; //존재여부를true반환
        }
    }
}