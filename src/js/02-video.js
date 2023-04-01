//2.3.1
import Player from '@vimeo/player';
//2.7.2
import throttle from 'lodash.throttle';

//2.5.1.
const CURRENT_TIME_KEY = 'videoplayer-current-time';

//2.3.2.
const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

//2.5.2.
const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

// 2.4.1.
player.on('timeupdate', throttle(getCurrentTime, 1000));
// 2.6.1.
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

// 2.6.2.
player
  .setColor('#e5f50a')
  .then(function (color) {
    console.log(`The new color value: ${color}`);
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
