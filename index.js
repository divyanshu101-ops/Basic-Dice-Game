var randomNumber = Math.floor(Math.random() * 6) + 1;

var generateRandomImages = "images/dice" + randomNumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", generateRandomImages);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var generateRandomImages2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", generateRandomImages2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Win!";
}else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "!Player 2 Win";
}else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}