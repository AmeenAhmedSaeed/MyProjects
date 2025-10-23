<template>
  <div class="subnews">
    <div class="first-section">
      <div class="container">
        <div class="first-row">
          <div class="row">
            <div class="col second-col">
              <div class="small-card card" style="width: 100%; height: 100%">
                <img
                  src="../../assets/images/verybigcard_subnews.svg"
                  alt="verybigcard"
                />
                <div class="card-body text-md-start">
                  <span class="badge bg-secondary">20 jan 2022</span>
                  <h5 class="card-title">Get to know the sinovac vaccine</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, nulla quae possimus id fugit totam
                    perspiciatis ad consequatur natus dolores unde ipsa,
                    architecto,dignissimos corrupti explicabo provident debitis
                    suscipit, beatae!
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi pariatur, voluptatum molestiae voluptas ducimus tempora
                    numquam eligendi quos, quia aut quidem et, odio deleniti
                    amet natus accusamus fugit! Temporibus, tenetur. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Esse
                    voluptatem, ea, quisquam vero ullam nesciunt recusandae
                    expedita similique nisi! Ducimus, reiciendis, quia.
                    Explicabo minima error excepturi minus, aperiam illum fugit.
                  </p>
                  <p class="card-text speacial">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse voluptatem, ea, quisquam vero ullam nesciunt recusandae
                    expedita similique nisi! Ducimus, reiciendis, quia.
                    Explicabo minima error excepturi minus, aperiam illum fugit.
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, nulla quae possimus id fugit totam
                    perspiciatis ad consequatur natus dolores unde ipsa,
                    architecto,dignissimos corrupti explicabo provident debitis
                    suscipit, beatae!
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi pariatur, voluptatum molestiae voluptas ducimus tempora
                    numquam eligendi quos, quia aut quidem et, odio deleniti
                    amet natus accusamus fugit! Temporibus, tenetur. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Esse
                    voluptatem, ea, quisquam vero ullam nesciunt recusandae
                    expedita similique nisi! Ducimus, reiciendis, quia.
                    Explicabo minima error excepturi minus, aperiam illum fugit.
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus, nulla quae possimus id fugit totam
                    perspiciatis ad consequatur natus dolores unde ipsa,
                    architecto,dignissimos corrupti explicabo provident debitis
                    suscipit, beatae!
                  </p>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi pariatur, voluptatum molestiae voluptas ducimus tempora
                    numquam eligendi quos, quia aut quidem et, odio deleniti
                    amet natus accusamus fugit! Temporibus, tenetur. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Esse
                    voluptatem, ea, quisquam vero ullam nesciunt recusandae
                    expedita similique nisi! Ducimus, reiciendis, quia.
                    Explicabo minima error excepturi minus, aperiam illum fugit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="second-row">
          <div class="row gy-3">
            <h2>similar articles</h2>
            <card v-for="card in cards" :key="card.id" :card="card" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import card from "@/components/news/card.vue";
export default {
  components: { card },
  name: "Subnewsviews",
   data() {
    return {
      
      cards: [
        {
          id: 1,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("/src/assets/images/docotorhome.svg"),
        },
        {
          id: 2,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("/src/assets/images/docotorhome.svg"),
        },
        {
          id: 3,
          date: "20 jan 2022",
          title: "Get to know the sinovac vaccine",
          parg: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          goto: "Read More",
          src: require("/src/assets/images/docotorhome.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.first-row {
  font-family: Ubuntu-R;
  padding-top: 144px;
  padding-bottom: 96px;
  @media (max-width:991px) {
     padding-top: 100px;
  }
  .second-col {
    .small-card {
      border: none;
      box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
      padding: 24px;
      border-radius: 20px;
      .card-body {
        padding: 0;
        padding-top: 39px;
        span {
          font-size: 18px;
          font-weight: normal;
          background-color: #e2f3ff !important;
          color: #1d8d99;
          border-radius: 10px !important;
          padding: 12px;
          width: fit-content;
          @media (max-width: 768px) {
            font-size: 14px;
            display: flex;
          }
        }
        h5 {
          font-size: 3rem;
          line-height: 55px;
          color: var(--color_text_buttontwo);
          margin-top: 24px;
          margin-bottom: 24px;
          font-family: Ubuntu-M;
          @media (max-width: 768px) {
            font-size: 20px;
            text-align: left;
            margin-bottom: 16px;
            margin-top: 8px;
          }
        }
        p {
          line-height: 38.4px;
          color: rgb(112, 112, 112, 100%);
          font-size: 1.5rem;
          position: relative;
          @media (max-width: 768px) {
            font-size: 14px;
            text-align: left;
          }
        }
        .card-text.speacial {
          padding-left: 24px;
        }
        .card-text.speacial::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          height: 85%;
          width: 10px;
          background-color: #1d8d99;
          transform: translateY(-50%);
        }
        .read_more {
          display: flex;
          align-items: center;
          column-gap: 10px;
          justify-content: flex-end;
          a {
            text-decoration: none;
            color: var(--color_text_buttontwo);
            font-weight: 600;
          }
          svg {
            font-weight: 600;
          }
        }
      }
    }
  }
}
.second-row {
  padding-bottom: 40px;
  h2 {
    font-size: 3rem;
    color: var(--color_text_buttontwo);
    text-align: left;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      font-size: 40px;
      text-align: center;
    }
  }
}
</style>