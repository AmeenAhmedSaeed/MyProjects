<template>
  <div class="about">
    <div class="first-blocks" id="first-blocks">
      <div class="container">
        <div class="row align-items-center first-block">
          <div class="first-col col-sm-12 col-lg-6 mb-sm-5">
            <h2>About us</h2>
            <h1>Who We Are</h1>
            <div class="scroll-pargrah">
              <p>
                Royal Pharma was founded in 2006 by Dr. Talal Al-Subbary as a
                pharmaceuticals importing and distribution company. It has
                es-tablished a substantial pharmaceutical business with turnover
                in recent years ranging between 20 and 25 million US Dollars.
                The company headquarter is based in Sana’a, the capital of
                Yemen, and have branches covering the whole geography of Yemen.
                Royal Pharma is an integrated pharmaceuticals and medical
                ap-pliances trading company focuses on importing and
                distributing generic pharmaceutical products, medical equipment
                and appli-ances. We market more than 150 products manufactured
                by more than 20 foreign companies, through operations in various
                ter-ritories of our country.
              </p>
            </div>
          </div>
          <div class="second-col col-lg-6 col-sm-12">
            <img
              class="img-fluid"
              src="../assets/images/doctor_firstblock_about.png"
              alt="doctor"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Section three  -->
    <div class="section-three" id="section-three">
      <h2>Our Mission & vision</h2>
      <div class="silde">
        <div class="container">
          <carouselabout />
        </div>
      </div>
      <div class="sub-section">
        <div class="row g-0">
          <div class="col-2 first"></div>
          <div class="col-sm-12 col-md-8 second">
            <div class="row">
              <div class="first-col col-sm-12 col-md-6 mb-sm-5 py-md-5">
                <h2>Managing Director Message</h2>
                <div class="scroll-pargrah">
                  <p>
                    Starting our transformation toward a new and reformed Royal
                    PharmaAs we celebrate our 13th anniversary in 2019, we are
                    truly grateful for all of our employees, business partners
                    and customers for their continuous support. Since the
                    company was established in 2006, Royal Pharma has gone
                    through several growth and development stages until it
                    reached its current status as a major supplier of
                    pharmaceuticals and medical devices in Yemen.The local
                    business environment has experienced drastic changes in the
                    last The local business environment has experienced drastic
                    changes in the last few years. The exit of major local
                    suppliers of pharmaceuticals and medical devices from the
                    market and the entry of more competitive new ones have
                    re-sulted in opportunities as well as threats. Furthermore,
                    the deteriorating so-cio-economic status and the changing
                    geopolitical landscape in Yemen makes the survival of
                    existing business a great challenge. With facing such
                    challenges, we at Royal Pharma are required to achieve a
                    dramatic reform and a major shift from a corporate that
                    largely depends on distributing highly competitive and low
                    priced pharmaceuticals to an enter-prise that provides
                    specialty products and medical solutions. This is while
                    keep-ing focused on the existing business model and
                    philosophy. By encouraging our staff members to proactively
                    identify perpetually chang-ing market needs and discover new
                    opportunities, Royal Pharma will be much better equipped to
                    double its turnover via expanding the range of product
                    portfolio and proposing an appropriate medical solutions.
                    Our goal is to drive growth and expand our market presence
                    in key therapeu- tic categories, particularly within
                    prescription pharmaceutical business and lifesaving
                    therapeutic solutions. Furthermore but not less important,
                    we shall im-prove our compliance to the international
                    regulatory standards pertaining to storage and distribution
                    of pharmaceutical and medical devices products. We will also
                    look to further expand and diversify our portfolio and
                    optimize the potential of our local commercial network.We
                    want to be judged by our customers on our adherence to our
                    business and scientific values that constitute the core of
                    our philosophy. Thanks a lot for our customers and employee
                    for the trust they place on Royal Pharma, we will continue
                    to do all we can to live up to this trust.
                  </p>
                </div>
              </div>
              <div class="second-col col-md-6 col-sm-12">
                <div class="shape"></div>
                <div class="img_con">
                  <img class="img-fluid" :src="image" alt="newcard" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
      </div>
    </div>

    <!-- Last Section -->
    <div class="last-section" id="last-section">
      <div class="container">
        <h2>Our Principles And Values</h2>
        <div class="sub-last-section">
          <div class="row align-items-center justify-content-between g-0">
            <div class="col-lg-6">
              <img
                src="../assets/images/ourprinciple_about.png"
                class="img-fluid"
                alt="principles"
              />
            </div>
            <div class="col-lg-5">
              <div class="principles-content">
                <ul class="tabs-choose">
                  <li
                    @click="activeTab = '1'"
                    :class="[activeTab === '1' ? 'active' : '']"
                  >
                    Quality
                  </li>
                  <li
                    @click="activeTab = '2'"
                    :class="[activeTab === '2' ? 'active' : '']"
                  >
                    Responsibility
                  </li>
                  <li
                    @click="activeTab = '3'"
                    :class="[activeTab === '3' ? 'active' : '']"
                  >
                    Integrity
                  </li>
                  <li
                    @click="activeTab = '4'"
                    :class="[activeTab === '4' ? 'active' : '']"
                  >
                    Reliability
                  </li>
                </ul>
                <div class="tabs-content">
                  <div class="content-one" v-if="activeTab === '1'">
                    <h4>Quality</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                  <div class="content-one" v-if="activeTab === '2'">
                    <h4>Responsibility</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                  <div class="content-one" v-if="activeTab === '3'">
                    <h4>Integrity</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                  <div class="content-one" v-if="activeTab === '4'">
                    <h4>Reliability</h4>
                    <p>
                      We guarantee providing pharmaceuticals and medical
                      equipment and appliances productswith a high level of
                      quality and safety . This can only be achieved via andfull
                      compliance by respecting our policies ,principles and
                      standardswith full transparency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carouselabout from "@/components/about/carouselabout.vue";
import image from "../assets/images/medium-shot-nurse-doctor-checking-patient.svg"
export default {
  name: "aboutview",
  components: {
    carouselabout,
  },
  data() {
    return {
      activeTab: "1",
      image: image,
    };
  },
  mission: [
    {
      id: 1,
      txt: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
      src: require("../assets/images/card_our_people_about.png"),
    },
    {
      id: 2,
      txt: "Governmental Hospitals, including the top 10 major hospitals in Yemen",
      src: require("../assets/images/card_our_people_about.png"),
    },
  ],
 
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/_about.scss";
</style>