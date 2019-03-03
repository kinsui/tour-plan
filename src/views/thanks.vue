<template>
  <div id="thanks">
    <h2>高一3班401寝室信息课作业</h2>
    <div class="typeTextWrap">
      <vue-typer :text='text' :pre-type-delay='1000' caret-animation='expand'
                 eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
    </div>
    <div class="enterWrap">
      <div class="enter" @click="close">
        <span class="enterText">感谢观看</span>
        <span class="enterIcon">&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thanks',
  data() {
    return {
      text: '页面制作：陈慧琳\n页面设计：曾　霞\n行程安排：熊甜甜\n预算评估：来　瑾\n素材收集：李夏妮\n文字组织：黄　克',
    };
  },
  methods: {
    close() {
      window.close();
      // 微信浏览器关闭页面
      WeixinJSBridge.call('closeWindow');
    },
  },
};
</script>

<style lang="scss">
  #thanks {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #9BD8D1;
    background-image: url('~img/bg_3.png');
    -webkit-background-size: contain;
    background-size: contain;
    background-position: 0 0.1rem;
    background-repeat: no-repeat;

    h2{
      width:100%;
      height: 0.8rem;
      line-height: 0.81rem;
      font-weight: bold;
      font-size: 0.43rem;
      text-align: center;
      color:#CE9091;
    }

    .typeTextWrap {
      margin: 6.2rem auto 0 auto;
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
      position: absolute;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: 1rem;

      .enter {
        display: block;
        color: #FFF;
        width: 100%;
        height: 100%;
        border-radius: .45rem;
        box-shadow: 0 .16rem .13rem rgba(49, 97, 91, 0.25);
        font-size: .32rem;
        cursor: pointer;
        background-color: #FAD1CF;

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
</style>
