<template>
  <div id="tour">
    <moneyCal v-if="afterMouted" :cost="cost[activeIndex]"></moneyCal>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide class="t1">
        <div class="tourPlace">
          <div class="baike" @click="showBaike">
            <div class="imgWrap">
              <img src="~img/juzizhou.png" alt="橘子洲">
            </div>
            <p>点击查看详情~</p>
          </div>
          <div class="typeTextWrap" v-if="afterMouted">
            <vue-typer :text='text[activeIndex]'
                       :pre-type-delay='1000' caret-animation='expand'
                       eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="t2">
        <div class="tourPlace">
          <div class="baike" @click="showBaike">
            <div class="imgWrap">
              <img src="~img/zhusu.jpg" alt="住宿--栖间楠院">
            </div>
            <p>点击查看详情~</p>
          </div>
          <div class="typeTextWrap" v-if="afterMouted">
            <vue-typer :text='text[activeIndex]'
                       :pre-type-delay='1000' caret-animation='expand'
                       eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="t3">
        <div class="tourPlace">
          <div class="baike" @click="showBaike">
            <div class="imgWrap">
              <img src="~img/haidishijie.png" alt="海底世界">
            </div>
            <p>点击查看详情~</p>
          </div>
          <div class="typeTextWrap" v-if="afterMouted">
            <vue-typer :text='text[activeIndex]'
                       :pre-type-delay='1000' caret-animation='expand'
                       eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="t4">
        <div class="tourPlace">
          <div class="baike" @click="showBaike">
            <div class="imgWrap">
              <img src="~img/nanmenkou.jpg" alt="南门口">
            </div>
            <p>点击查看详情~</p>
          </div>
          <div class="typeTextWrap" v-if="afterMouted">
            <vue-typer :text='text[activeIndex]'
                       :pre-type-delay='1000' caret-animation='expand'
                       eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="t5">
        <div class="tourPlace">
          <div class="baike" @click="showBaike">
            <div class="imgWrap">
              <img src="~img/shijiezhichuang.png" alt="长沙世界之窗">
            </div>
            <p>点击查看详情~</p>
          </div>
          <div class="typeTextWrap" v-if="afterMouted">
            <vue-typer :text='text[activeIndex]'
                       :pre-type-delay='1000' caret-animation='expand'
                       eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="t6">
        <div class="tourPlace">
          <div class="baike" @click="showBaike">
            <div class="imgWrap">
              <img src="~img/hunandaxue.jpg" alt="湖南大学">
            </div>
            <p>点击查看详情~</p>
          </div>
          <div class="enterWrap">
            <router-link :to="{name:'train',params:{goOrBack:false}}" class="enter">
              <span class="enterText">回家</span>
              <span class="enterIcon">&gt;</span>
            </router-link>
          </div>
          <div class="typeTextWrap" v-if="afterMouted">
            <vue-typer :text='text[activeIndex]'
                       :pre-type-delay='1000' caret-animation='expand'
                       eraseStyle="backspace" :preEraseDelay="3000" :eraseDelay="32"></vue-typer>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-h" slot="pagination"></div>
    </swiper>
    <transition name="custom-classes-transition"
                enter-active-class="animated zoomIn"
                leave-active-class="animated zoomOut">
      <div class="myIframe" v-show="iframeShowFlag">
        <vue-friendly-iframe :src="link[activeIndex]" v-if="afterMouted">
        </vue-friendly-iframe>
        <div class="close" @click="closeIframe">×</div>
      </div>
    </transition>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'tour',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        direction: 'vertical',
        // effect: 'flip',
        pagination: {
          el: '.swiper-pagination-h',
          clickable: true,
        },
      },
      link: [
        'https://www.baidu.com/sf_bk/item/%E6%A9%98%E5%AD%90%E6%B4%B2%E9%A3%8E%E6%99%AF%E5%8C%BA/19486567?ms=1&rid=10851221585781847091',
        'https://m.mayi.com/room/854332249',
        'https://baike.baidu.com/item/%E9%95%BF%E6%B2%99%E6%B5%B7%E5%BA%95%E4%B8%96%E7%95%8C',
        'https://baike.baidu.com/item/%E5%8D%97%E9%97%A8%E5%8F%A3/3939591',
        'https://baike.baidu.com/item/%E9%95%BF%E6%B2%99%E4%B8%96%E7%95%8C%E4%B9%8B%E7%AA%97',
        'https://baike.baidu.com/item/%E5%B2%B3%E9%BA%93%E4%B9%A6%E9%99%A2/206944',
      ],
      iframeShowFlag: false,
      cost: [1041, 1626, 2046, 3276, 4356, 4356],
      text: [
        '从长沙南站坐地铁到橘子洲\n坐船游玩整个橘子洲\n花费:(4+60)×6=384',
        '五个人合住在一间民宿\n安全又舒适⸜(* ॑꒳ ॑* )⸝\n三晚的住宿费总共585',
        '坐公交去海底世界\n🐟🐟🐟🐟🐟\n花费:(65+5)×6=420',
        '搭车到长沙南门口闹市街\n吃吃吃+买买买\n预计消费:(200+5)×6=1230',
        '长沙世界之窗\n开拓眼界~博古通今\n花费:180×6=1080',
        '徒步湖南大学\n岳麓书院，向往的学府\n花费:0',
      ],
      afterMouted: false,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    activeIndex() {
      return this.swiper.activeIndex;
    },
  },
  methods: {
    closeIframe() {
      this.iframeShowFlag = false;
    },
    showBaike() {
      this.iframeShowFlag = true;
    },
  },
  mounted() {
    this.afterMouted = true;
  },
};
</script>

<style lang="scss">
  .animated {
    -webkit-animation-duration: .5s;
    animation-duration: .5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  #tour {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .myIframe {
      position: absolute;
      top: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 6.6rem;
      height: 7rem;
      z-index: 5;
      padding: 0.3rem;
      background-color: #FED083;
      border-radius: .15rem;

      .close {
        position: absolute;
        right: -0.13rem;
        top: -0.28rem;
        width: 0.8rem;
        height: 0.8rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        background-color: #DD4A42;
        font-size: .7rem;
        font-weight: 900;
      }

      .vue-friendly-iframe {
        width: 100%;
        height: 100%;

        iframe {
          width: 100%;
          height: 100%;
          border: 0;

          &::-webkit-scrollbar {
            width: 5px;
            height: 8px;
            background-color: #aaa;
          }
        }
      }

    }

    .swiper {
      width: 100%;
      height: 100%;

      .t6 {
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
          bottom: 0.05rem;

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

      .swiper-pagination {
        background-color: #465C50;
        border-radius: 1rem;
      }

      .tourPlace {
        width: 100%;
        height: calc(100% - 1.8rem);
        box-sizing: padding-box;
        padding-top: 1.8rem;
        background-color: #151C24;
        background-image: url('~img/bg_2.png');
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 0 6rem;

        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 1.8rem;
          float: top;
        }

        .baike {
          width: 6.2rem;
          height: 4rem;
          margin: 0 auto;
          padding: 0.2rem;
          background-color: #273535;
          border-radius: .32rem;

          .imgWrap {
            width: 6rem;
            height: 3.6rem;
            overflow: hidden;
            margin: 0 auto;
            border-radius: .03rem;
            font-size: 0;

            img {
              width: 6rem;
              height: auto;
            }
          }

          p {
            padding-top: .1rem;
            font-size: .28rem;
            text-align: center;
            line-height: .28rem;
            color: #31FF8E;
          }

        }

        .typeTextWrap {
          margin: 3.3rem auto 0 auto;
          text-align: center;
          width: 100%;
          min-height: 1.8rem;

          .vue-typer .custom.char.typed {
            color: #FF636E;
            font-size: .38rem;
          }
        }
      }

    }
  }
</style>
