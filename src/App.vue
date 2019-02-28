<template>
  <div id="app">
    <router-view/>
    <p>heiheihei</p>
  </div>
</template>

<style lang="scss">
  @import "~testAlias/test.scss";
  #app {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    background-image: url(~img/favicon_600.png);
  }
</style>
