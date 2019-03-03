<template>
  <div id="pc">
    <h2>高一3班401寝室信息课作业</h2>
    <div id="qrcode">
      <img src="~img/qrcode_image.png" alt="扫描二维码查看">
      <p>请扫描二维码<br/>在手机上观看</p>
    </div>
    <p class="who"></p>
  </div>
</template>

<script>
export default {
  name: 'pc.vue',
};
</script>

<style scoped lang="scss">
  #pc {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url('~img/pc_bg.png');
    -webkit-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;

    h2 {
      font-size: 50px;
      height: 90px;
      width: 100%;
      text-align: center;
      color: #444;

      &:after {
        /*通过伪元素实现文字垂直居中*/
        content: '';
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 100%;
      }
    }

    #qrcode {
      width: 280px;
      height: 320px;
      background-color: #fff;
      border-radius: 30px;
      padding: 40px 20px 60px;
      margin: 30px auto;

      img {
        width: 230px;
        height: auto;
        margin: 0 auto;
      }

      p {
        padding-top: 20px;
        text-align: center;
        font-size: 28px;
      }
    }
  }
</style>
