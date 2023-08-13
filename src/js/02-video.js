import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe);
// console.log(player);
player.on('timeupdate', throttle(fnTime, 1000));

function fnTime(data) {
    console.log(data);
    let time = data.seconds;
    console.log(time);
    localStorage.setItem('videoplayer-current-time', time);
};

const currentTime = localStorage.getItem('videoplayer-current-time');
// console.log(currentTime);
player.setCurrentTime(currentTime);
