var background = document.querySelector('.background');
var animatedText = document.querySelector('.animated-text');

background.style.backgroundImage = 'url(background.jpg)';

background.onload = function() {
  animatedText.style.opacity = '1';
};
