<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="box">
          <div class="inner-text">
            <img
              class="img-fluid"
              src="../../assets/images/sliderabout.png"
              alt="newcard img"
            />
            <div class="text-card">
              <h2>Our Mission</h2>
              <p>
                We import and distribute pharmaceuticals and medical pplianc-es
                of high quality and affordable prices for improving and
                extend-ing the life of an ever increasing number of patients in
                our coun-try. We meet current and future customer needs through
                continu-ous expansion of our products portfolio.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box">
          <div class="inner-text">
            <img
              class="img-fluid"
              src="../../assets/images/sliderabout.png"
              alt="newcard img"
            />
            <div class="text-card">
              <h2>Our Vision</h2>
              <p>
                We import and distribute pharmaceuticals and medical pplianc-es
                of high quality and affordable prices for improving and
                extend-ing the life of an ever increasing number of patients in
                our coun-try. We meet current and future customer needs through
                continu-ous expansion of our products portfolio.
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.box {
  font-family: Ubuntu-R;
  width: 110%;
  height: 550px;
  display: grid;
  place-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 470px;
  }
  @media (min-width: 991px) and (max-width: 1366px) {
    height: 445px;
  }
  .inner-text {
    width: 1104px;
    height: 301px;
    border-radius: 149px;
    background-image: linear-gradient(to left, #013299, #395faf);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding: 24.3px 0 10px 0;
    @media screen and (max-width: 768px) {
      width: 357px;
      height: auto;
      justify-content: center;
      border-radius: 10px;
    }
    @media (min-width: 991px) and (max-width: 1366px) {
      width: 1000px;
      height: 260px;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      width: 85%;
      height: 300px;
      justify-content: center;
      border-radius: 10px;
      margin: auto;
    }
    .text-card {
      h2 {
        font-size: 30px;
        text-align: start;
        color: #edeff5;
        font-family: Ubuntu-B;
        @media screen and (max-width: 991px) {
          text-align: left;
          font-size: 22px;
          padding: 5px 0 5px 10px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          font-size: 24px;
        }
      }
      p {
        width: 665px;
        font-size: 23px;
        max-width: 100%;
        line-height: 29px;
        color: var(--small-four-box-about);
        font-family: Ubuntu-R;
        text-align: left;
        place-self: flex-end;
        @media screen and (max-width: 991px) {
          width: 100%;
          font-size: 14px;
          text-align: left;
          padding: 0 10px;
        }
        @media (min-width: 991px) and (max-width: 1366px) {
          width: 634px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
             font-size: 20px;
              
        }
      }
    }
    img {
      position: absolute;
      left: -130px;
      top: 35%;
      width: 485.47px;
      transform: translateY(-50%);
      @media screen and (max-width: 991px) {
        display: none;
      }
      @media (min-width: 991px) and (max-width: 1366px) {
        width: 39%;
        left: -50px;
      }
    }
  }
}

// .swiper-pagination {

//   &::after {
//     content: "";
//     position: absolute;
//     top: 56%;
//     transform: translateY(-50%);
//     width: 9px;
//     height: 9px;
//     border-radius: 50%;
//     background-color: red;
//     margin: 0 4px;
//   }
// }
</style>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "carouselcompany",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>
