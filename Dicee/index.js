var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImage1Src = "images/dice" + randomNumber1 + ".png";
var randomImage2Src = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomImage1Src);
image2.setAttribute("src",randomImage2Src);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Won";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
