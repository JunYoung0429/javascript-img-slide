var index = 0;
// window.onload = function(){
//     slideShow();
// }
function slideShow(){
    var i;
    var x = document.getElementsByClassName("slide");

    for(i=0; i<x.length; i++){
        x[i].style.display = "none"
    }
    index++;
    console.log(index);
    if(index > x.length){
        index = 1; //인덱스가 초과 되면 1로 변경
    }
    x[index - 1].style.display = "inline-block";
    setTimeout(slideShow,3000); //함수를 3초마다 호출함
}