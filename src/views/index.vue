<template>
  <div id="tour">
    <div class="enterWrap">
      <!--传递一个params，goOrBack的TF值来判断是去长沙还是会赤壁-->
      <router-link :to="{name:'train',params:{goOrBack:true}}" class="enter">
        <span class="enterText">点击开启我的长沙之旅</span>
        <span class="enterIcon">&gt;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
};
</script>

<style scoped lang="scss">
  #tour {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #FFF3D9;
    background-image: url('~img/bg_1.png');
    -webkit-background-size: contain;
    background-size: contain;
    background-position: 0 30%;
    background-repeat: no-repeat;

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
      top: 78%;

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
</style>
