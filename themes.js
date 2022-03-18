window.theme = {
    cardPlayer: document.querySelector("#player"),
    cardPlayingPrevious: document.querySelector(".previous .card-musics"),
    cardPlayingNow: document.querySelector(".now .card-musics"),
    cardPlayingNext: document.querySelector(".next .card-musics"),
    body: document.querySelector("body"),
    root: document.documentElement,
    color: '',
    colorShadowBox: '',
    colorGradient: '',
    darkMode: false,
    cardContent: document.querySelector(".card-content"),
    cardControls: document.querySelector(".change-tracks"),
    iconToggle: document.querySelector(".material-icons"),
    darkMode: false,


    themeBlue() {
        this.color = '#4D77FF';
        this.colorShadowBox = '2px  10px 30px 5px #4D77FF';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(77, 119, 255, 1) 92%)';


        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #233776 100%)';
        }
        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },

    themeGreen() {
        this.color = '#357C3C';
        this.colorShadowBox = '2px  10px 30px 5px #357C3C';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(53, 124, 60, 1) 92%)';

        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #357C3C 100%)';
        }
        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },



    themeYellow() {
        this.color = '#CED453';
        this.colorShadowBox = '2px  10px 30px 5px #CED453';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(237, 242, 149, 1) 92%)';
        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #696926 100%)';
        }

        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },


    themePink() {
        this.color = '#FFBED8';
        this.colorShadowBox = '2px  10px 30px 5px #FFBED8';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(255, 190, 216, 1) 92%)';
        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #5F394E 100%)';
        }


        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },


    themeRed() {
        this.color = '#f16464';
        this.colorShadowBox = '2px  10px 30px 5px #f16464';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(241, 100, 100, 1) 92%)';
        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #301A22 100%)';
        }

        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },


    themePurple() {
        this.color = '#8A39E1';
        this.colorShadowBox = '2px  10px 30px 5px #8A39E1';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(138, 57, 225, 1) 92%)';
        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #270F40 100%)';
        }

        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },


    themeGray() {
        this.color = '#92A9BD';
        this.colorShadowBox = '2px  10px 30px 5px #92A9BD';
        this.colorGradient = 'linear-gradient(0deg, rgba(247, 247, 247, 1) 23.8%, rgba(146, 169, 189, 1) 92%)';

        if (this.darkMode) {
            this.colorGradient = 'linear-gradient(0deg, #292929 0%, #2B2C2D 100%)';
        }

        this.changeTheme(this.color, this.colorShadowBox, this.colorGradient);
    },


    changeTheme(color, colorShadowBox, colorGradient) {

        this.cardPlayer.style.boxShadow = colorShadowBox;
        this.cardPlayingNow.style.boxShadow = colorShadowBox;
        this.root.style.setProperty('--primary', color);
        this.body.style.backgroundImage = colorGradient;

    },


    changetoLightTheme() {
        this.cardPlayer.style.boxShadow = "var(--primary)";
        this.cardPlayer.style.backgroundColor = "white";
        this.cardPlayingPrevious.style.backgroundColor = "white";
        this.cardPlayingNow.style.backgroundColor = "white";
        this.cardPlayingNext.style.backgroundColor = "white";
        this.root.style.setProperty('--colorFont', '#262626');
        this.cardContent.style.backgroundColor = "white";
        this.cardControls.style.backgroundColor = "white";
        this.iconToggle.style.color = "var(--colorDark)";
        this.darkMode = false;
    },

    changetoDarkTheme() {
        this.cardPlayer.style.boxShadow = "var(--primary)";
        this.cardPlayer.style.backgroundColor = "#262626";
        this.cardPlayingPrevious.style.backgroundColor = "#262626";
        this.cardPlayingNow.style.backgroundColor = "#262626";
        this.cardPlayingNext.style.backgroundColor = "#262626";
        this.root.style.setProperty('--colorFont', 'white');
        this.cardContent.style.backgroundColor = "#262626";
        this.cardControls.style.backgroundColor = "#262626";
        this.iconToggle.style.color = "var(--colorWhite)";
        this.darkMode = true;
        this.body.style.backgroundImage = 'linear-gradient(0deg, #292929 0%, #233776 100%)';
        this.cardPlayer.style.boxShadow = '2px  10px 30px 5px #4D77FF';
    }

}