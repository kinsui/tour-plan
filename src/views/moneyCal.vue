<template>
  <div id="money">
    <svg class="icon cal" aria-hidden="true">
      <use xlink:href="#icon-calculate"></use>
    </svg>
    <span class="cost">&nbsp;&nbsp;已花费：¥&nbsp;&nbsp;<span class="costNum">{{cost}}</span></span>
  </div>
</template>

<script>
export default {
  name: 'moneyCal',
  props: {
    cost: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
  #money {
    position: fixed;
    top: 0;
    width: calc(100% - 0.2rem);
    height: 0.8rem;
    padding: 0.1rem 0.3rem;
    z-index: 99;

    .cal {
      width: 0.8rem;
      height: 0.8rem;
      float: left;
    }

    .cost {
      float: left;
      line-height: 0.8rem;
      font-size: 0.38rem;
      color: #B62840;
      .costNum{
        color:#DD4A42;
        font-weight: bold;
      }
    }
  }
</style>
