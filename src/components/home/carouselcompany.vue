
<template>
  <div class="position-relative">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="first_div">
          <img
            src="../../assets/images/company_logo_slider.svg"
            class="img-fluid"
            alt="homeslider"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

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
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1370: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  height: 220px;
}
.swiper-button-next,
.swiper-button-prev {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #013299;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 16px;
  color: #fff;
}
.swiper-button-next {
  right: -44px;
  @media (max-width: 991px) {
    right: -2px;
  }
}
.swiper-button-prev {
  left: -44px;
  @media (max-width: 991px) {
    left: -2px;
  }
}
.swiper-slide {
  height: 197px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms linear;
  transform: scale(0.8);
  opacity: 17%;
  border-radius: 10px;
  &.swiper-slide-active {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 3px 0 #013299;
    @media (max-width: 768px) {
      width: 260px !important ;
      margin-left: 48px !important;
    }
    @media (min-width: 768px) and (max-width: 991px) {
      width: 350px !important ;
       margin-left: 170px !important;
    }
  }
}
.swiper-slide__content {
  height: 300px;
}
</style>