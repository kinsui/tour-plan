<template>
  <div class="trainWrap">
    <moneyCal :cost="cost"></moneyCal>
    <div class="train" :class="goOrBack?'go':'back'">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl4"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl3"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl2"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-train"></use>
      </svg>

      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl4"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl3"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl2"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl1"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-girl"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-train"></use>
      </svg>
    </div>
    <div class="typeTextWrap">
      <vue-typer :text='text' :pre-type-delay='1000' caret-animation='expand'
                 eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
    </div>
    <div class="enterWrap">
      <div class="enter" @click="toWhere">
        <span class="enterText">{{btnText}}</span>
        <span class="enterIcon">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tour',
  data() {
    return {
      goOrBack: true,
    };
  },
  computed: {
    cost() {
      if (this.goOrBack) {
        return 657;
      }
      return 5013;
    },
    text() {
      if (this.goOrBack) {
        return '我们乘坐直达高铁\n从赤壁北站历经57分钟到达长沙南站\n共花费109.5 × 6 = 657';
      }
      return '我们乘坐直达高铁\n从长沙南站历经57分钟到达赤壁北站\n共花费109.5 × 6 = 657';
    },
    btnText() {
      if (this.goOrBack) {
        return '畅游长沙';
      }
      return '结束行程';
    },
  },
  beforeRouteEnter(to, from, next) {
    to.params.goOrBack === false
      ? next((vm) => {
        vm.goOrBack = false;
      })
      : next((vm) => {
        vm.goOrBack = true;
      });
  },
  methods: {
    toWhere() {
      if (this.goOrBack) {
        this.$router.replace({ name: 'tour' });
      } else {
        this.$router.push({ name: 'thanks' });
      }
    },
  },
  mounted() {
    this.goOrBack
      ? document.title = '铁路畅行 赤壁北 ==> 长沙南'
      : document.title = '铁路畅行 长沙南 ==> 赤壁北';
  },
};
</script>

<style lang="scss">
  .trainWrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 1.5rem;
    box-sizing: padding-box;
    background-color: #D8EFFD;
    background-image: url('~img/map.png');
    -webkit-background-size: contain;
    background-size: contain;
    background-position: 0 1.8rem;
    background-repeat: no-repeat;

    .train {
      min-width: 100%;
      height: 1rem;
      white-space: nowrap;
      text-align: center;

      &.go {
        -webkit-animation: 3.8s loopGo linear infinite normal;
        animation: 3.8s loopGo linear infinite normal;
      }

      &.back {
        transform-origin: 10.56rem;
        -webkit-animation: 3.8s loopBack linear infinite normal;
        animation: 3.8s loopBack linear infinite normal;
      }

      .icon {
        width: 1rem;
        height: 1rem;
        padding: 0 0.38rem;
      }
    }

    .typeTextWrap {
      margin: 5.5rem auto 0 auto;
      text-align: center;
      width: 100%;
      min-height: 1.8rem;

      .vue-typer .custom.char.typed {
        color: #FF636E;
        font-size: .38rem;
      }
    }

    .enterWrap {
      width: 5.5rem;
      height: .9rem;
      margin: 0.3rem auto 0 auto;
      position: relative;

      .enter {
        display: block;
        color: #FFF;
        width: 100%;
        height: 100%;
        border-radius: .45rem;
        box-shadow: 0 .16rem .13rem rgba(49, 97, 91, 0.25);
        font-size: .32rem;
        cursor: pointer;
        background-color: #FED083;

        .enterText {
          display: block;
          color: #B62840;
          /*width: 1.30rem;*/
          white-space: nowrap;
          font-size: .32rem;
          font-weight: 700;
          height: .32rem;
          line-height: .32rem;
          position: absolute;
          left: 50%;
          top: 50%;
          -webkit-transform: translate(-50%, -50%);
          -moz-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          -o-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          vertical-align: bottom;
        }

        .enterIcon {
          color: #DD4A42;
          display: block;
          width: .16rem;
          height: .40rem;
          line-height: .32rem;
          position: absolute;
          font-size: .42rem;
          vertical-align: top;
          top: .26rem;
          right: .68rem;
        }
      }
    }
  }

  @keyframes loopGo {
    0% {
      -webkit-transform: translateX(-13.62rem);
      transform: translateX(-13.62rem);
    }
    100% {
      -webkit-transform: translateX(-3.06rem);
      transform: translateX(-3.06rem);
    }
  }

  @keyframes loopBack {
    0% {
      -webkit-transform: translateX(0rem) rotateY(180deg);
      transform: translateX(0rem) rotateY(180deg);
    }
    100% {
      -webkit-transform: translateX(-10.56rem) rotateY(180deg);
      transform: translateX(-10.56rem) rotateY(180deg);
    }
  }
</style>
