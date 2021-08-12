new Vue({
  el: '#app',
  data() {
    return {
      show: false,
      isLeft: false,
      isRight: true,
      timer: undefined,
      pickTime: undefined,
      totalTime: undefined,
      resetButton: false,
      sound: undefined,
    };
  },
  methods: {
    rotateLeft() {
      this.isLeft = true;
      this.isRight = false;
    },
    rotateRight() {
      this.isLeft = false;
      this.isRight = true;
    },
    reload() {
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
      this.timer = undefined;
      this.resetButton = true;
    },
    resetTimer() {
      this.totalTime = this.pickTime;
      clearInterval(this.timer);
      this.timer = undefined;
      this.resetButton = false;
    },
    play() {
      setTimeout(() => {
        this.sound.play();
      }, 0);
    },
    countdown() {
      if (this.totalTime === 4) {
        this.play();
        return;
      }
      if (this.totalTime > 0) {
        this.totalTime--;
        return;
      }
      this.stopTimer();
      this.confirms()[Math.floor(Math.random() * 2) % 2]()
      .then(() => this.resetTimer());
    },
    confirms() {
      return [() => swal('Complete!!', '', 'success'), () => {
        this.$buefy.toast.open('Completed!!');
        const prom = {};
        prom.pending = new Promise((...args) => {
          [prom.resolve, prom.reject] = args;
        });
        this.$buefy.dialog.alert({
          title: 'Complete!!',
          message: 'Complete!! <b>success</b>',
          hasIcon: true,
          icon: 'algolia',
          iconPack: 'fab',
          confirmText: 'Cool!',
          onConfirm: () => prom.resolve(),
        });
        return prom.pending;
      }];
    },
  },
  computed: {
    minutes() {
      return Math.floor(this.totalTime / 60);
    },
    seconds() {
      return `0${this.totalTime % 60}`.slice(-2);
    },
  },
  mounted() {
    setTimeout(() => {
      this.sound = new Howl({ src: ['mp3/warning1.mp3'] });
    }, 0);
  },
});
