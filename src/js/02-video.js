import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

/
player.on('timeupdate', function (data) {
   
    const currentTime = data.seconds;

    localStorage.setItem('videoplayer-current-time', currentTime.toString());
});


const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
}

import throttle from 'lodash.throttle';


function saveTimeToLocalStorage(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
}


const throttledSaveTime = throttle(saveTimeToLocalStorage, 1000); 

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    throttledSaveTime(currentTime);
});
