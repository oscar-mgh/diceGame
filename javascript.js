let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = 'dice' + randomNumber1 + '.png';
let randomDiceImage2 = 'dice' + randomNumber2 + '.png';
let randomImageSource = 'images/' + randomDiceImage;
let randomImageSource2 = 'images/' + randomDiceImage2;
console.log(randomNumber1);
console.log(randomNumber2);

let dice1 = document.querySelector('.img1');
let dice2 = document.querySelector('.img2');
dice1.setAttribute('src', randomImageSource);
dice2.setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector('h1').innerHTML = 'Draw!';
}