var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
function entrada(){
    if(img1.click){
        window.open("opaudi/op.html", "_self");
    }
    else{
        console.log("erro");
    }
    if(img2.click){
        window.open("opaudi/op2.html", "_self");
    }
    else{
        console.log("erro");
    }
    if(img3.click){
        window.open("opaudi/op3.html", "_self");
    }
    else{
        console.log("erro");
    }
}