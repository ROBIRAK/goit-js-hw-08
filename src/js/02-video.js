import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem("timer", JSON.stringify(data.seconds))
    console.log(data);
};

player.on('timeupdate', throttle(onPlay, 1000));
console.log(1);
if (JSON.parse(localStorage.getItem("timer"))) {
    player.setCurrentTime(JSON.parse(localStorage.getItem("timer")))
}

