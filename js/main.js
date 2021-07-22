new Vue({
  el: "#app",
  data() {
    return {
      show: false,
      isLeft: false,
      isRight: true,
      timer: null,
      pickTime: null,
      totalTime: null,
      resetButton: false,
      sound: new Howl({ src: ['mp3/warning1.mp3'] }),
    };
  },
  methods: {
    rotate_left() {
      this.isLeft = true;
      this.isRight = false;
    },
    rotate_right() {
      this.isLeft = false;
      this.isRight = true;
    },
    reload(event) {
      window.location.reload();
    },
    setMin(min) {
      this.pickTime = min * 60;
      this.totalTime = this.pickTime;
    },
    startTimer() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
    },
    stopTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer() {
      this.totalTime = this.pickTime;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
    },
    padTime(time) {
      return (time < 10 ? "0" : "") + time;
    },
    play() {
      setTimeout(() => {
        this.sound.play();
      }, 0);
    },
    countdown() {
      if (this.totalTime >= 1) {
        this.totalTime--;
        if (this.totalTime === 5) {
          this.play();
        }
      } else {
        this.totalTime = 0;
        this.resetTimer();
        swal("Complete!!", "", "success");
      }
    }
  },
  computed: {
    minutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return minutes;
    },
    seconds() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
  },
});
