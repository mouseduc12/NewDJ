var firstBox = document.getElementById("f-box");
var secondBox = document.getElementById("second-box")
var thirdBox = document.getElementById("third-box");
var fourthBox = document.getElementById("fourth-box");
var fifthBox = document.getElementById("fifth-box")
var sixthBox = document.getElementById("s-box");
var body = document.getElementsByTagName('BODY')[0];
var audio = document.getElementsByTagName("AUDIO")[0];
var audio1 = document.getElementsByTagName("AUDIO")[1];
var audio2 = document.getElementsByTagName("AUDIO")[2];
var audio3 = document.getElementsByTagName("AUDIO")[3];
var firsth1 = document.getElementById("firsth1");
var secondh1 = document.getElementById("secondh1");
var chooseTrack = document.getElementsByTagName("h2")[0]
var ball = document.getElementById("lightning-balls");

var newSoundEffect = new Howl({
    src: ["./sound-effects/black.mp3"],
    volume: 0.7
});

var newSoundEffect1 = new Howl({
    src: ["./sound-effects/Gray.mp3"],
    volume: 0.7
});

var newSoundEffect2 = new Howl({
    src: ["./sound-effects/Green.mp3"],
    volume: 0.7
});

var newSoundEffect3 = new Howl({
    src: ["./sound-effects/Pink.mp3"],
    volume: 0.7
});

var newSoundEffect4 = new Howl({
    src: ["./sound-effects/Red.mp3"],
    volume: 0.7
});

var newSoundEffect5 = new Howl({
    src: ["./sound-effects/Yellow.mp3"],
    volume: 0.7
});

window.addEventListener("keydown", function (event) {
    console.log(event);
    var unicode = event.which || event.keyCode;
    if (unicode === 82) {
        newSoundEffect.play()
        firstBox.style.backgroundImage = "linear-gradient(to right, rgba(255,0,0,0.3), rgb(255,0,0))";
        firstBox.style.boxShadow = "10px 5px 5px violet";
        firstBox.style.borderRadius = "5%";
        setTimeout(function () {
            firstBox.style.background = "rgba(0, 0, 0, 0.2)";
            firstBox.style.boxShadow = "10px 5px 5px black";
            firstBox.style.borderRadius = "0";
        }, 2500)
    } else if (unicode === 84) {
        newSoundEffect1.play()
        secondBox.style.backgroundImage = "linear-gradient(to right, rgba(176,224,230,0.3), rgb(176,224,230))";
        secondBox.style.boxShadow = "10px 5px 5px lime";
        secondBox.style.borderRadius = "5%";
        setTimeout(function () {
            secondBox.style.background = "rgba(0, 0, 0, 0.2)";
            secondBox.style.boxShadow = "10px 5px 5px black";
            secondBox.style.borderRadius = "0";
        }, 1500)
    } else if (unicode === 89) {
        newSoundEffect2.play()
        thirdBox.style.backgroundImage = "linear-gradient(to right, rgba(123,104,238, 0.3), rgb(123,104,238))";
        thirdBox.style.boxShadow = "10px 5px 5px salmon";
        thirdBox.style.borderRadius = "5%";
        setTimeout(function () {
            thirdBox.style.background = "rgba(0, 0, 0, 0.2)";
            thirdBox.style.boxShadow = "10px 5px 5px black";
            thirdBox.style.borderRadius = "0";
        }, 1500)
    } else if (unicode === 85) {
        newSoundEffect3.play()
        fourthBox.style.backgroundImage = "linear-gradient(to right, rgba(65,105,225,0.3), rgb(65,105,225))";
        fourthBox.style.boxShadow = "10px 5px 5px aqua";
        fourthBox.style.borderRadius = "5%";
        setTimeout(function () {
            fourthBox.style.background = "rgba(0, 0, 0, 0.2)";
            fourthBox.style.boxShadow = "10px 5px 5px black";
            fourthBox.style.borderRadius = "0";
        }, 2500)
    } else if (unicode === 73) {
        newSoundEffect4.play()
        fifthBox.style.backgroundImage = "linear-gradient(to right, rgba(255,255,102,0.3), rgb(255,255,102))";
        fifthBox.style.boxShadow = "10px 5px 5px fuchsia";
        fifthBox.style.borderRadius = "5%";
        setTimeout(function () {
            fifthBox.style.background = "rgba(0, 0, 0, 0.2)";
            fifthBox.style.boxShadow = "10px 5px 5px black";
            fifthBox.style.borderRadius = "0";
        }, 1200)
    } else if (unicode === 79) {
        newSoundEffect5.play()
        sixthBox.style.backgroundImage = "linear-gradient(to right, rgba(173,255,47,0.3), rgb(173,255,47))";
        sixthBox.style.boxShadow = "10px 5px 5px firebrick";
        sixthBox.style.borderRadius = "5%";
        setTimeout(function () {
            sixthBox.style.background = "rgba(0, 0, 0, 0.2)";
            sixthBox.style.boxShadow = "10px 5px 5px black";
            sixthBox.style.borderRadius = "0";
        }, 1500)
    }
})
//var newMusicId = newMusic.play()
// console.log(newMusicId);
var firstSong = document.getElementById("firstOne")
console.log(firstSong.currentTime);
var secondSong = document.getElementById("secondOne")
var thirdSong = document.getElementById("thirdOne")
var fourthSong = document.getElementById("fourthOne")

var playSong = document.getElementById("playSong");
var stopSong = document.getElementById("stopSong");
var newTrack = document.getElementById("tracks");

var selectedSong;
playSong.addEventListener("click", function(){
    selectedSong = newTrack.value
    if (selectedSong === "firstSoundTrack") {
        secondh1.style.display = "block";
        chooseTrack.style.display ="none"
        firsth1.style.display = "none"
        playSong.style.display = "none";
        stopSong.style.display ="block";
        ball.style.display = "flex";
        body.style.backgroundImage = "linear-gradient(black, darkblue)"
        firstSong.style.display = "block";
        firstSong.play();
        secondSong.style.display ="none";
        thirdSong.style.display ="none";
        fourthSong.style.display ="none";
    } else if (selectedSong === "secondSoundTrack") {
        body.style.backgroundImage = "linear-gradient(black, darkblue)";
        ball.style.display = "flex";
        chooseTrack.style.display ="none"
        secondh1.style.display = "block";
        firsth1.style.display = "none"
        stopSong.style.display ="block";
        playSong.style.display = "none";
        secondSong.style.display = "block";
        secondSong.play();
        firstSong.style.display ="none";
        thirdSong.style.display ="none";
        fourthSong.style.display ="none";
    } else if (selectedSong === "thirdSoundTrack") {
        body.style.backgroundImage = "linear-gradient(black, darkblue)";
        ball.style.display = "flex";
        chooseTrack.style.display ="none"
        secondh1.style.display = "block";
        firsth1.style.display = "none"
        stopSong.style.display ="block";
        playSong.style.display = "none";
        thirdSong.style.display = "block";
        thirdSong.play();
        secondSong.style.display ="none";
        firstSong.style.display ="none";
        fourthSong.style.display ="none";
    } else if (selectedSong === "fourthSoundTrack") {
        playSong.style.display = "none";
        body.style.backgroundImage = "linear-gradient(black, darkblue)";
        chooseTrack.style.display ="none"
        ball.style.display = "flex";
        secondh1.style.display = "block";
        firsth1.style.display = "none"
        stopSong.style.display ="block";
        fourthSong.style.display = "block";
        fourthSong.play();
        secondSong.style.display ="none";
        thirdSong.style.display ="none";
        firstSong.style.display ="none";
    }
})
stopSong.addEventListener('click', function(){
    if(selectedSong === "firstSoundTrack"){
        firstSong.pause()
        firstSong.currentTime = 0.0;
        playSong.style.display = "block";
        stopSong.style.display = "none";
        body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)"
        audio.style.display = "none";
        chooseTrack.style.display ="block"
        ball.style.display = "none";
        secondh1.style.display = "none";
        firsth1.style.display = "block"
    } else if(selectedSong === "secondSoundTrack"){
        secondSong.pause()
        secondSong.currentTime = 0.0;
        playSong.style.display = "block";
        stopSong.style.display = "none";
        body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)"
        audio1.style.display = "none";
        chooseTrack.style.display ="block"
        ball.style.display = "none";
        secondh1.style.display = "none";
        firsth1.style.display = "block"
    }   else if(selectedSong === "thirdSoundTrack"){
        thirdSong.pause()
        thirdSong.currentTime = 0.0;
        playSong.style.display = "block";
        stopSong.style.display = "none";
        body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)"
        audio2.style.display = "none";
        chooseTrack.style.display ="block"
        ball.style.display = "none";
        secondh1.style.display = "none";
        firsth1.style.display = "block"
    } else if(selectedSong === "fourthSoundTrack"){
        fourthSong.pause()
        fourthSong.currentTime = 0.0;
        playSong.style.display = "block";
        stopSong.style.display = "none";
        body.style.backgroundImage = "linear-gradient(#e66465, #9198e5)";
        audio3.style.display = "none";
        chooseTrack.style.display ="block"
        ball.style.display = "none";
        secondh1.style.display = "none";
        firsth1.style.display = "block"
    }
})