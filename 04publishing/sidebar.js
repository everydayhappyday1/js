// side JS
// 스크립트가 바디보다 위에 위치함 
// 따라서 선택지는 2가지
// 1. 스크립트를 바디 아래에 두던가
// 2. window.onload를 사용하던가

window.onload = function(){
    var menuBtn = document.querySelector(".menuBtn");
    //console.log(menuBtn);
    
    // 이렇게 만들어도 되고
    //menuBtn.addEventListener("click",function(){
    //});

    // 밖에 함수 만들어서 넣어줘도 된다.
    menuBtn.addEventListener("click",onSidenav);
}

function onSidenav(){
    //console.log(1);
    var sideWidth = document.querySelector(".side");
    if(sideWidth.style.width == '200px' ){
        sideWidth.style.width='0px';
    }else{
        sideWidth.style.width='200px';
    }
}
