<template>
  <div>
    <div class="news" v-if="cards.length > 0">
      <div class="news-content">
        <div class="container">
          <div class="row">
            <div class="col-md-8 first_col">
              <div class="big-card card" style="width: 100%; height: 100%">
                <img :src="cards[0].src" class="img-fluid" alt="bigpicture" />
                <div class="card-body text-start">
                  <span class="badge bg-secondary">{{ cards[0].date }}</span>
                  <h5 class="card-title">Get to know the sinovac vaccine</h5>

                  <p class="card-text" v-if="!isMobile">
                    {{ cards[0].parg }}
                  </p>
                  <p class="card-text" v-else>
                    {{ cards[0].parg.substring(80, 0) }}
                  </p>
                  <span class="read_more">
                    <a
                      ><router-link :to="`/news/${cards[0].id}`">{{
                        cards[0].goto
                      }}</router-link></a
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.829"
                      height="11.947"
                      viewBox="0 0 16.829 11.947"
                    >
                      <g
                        id="Group_1438"
                        data-name="Group 1438"
                        transform="translate(1.151 0.848)"
                      >
                        <line
                          id="Line_3"
                          data-name="Line 3"
                          y1="0.372"
                          x2="15"
                          transform="translate(-0.383 5.122)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_4"
                          data-name="Line 4"
                          y1="5"
                          x2="5"
                          transform="translate(9.617 5.039)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_5"
                          data-name="Line 5"
                          x2="5"
                          y2="5"
                          transform="translate(9.617 0.212)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-4 second-col">
              <div class="small-card card" style="width: 100%">
                <img
                  class="img-fluid"
                  :src="cards[1].src"
                  alt="Card image cap"
                />
                <div class="card-body text-start">
                  <span class="badge bg-secondary">{{ cards[1].date }}</span>
                  <h5 class="card-title">{{ cards[1].title }}</h5>
                  <p class="card-text">
                    {{ cards[1].parg }}
                  </p>
                  <span class="read_more">
                    <a
                      ><router-link :to="`/news/${cards[1].id}`">{{
                        cards[1].goto
                      }}</router-link></a
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.829"
                      height="11.947"
                      viewBox="0 0 16.829 11.947"
                    >
                      <g
                        id="Group_1438"
                        data-name="Group 1438"
                        transform="translate(1.151 0.848)"
                      >
                        <line
                          id="Line_3"
                          data-name="Line 3"
                          y1="0.372"
                          x2="15"
                          transform="translate(-0.383 5.122)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_4"
                          data-name="Line 4"
                          y1="5"
                          x2="5"
                          transform="translate(9.617 5.039)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_5"
                          data-name="Line 5"
                          x2="5"
                          y2="5"
                          transform="translate(9.617 0.212)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <div class="small-card card" style="width: 100%">
                <img
                  class="card-img-top img-fluid"
                  :src="cards[2].src"
                  alt="Card image cap"
                />
                <div class="card-body text-start">
                  <h3>
                    <span class="badge bg-secondary"> {{ cards[2].date }}</span>
                  </h3>
                  <h5 class="card-title">{{ cards[2].title }}</h5>
                  <p class="card-text">
                    {{ cards[2].parg }}
                  </p>
                  <span class="read_more">
                    <a
                      ><router-link :to="`/news/${cards[2].id}`">{{
                        cards[2].goto
                      }}</router-link></a
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.829"
                      height="11.947"
                      viewBox="0 0 16.829 11.947"
                    >
                      <g
                        id="Group_1438"
                        data-name="Group 1438"
                        transform="translate(1.151 0.848)"
                      >
                        <line
                          id="Line_3"
                          data-name="Line 3"
                          y1="0.372"
                          x2="15"
                          transform="translate(-0.383 5.122)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_4"
                          data-name="Line 4"
                          y1="5"
                          x2="5"
                          transform="translate(9.617 5.039)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                        <line
                          id="Line_5"
                          data-name="Line 5"
                          x2="5"
                          y2="5"
                          transform="translate(9.617 0.212)"
                          fill="none"
                          stroke="#013299"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="row second-row">
            <cards v-for="card in cards.slice(3)" :key="card.id" :card="card" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="no_data">
      <div class="innerdiv">
        <img src="../assets/images/nodata.svg" class="img-fluid" alt="nodata" />
        <h2><span>D</span>ata Not Found !</h2>
      </div>
    </div>
  </div>
</template>

<script>
import cards from "@/components/news/card.vue";
export default {
  components: { cards },
  name: "NewsView",
  data() {
    return {
      userId: this.$route.params.userId,
      isMobile: false,
      cards: [
        {
            id: 0,
            date: "20 jan 2022",
            title: "Get to know the sinovac vaccine",
            parg: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nulla quae possimus id fugit totamperspiciatis ad consequatur natus dolores unde ipsa, architecto,dignissimos corrupti explicabo provident debitis suscipit, beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nulla quae possimus id fugit totamperspiciati  ad consequatur natus dolores unde ipsa, architecto,dignissimos corrupti explicabo provident debitis suscipit, beatae! Lo  ipsum dolor sit amet, consectetur adipisicing elit dignissimos corrupti explicabo provident debitis suscipit, beatae! Lo  ipsum dolor sit amet, consectetur adipisicing elit dignissimos corrupti explicabo provident debitis suscipit, beatae! Lo  ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nulla quae possimus id fugit totamperspiciatis ad consequatur natus dolores unde ipsa, architecto,dignissimos corrupti explicabo provident debitis suscipit, beatae! Lorem ipsum dolor sit amet, consectetur adipisicing",
            goto: "Read More",
            src: require("../assets/images/bigphoto_news.svg"),
        },
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
            parg: "Yassin ipsum dolor sit amet, consectetur adipiscing",
            goto: "Read More",
            src: require("../assets/images/docotorhome.svg"),
        },
        {
            id: 4,
            date: "20 jan 2022",
            title: "Get to know the sinovac vaccine",
            parg: "Yassin2 ipsum dolor sit amet, consectetur adipiscing",
            goto: "Read More",
            src: require("../assets/images/docotorhome.svg"),
        },
        {
            id: 5,
            date: "20 jan 2022",
            title: "Get to know the sinovac vaccine",
            parg: "Yassin3 ipsum dolor sit amet, consectetur adipiscing",
            goto: "Read More",
            src: require("../assets/images/docotorhome.svg"),
        },
        {
            id: 6,
            date: "20 jan 2022",
            title: "Get to know the sinovac vaccine",
            parg: "Yassin3 ipsum dolor sit amet, consectetur adipiscing",
            goto: "Read More",
            src: require("../assets/images/docotorhome.svg"),
        },
        {
            id: 7,
            date: "20 jan 2022",
            title: "Get to know the sinovac vaccine",
            parg: "Yassin3 ipsum dolor sit amet, consectetur adipiscing",
            goto: "Read More",
            src: require("../assets/images/docotorhome.svg"),
        },
        {
            id: 8,
            date: "20 jan 2022",
            title: "Get to know the sinovac vaccine",
            parg: "Yassin3 ipsum dolor sit amet, consectetur adipiscing",
            goto: "Read More",
            src: require("../assets/images/docotorhome.svg"),
        },
      ],
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
  methods: {
    isMobile() {
      if (screen.width <= 760) {
        return true;
      } else {
        return false;
      }
    },
    onResize() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/pages/_news.scss";
</style>