<template>
  <div>
    <!-- Section first -->
    <div class="fourth_section" id="fourth_section">
      <div class="container">
        <div class="text">
          <h3>Our People</h3>
          <p>
            At Royal Pharma, we Rely on a strong team of certified and quali-
            fied sales and marketing persons, engineers, quality assurance
            specialists and others. They have always been our main driver of
            growth, without whom it would have been impossible to guaran- tee
            quality of our services
          </p>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/images/firstcardphoto_about.svg"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>5</span>
                  <p>quality assurance & regulatory affairs specialists</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/images/secondcardphoto_about.svg"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>40</span>
                  <p>pharmacists</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/images/thiredcardphoto_about.svg"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>30</span>
                  <p>Sales Persons</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/images/fourthcardphoto_about.svg"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>15</span>
                  <p>Logistics & Supply Chain Persons</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/images/firstcardphoto_about.svg"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>24</span>
                  <p>Financial , commercial & administrative person</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="big-card">
              <div class="small-card">
                <img
                  src="../assets/images/fifthcardphoto_about.svg"
                  class="img-fluid"
                  alt="photo of card"
                />
                <div class="card-info d-flex">
                  <span>6</span>
                  <p>Engineers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="con-box">
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>5</span>
                <p>quality assurance & regulatory affairs specialists</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>40</span>
                <p>pharmacists</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>30</span>
                <p>Sales Persons</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>15</span>
                <p>Logistics & Supply Chain Persons</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-start">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>24</span>
                <p>Financial , commercial & administrative person</p>
              </div>
            </div>
          </div>
          <div class="big-card d-flex justify-content-center">
            <div class="small-card d-flex justify-content-center">
              <img
                src="../assets/about/Group 1424.png"
                class="img-fluid"
                alt="photo of card"
              />
              <div class="card-info d-flex">
                <span>6</span>
                <p>Engineers</p>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- Section three -->
    <div class="fifth_section" id="fifth_section">
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
          <h2>Royal Pharmain Yemen</h2>
        </div>
        <div class="row">
          <newcards
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>

    <div class="section_six" id="section_six">
      <h2>2018 Business Heights</h2>
      <div class="first-div">
        <div class="row">
          <div class="col-lg-2 first"></div>
          <div class="col-lg-8 col-sm-12 second">
            <div class="business-height-content">
              <div class="row algin-items-center justify-content-center">
                <div class="col-sm-12 col-lg-7">
                  <p>
                    Royal Pharma products are marketed under 2 main divisions.
                    Pharmaceutical division that market and sells generic
                    pharmaceuticals, and Innova Pharma division that market and
                    sells Medical equipment, IV infusions and hospital products.
                    The total sales of Royal Pharma in both divisionsexceeded 20
                    US Million Dollars in 2022
                  </p>
                </div>
                <div class="col-sm-12 col-lg-5 right-side">
                  <h2>2022 Sales by division</h2>
                  <Doughnut />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2"></div>
        </div>
      </div>
      <div class="second-div">
        <div class="row g-0">
          <div class="col-lg-2"></div>
          <div class="col-lg-8 col-sm-12 second">
            <div class="business-height-content">
              <div class="row justify-content-center flex-row-reverse">
                <div class="col-sm-12 col-lg-7">
                  <h2>Outstanding 2012 Financial Resuits</h2>
                  <p>
                    Total revenue in 2018 grew to $20.8million, a remarkable
                    increase since 2012. Our growth continues to be driven by
                    our internal investment in expanding our prod- ucts
                    portfolio. Our pipeline today is among the strongest in the
                    local market. local market.
                  </p>
                </div>
                <div class="col-sm-12 col-lg-5 right-side">
                  <h2>Strong, Sustainable financial foundation</h2>

                  <BarChart />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 first"></div>
        </div>
      </div>
    </div>

    <!-- Section Seven -->
    <div class="section_seven" id="section_seven">
      <div class="container">
        <h2>Our Infrastructures</h2>
        <div class="box">
          <div class="srv-box">
            <span>6000</span>
            <p>Square Meter Strong facilities</p>
          </div>
          <div class="srv-box">
            <span>120</span>
            <p>Transportation vehicles of various capacities</p>
          </div>
          <div class="srv-box">
            <span>6000</span>
            <p>Square Meter office buildings as a total</p>
          </div>
        </div>
        <div class="boxtwo">
          <div class="back">
            <div class="text-content">
              <h2>Social Responssibility</h2>
              <p>
                At Royal Pharma We feel responsibility towards the society and
                the areas in which we operate. We adhere to the laws of the
                countries where we do business. We also believe that "It is
                normal to help", and therefore we invest significant financial
                resources in the nonprofit sector every year. This especially
                involves the areas of relief, health care and education.
              </p>
            </div>
            <div class="front"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Doughnut from "@/components/marketing/Doughnut.vue";
import newcards from "../components/marketing/newcard.vue";
import BarChart from "@/components/marketing/BarChart.vue";

export default {
  name: "marketingview",
  components: {
    newcards,
    Doughnut,
    BarChart,
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/_marketing.scss";
</style>