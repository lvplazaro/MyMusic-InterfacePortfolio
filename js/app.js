const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: "1",
        songName: `Ain't a Train <br>
        <div class="subtitle">Cody Jinks</div>`,
        poster: "img/posters/m1.jpg",
    },
    {
        id: "2",
        songName: `Autumn Changes <br>
        <div class="subtitle">Zakk Wylde</div>`,
        poster: "img/posters/m2.jpg",
    },
    {
        id: "3",
        songName: `Broken Man <br>
        <div class="subtitle">Ole Kentucky Road</div>`,
        poster: "img/posters/m3.jpg",
    },
    {
        id: "4",
        songName: `Cemetery Gates <br>
        <div class="subtitle">Pantera</div>`,
        poster: "img/posters/m4.jpg",
    },
    {
        id: "5",
        songName: `Change <br>
        <div class="subtitle">Blind Melon</div>`,
        poster: "img/posters/m5.jpg",
    },
    {
        id: "6",
        songName: `Hippies and Cowboys <br>
        <div class="subtitle">Cody Jinks</div>`,
        poster: "img/posters/m6.jpg",
    },{
        id: "7",
        songName: `When The Wild Wind Blows <br>
        <div class="subtitle">Iron Maiden</div>`,
        poster: "img/posters/m7.jpg",
    },
    {
        id: "8",
        songName: `Sujeito de Sorte <br>
        <div class="subtitle">Belchior </div>`,
        poster: "img/posters/m8.jpg",
    },
    {
        id: "9",
        songName: `Spoke In The Wheel<br>
        <div class="subtitle">Black Label Society </div>`,
        poster: "img/posters/m9.jpg",
    },
    {
        id: "10",
        songName: `Spiral Architect <br>
        <div class="subtitle">Black Sabbath</div>`,
        poster: "img/posters/m10.jpg",
    },
    {
        id: "11",
        songName: `Sorrowed Regrets <br>
        <div class="subtitle">Black Label Society</div>`,
        poster: "img/posters/m11.jpg",
    },
    {
        id: "12",
        songName: `Sirens <br>
        <div class="subtitle">Pearl Jam</div>`,
        poster: "img/posters/m12.jpg",
    },
    {
        id: "13",
        songName: `Lost Prayer <br>
        <div class="subtitle">Zakk Wylde</div>`,
        poster: "img/posters/m13.jpg",
    },
    {
        id: "14",
        songName: `Old Man <br>
        <div class="subtitle">Neil Young</div>`,
        poster: "img/posters/m14.jpg",
    },
    {
        id: "15",
        songName: `Keep The Wolves Away <br>
        <div class="subtitle">Uncle Lucius</div>`,
        poster: "img/posters/m15.jpg",
    },
    {
        id: "16",
        songName: `Heavy Load <br>
        <div class="subtitle">Cody Jinks</div>`,
        poster: "img/posters/m16.jpg",
    },
    {
        id: "17",
        songName: `Hallelujah <br>
        <div class="subtitle">Ryan Bingham</div>`,
        poster: "img/posters/m17.jpg",
    },
    {
        id: "18",
        songName: `Fotografia 3x4 <br>
        <div class="subtitle">Belchior</div>`,
        poster: "img/posters/m18.jpg",
    },
    {
        id: "19",
        songName: `Dead Man's Road <br>
        <div class="subtitle">Doc Holliday</div>`,
        poster: "img/posters/m19.jpg",
    },
    {
        id: "20",
        songName: `Another Brick In The Wall <br>
        <div class="subtitle">Pink Floyd</div>`,
        poster: "img/posters/m20.jpg",
    },
]












Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
   e.getElementsByTagName('img')[0].src = songs[i].poster;
   e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',() => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');   
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}


let index = 0;
let songTitle = document.getElementById('songTitle');
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('poster_master_play');
title.innerHTML = "Reproduzindo agora";
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
    e.addEventListener('click',(el)=>{
       index =  el.target.id;
       //console.log(index);
       music.src = `audio/${index}.mp3`;
       poster_master_play.src = songs[index - 1].poster;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles = songs.filter((els) => {
        return els.id == index;
       });

       songTitles.forEach(elss => {
            let { songName } = elss;
            songTitle.innerHTML = songName;
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');


    });

})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
   
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
        
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
        
    }

    currentStart.innerText = `${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur) *100);
    seek.value = progressBar;
   // console.log(seek.value);
   let seekbar = seek.value;
   bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;

});


seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
       vol_icon.classList.remove('bi-volume-up-fill');
       vol_icon.classList.remove('bi-volume-down-fill');
       vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');   
    }

    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');   
    }
    let vol_a = vol.value;
    vol_bar .style.width = `${vol_a}%`;
    vol_dot .style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');


back.addEventListener('click',()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = songs[index - 1].poster;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles = songs.filter((els) => {
        return els.id == index;
       });

       songTitles.forEach(elss => {
            let { songName } = elss;
            songTitle.innerHTML = songName;
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
})

next.addEventListener('click', ()=> {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = songs[index - 1].poster;
       music.play();
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');

       let songTitles = songs.filter((els) => {
        return els.id == index;
       });

       songTitles.forEach(elss => {
            let { songName } = elss;
            songTitle.innerHTML = songName;
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
});










let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click', ()=>{
   pop_song.scrollLeft += 230; 
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 230; 
 });

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artits_bx = document.getElementsByClassName('Artits_bx')[0];


pop_art_right.addEventListener('click', ()=>{
    Artits_bx.scrollLeft += 230; 
});

pop_art_left.addEventListener('click', ()=>{
    Artits_bx.scrollLeft -= 230; 
 });