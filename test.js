var arr = ["코","드","메","이","트","!"];
var arr_color = ["red","orange","yellow","green","blue","purple"];
var start_btn = document.querySelector("clickChange");
var h1 = document.querySelector("h1");

var text = 0;
var count = 0;

function clickChange(){
    if (text > arr.length-1){
        h1.innerHTML = "";
        text = 0;
        count = 0;
    }
    h1.style.color = arr_color[count];
    h1.innerHTML += arr[text];
    text++;
    count++;
}
start_btn.addEventListener('click', clickChange);