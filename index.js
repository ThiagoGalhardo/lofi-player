const path = function(file) {
    return `files/${file}`;
};


var volume = document.querySelector("#volume-control");
var audio = document.querySelector("audio");
var cardPlayer = document.querySelector("#player");
var cardMusic = document.querySelector(".now .card-musics");
var root = document.documentElement;
var sidebar = document.querySelector('.sidebar');
var iconThemeClose = document.querySelector('#icon-theme-close');
var iconTheme = document.querySelector('#icon-theme');
var menuToggle = document.querySelector('.toggle');

var buttonHipHop = document.querySelector("#button-hiphop")
var buttonStudy = document.querySelector("#button-study")
var buttonRelax = document.querySelector("#button-relax")


window.addEventListener("load", player.start());


// document.querySelector("#button-hiphop").addEventListener("click", () => {

//     player.audioData = hiphop;
//     player.update();

// });

document.querySelector("#play-pause").addEventListener("click", playOrPause);

document.querySelector("#volume-icon").addEventListener("click", () => {
    player.toggleMute();
});


// Seta o volume
this.volume.oninput = () => {
    player.setVolume()
};

// Atualiza o tempo da musica
this.audio.ontimeupdate = () => {
    player.timeUpdate();
};

//Clique na Seekbar
document.querySelector("#seekbar").addEventListener('change', () => {
    player.seekUpdate();

});


document.querySelector("#previous-track").addEventListener("click", () => {
    player.previous();
    player.update();
    player.playMusic();
});

document.querySelector("#next-track").addEventListener("click", () => {
    player.next();
    player.playMusic();
});


function playOrPause() {

    if (!player.isPLaying) {
        player.playMusic();
        player.isPLaying = true;
        document.querySelector("#play-pause i").innerText = "pause";


    } else if (player.isPLaying) {
        player.pauseMusic();
        player.isPLaying = false;
        document.querySelector("#play-pause i").innerText = "play_arrow";
    }

}

document.querySelector("#icon-theme").addEventListener("click", openMenu);
document.querySelector("#icon-theme-close").addEventListener("click", closeMenu);


function openMenu() {

    sidebar.style.right = "0";


    iconThemeClose.style.visibility = "visible";
    iconTheme.style.visibility = "hidden";
};

function closeMenu() {

    sidebar.style.right = "-100%";

    iconThemeClose.style.visibility = "hidden";
    iconTheme.style.visibility = "visible";

};

function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');

    iconThemeClose.style.visibility = "visible";
    iconTheme.style.visibility = "hidden";


    if (sidebar.classList.toggle = 'active') {
        iconThemeClose.style.visibility = "visible";
        iconTheme.style.visibility = "hidden";
    } else {
        iconThemeClose.style.visibility = "hidden";
        iconTheme.style.visibility = "visible";
    }
}


document.querySelector("#radio-theme-blue").addEventListener("click", () => {

    theme.themeBlue();

});

document.querySelector("#radio-theme-green").addEventListener("click", () => {


    theme.themeGreen();

});

document.querySelector("#radio-theme-yellow").addEventListener("click", () => {

    theme.themeYellow();

});

document.querySelector("#radio-theme-pink").addEventListener("click", () => {

    theme.themePink();

});

document.querySelector("#radio-theme-red").addEventListener("click", () => {

    theme.themeRed();

});

document.querySelector("#radio-theme-purple").addEventListener("click", () => {


    theme.themePurple();

});

document.querySelector("#radio-theme-gray").addEventListener("click", () => {

    theme.themeGray();

});



buttonHipHop.classList.toggle('active');

buttonHipHop.addEventListener("click", () => {

    buttonHipHop.classList.toggle('active');

    buttonStudy.classList.remove('active');
    buttonRelax.classList.remove('active');

    player.audioData = hiphop;
    player.pauseMusic();
    player.updateData();



});


document.querySelector("#button-study").addEventListener("click", () => {
    buttonHipHop.classList.remove('active');
    buttonRelax.classList.remove('active');

    document.querySelector("#button-study").classList.toggle('active');

    player.audioData = study;
    player.pauseMusic();
    player.updateData();

});

document.querySelector("#button-relax").addEventListener("click", () => {
    buttonHipHop.classList.remove('active');
    buttonStudy.classList.remove('active');
    document.querySelector("#button-relax").classList.toggle('active');

    player.audioData = relax;
    player.pauseMusic();
    player.updateData();

});






document.querySelector("#theme-light").addEventListener("change", () => {
    theme.changetoLightTheme();
});

document.querySelector("#theme-dark").addEventListener("change", () => {
    theme.changetoDarkTheme();
});