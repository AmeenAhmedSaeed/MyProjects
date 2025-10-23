<template>
  <div class="third-col col-md-6 col-lg-4">
    <div class="small-card card">
      <img class="img-fluid" :src="card.src" alt="Card image cap" />
      <div class="card-body text-start">
        <span class="badge bg-secondary">{{ card.date }}</span>
        <h5 class="card-title">
          {{
            card.title.length < 32
              ? card.title
              : card.title.substring(0, 32) + "..."
          }}
        </h5>
        <p class="card-text">
          {{ card.parg }}
        </p>
        <span class="read_more">
          <a><router-link :to="`/news/${card.id}`">{{ card.goto }}</router-link></a>
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
</template>

<script>
export default {
  name: "cards",
  props: ["card"],
};
</script>


<style lang="scss" scoped>
.third-col {
  font-family: Ubuntu-R;
  .small-card {
    border: none;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 16%);
    padding: 16px;
    border-radius: 20px;
    @media (max-width: 991px) {
      padding: 12px;
    }
    .card-body {
      @media (max-width: 991px) {
        padding: 15px 8px 5px 5px;
      }
      span:nth-child(1) {
        font-size: 16px;
        font-weight: normal;
        background-color: #e2f3ff !important;
        color: #1d8d99;
        padding: 11px 8px;
        border-radius: 10px;
        margin-bottom: 12px;
        @media (max-width: 991px) {
          font-size: 14px;
        }
      }
      h5 {
        font-size: 24px;
        font-family: Ubuntu-B;
        line-height: 35px;
        @media (max-width: 991px) {
          font-size: 18px;
          line-height: 25px;
        }
      }
      p {
        line-height: 22px;
        color: rgb(112, 112, 112, 100%);
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
      .read_more {
        display: flex;
        align-items: center;
        column-gap: 10px;
        justify-content: flex-end;
        a {
          text-decoration: none;
          color: var(--color_text_buttontwo);
        }
        svg {
          font-weight: 600;
        }
      }
    }
  }
}
</style>