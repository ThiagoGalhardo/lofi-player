window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".text-title-music"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    iconPlayPause: document.querySelector("#play-pause i"),
    cardPrevious: document.querySelector("#details-previous"),
    cardNow: document.querySelector("#details-now"),
    cardNext: document.querySelector("#details-next"),
    seekbar: document.querySelector("#seekbar"),
    currentlDuration: document.querySelector("#current-duration"),
    totalDuration: document.querySelector("#total-duration"),
    volumeControl: document.querySelector("#volume-control"),
    volumeIcon: document.querySelector("#volume-icon"),
    coverPrevious: document.querySelector("#cover-previous"),
    coverNow: document.querySelector("#cover-now"),
    coverNext: document.querySelector("#cover-next"),

    audioData: hiphop,
    currentAudio: {},
    currentPlaying: 0,
    isPLaying: false,

    start() {
        this.update();
        this.audio.onended = () => this.next();
        this.audioData = hiphop;

    },
    next() {
        this.currentPlaying++;
        if (this.currentPlaying == this.audioData.length) this.restart();
        this.update();
        this.audio.onloadeddata = () => {
            this.seekbar.max = this.audio.duration;

            this.seekbar.value = 0;
            this.updateTime();
            this.playMusic();
        }
    },

    previous() {
        if (this.currentPlaying <= 0) {
            this.currentPlaying = 0

        } else {
            this.currentPlaying--;
        }
    },

    updateData() {
        this.currentPlaying = [0];
        this.currentAudio = this.audioData[this.currentPlaying];
        this.update();
    },


    update() {
        this.currentAudio = this.audioData[this.currentPlaying];
        this.cover.style.background = `url('${path(
        this.currentAudio.cover
      )}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);

        // this.coverPrevious.src = path(this.currentAudio.cover);
        // this.coverNow.src = path(this.currentAudio.cover);
        // this.coverNext.src = path(this.currentAudio.cover);



        //Previous
        if (this.currentPlaying <= 0) {
            this.cardPrevious.innerHTML = `<p>${this.audioData[this.currentPlaying].title}</p>
                                                   <p>${this.audioData[this.currentPlaying].artist}</p>`

        } else {
            this.cardPrevious.innerHTML = `<p>${this.audioData[this.currentPlaying -1].title}</p>
                                                   <p>${this.audioData[this.currentPlaying -1].artist}</p>`
        }

        // Now
        this.cardNow.innerHTML = `<p>${this.currentAudio.title}</p>
                                   <p>${this.currentAudio.artist}</p>`


        //Next
        if (this.currentPlaying < this.audioData.length - 1) {
            this.cardNext.innerHTML = `<p>${this.audioData[this.currentPlaying +1].title}</p>
            <p>${this.audioData[this.currentPlaying +1].artist}</p>`

        } else if (this.currentPlaying + 1 == this.audioData.length) {
            this.cardNext.innerHTML = `<p>${this.audioData[0].title}</p>
            <p>${this.audioData[0].artist}</p>`
        }


        // Seekbar
        this.audio.onloadeddata = () => {
            this.seekbar.max = this.audio.duration;
            this.updateTime();
        }

    },
    restart() {
        this.currentPlaying = 0;
        this.update();
    },

    playMusic() {
        this.isPLaying = true;
        this.iconPlayPause.innerText = "pause";
        this.audio.play();
        this.audio.onloadeddata = () => {
            const minutes = Math.floor(this.audio.duration / 60);
            const seconds = Math.floor(this.audio.duration % 60);

            this.totalDuration.innerText = `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
            this.seekbar.max = this.audio.duration;
        }

        this.cover.style.background = `url('${path(
         'cover.gif'
           )}') no-repeat center center / cover`;

    },
    pauseMusic() {
        this.isPLaying = false;
        this.iconPlayPause.innerText = "play_arrow";
        this.audio.pause();

        this.cover.style.background = `url('${path(
            'cover-static.jpg'
          )}') no-repeat center center / cover`;

    },


    seekUpdate() {
        var seekto = this.seekbar.value;
        this.audio.currentTime = seekto;
    },

    updateTime() {
        const minutes = Math.floor(this.audio.duration / 60);
        const seconds = Math.floor(this.audio.duration % 60);

        this.totalDuration.innerText = `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
    },

    timeUpdate() {


        const minutes = Math.floor(this.audio.currentTime / 60);
        const seconds = Math.floor(this.audio.currentTime % 60);

        this.currentlDuration.innerText = `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
        this.seekbar.value = this.audio.currentTime;
    },

    setVolume() {
        let volumeSeek = this.volumeControl.value / 100;
        this.audio.volume = this.volumeControl.value / 100;

        if (volumeSeek < 0.5) {
            this.volumeIcon.innerText = "volume_down"
        } else if (volumeSeek >= 0.5) { this.volumeIcon.innerText = "volume_up" }
    },
    toggleMute() {
        this.audio.muted = !this.audio.muted;

        this.volumeIcon.innerText = this.audio.muted ? "volume_off" : "volume_up";
    }
};