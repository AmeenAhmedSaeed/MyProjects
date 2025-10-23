<template>
  <div class="col-md-12 col-lg-6">
    <div class="box">
      <div class="inner-text">
        <div class="shape"></div>
        <div class="img_con">
          <img class="img-fluid" :src="product.src" alt="newcard img" />
        </div>
        <div class="text-card">
          <h2>+30</h2>
          <p>
            {{ product.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newcardtwo",
  props: ["product"],
};
</script>


<style lang="scss" scoped>
.box {
  width: 100%;
  height: 331.02px;
  display: grid;
  place-content: center;
  @media screen and (max-width: 767px) {
    height: 200px;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    height: 230px;
  }
  @media (min-width: 991px) and (max-width: 1366px) {
    height: 300px;
  }
  .inner-text {
    width: 519px;
    border-radius: 107px;
    background-image: linear-gradient(to left, #013299, #395faf);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    padding: 24.3px 0 10px 0;
    @media screen and (max-width: 767px) {
      width: 334px;
      height: 110px;
      text-align: left;
    }
    @media (min-width: 991px) and (max-width: 1366px) {
      width: 450px;
      height: 140px;
    }
    @media (min-width: 768px) and (max-width: 990px) {
       width: 500px;
      height: 150px;  
    }
    .text-card {
      width: 65%;
      padding-top: 10px;
      @media screen and (max-width: 767px) {
        width: 62%;
      }
      h2 {
        font-size: 30px;
        text-align: start;
        color: #edeff5;
        font-family: Ubuntu-B;
        @media screen and (max-width: 767px) {
          font-size: 22px;
        }
      }
      p {
        width: 303px;
        height: 71px;
        font-size: 1.25rem;
        line-height: 24px;
        color: var(--small-four-box-about);
        font-family: Ubuntu-R;
        text-align: left;
        place-self: flex-end;
        @media screen and (max-width: 767px) {
          width: 212px;
          height: 65px;
          font-size: 16px;
          line-height: 17.6px;
        }
      }
    }
    .shape {
      position: absolute;
      left: -97px;
      top: -28px;
      width: 243.97px;
      height: 227.4px;
      background: #8dc6f3;
      border-radius: 50% 50% 50% 50%/65% 65% 35% 35%;
      transform: rotate(-23deg);
      @media screen and (max-width: 767px) {
        width: 120px;
        height: 110px;
        left: -8px;
        top: 50%;
        transform: translateY(-50%) rotate(-23deg);
      }
      @media (min-width: 991px) and (max-width: 1366px) {
        width: 200px;
        height: 200px;
        left: -60px;
        top: 50%;
        transform: translateY(-50%) rotate(-23deg);
      }
      @media (min-width: 768px) and (max-width: 991px) {
        width: 170px;
        height: 140px;
        left: -8px;
        top: 50%;
        transform: translateY(-50%) rotate(-23deg);
      }
    }
    .img_con {
      width: 243.97px;
      height: 227.4px;
      background: #8dc6f3;
      border-radius: 63% 37% 29% 71% / 40% 34% 66% 60%;
      position: absolute;
      left: -100px;
      overflow: hidden;
      @media screen and (max-width: 767px) {
        width: 120px;
        height: 110px;
        left: -8px;
        top: 48%;
        transform: translateY(-48%);
      }
      @media (min-width: 768px) and (max-width: 991px) {
        width: 160px;
        height: 145px;
        left: -8px;
        top: 48%;
        transform: translateY(-48%);
      }
      @media (min-width: 991px) and (max-width: 1366px) {
        width: 200px;
        height: 190px;
        left: -62px;
        top: 48%;
        transform: translateY(-48%);
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>