<template>
  <div class="home">
    <div class="first-section" id="first-section">
      <app-headertwo />
      <div class="container">
        <div class="row align-items-center pad-to-row">
          <div class="text-md-start col-lg-6">
            <div class="text-div">
              <h1>A True Devotion to</h1>
              <h4>A deep passion for Healthcare</h4>
              <p>
                Royal Pharma was founded in 2006 by Dr. Talal AL-Shbbary as a
                pharmaceuticals importing and distribution company.
              </p>
            </div>
            <div class="left-btn d-flex justify-content-end">
              <router-link :to="{ name: 'about' }">Read More</router-link>
            </div>
          </div>
          <div class="col-lg-6 two-second">
            <img
              class="img-fluid"
              src="../assets/images/royalpharmarahome.png"
              alt="left_logo"
            />
          </div>
          <a class="newscroll" href="#second-section">
            <div class="scroll">
              <div class="scrolldown">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <p>Scroll</p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="second-section" id="second-section">
      <div class="container">
        <h2>Our Offerings</h2>
        <div class="sub-second-section">
          <div class="row first-row gx-2">
            <div class="col-lg-4" style="z-index: 13">
              <ouroffering />
            </div>
            <div class="col-lg-4" style="z-index: 12">
              <ouroffering />
            </div>
            <div class="col-lg-4" style="z-index: 11">
              <ouroffering />
            </div>
          </div>
          <div class="row justify-content-center second-row">
            <div class="col-lg-4" style="z-index: 10">
              <ouroffering />
            </div>
            <div class="col-lg-4">
              <ouroffering />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thired-section" id="thired-section">
      <div class="container">
        <h2>latest News</h2>
        <div class="subsection">
          <div class="row gy-3">
            <card v-for="card in cards" :key="card.id" :card="card" />
          </div>
        </div>
      </div>
    </div>
    <div class="fourth-section" id="fourth-section">
      <img
        src="../assets/images/right_our_people_home.svg"
        class="img-fluid svg_one"
        alt="svg_one"
      />
      <img
        src="../assets/images/left_our_people_home.svg"
        class="img-fluid svg_two"
        alt="svg_two"
      />
      <div class="container">
        <div class="text text-center">
          <h2>Our People</h2>
        </div>
        <div class="row">
          <newcardtwo
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
    <div class="fifth_section" id="fifth_section">
      <div class="container">
        <div class="head text-center">
          <h2>Our Global Partners</h2>
          <p>
            Royal Pharma invests in strategic partnerships with many
            international firms manufacturing a wide range of products covering
            the majority of healthcare sector. Since 2006, the company has
            gained more than 40+ profitable exclusive distribution agreements
            from many foreign companies.
          </p>
        </div>
        <carouselcompany />
      </div>
    </div>
  </div>
</template>

<script>
import carouselcompany from "@/components/home/carouselcompany.vue";
import card from "@/components/news/card.vue";
import newcardtwo from "@/components/home/newcardtwo.vue";
import appHeadertwo from "@/components/global/appHeadertwo.vue";
import ouroffering from "@/components/home/ourOffering.vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    carouselcompany,
    card,
    newcardtwo,
    appHeadertwo,
    ouroffering,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/images/frontcard.svg"),
        },
        {
          id: 2,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/images/frontcard.svg"),
        },
        {
          id: 3,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/images/frontcard.svg"),
        },
        {
          id: 4,
          text: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
          src: require("../assets/images/frontcard.svg"),
        },
      ],
      cards: [
        {
          id: 1,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("../assets/images/docotorhome.svg"),
        },
        {
          id: 2,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("../assets/images/docotorhome.svg"),
        },
        {
          id: 3,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("../assets/images/docotorhome.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/assets/scss/pages/_home.scss";
</style>

