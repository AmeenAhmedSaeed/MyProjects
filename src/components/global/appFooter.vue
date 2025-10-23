<template>
  <div class="footer" v-if="$route.name != 'notfound'">
    <div class="container">
      <div class="row g-0 p-5 app-footer">
        <div class="col-md-4 logo-footer">
          <div class="content-footer">
            <img src="../../assets/images/footerlogo.svg" alt="footerlogo" />
          </div>
        </div>
        <div class="col-md-4 links-web">
          <div class="content-footer">
            <h4>links</h4>
            <ul>
              <li>
                <a><router-link :to="{ name: 'home' }">Home</router-link></a>
              </li>
              <li>
                <a
                  ><router-link :to="{ name: 'about' }"
                    >About us</router-link
                  ></a
                >
              </li>
              <li>
                <a><router-link :to="{ name: 'NewsView' }">News</router-link></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 contact">
          <div class="content-footer">
            <h3>Contact us:</h3>
            <div class="list_links">
              <span>
                <svg
                  id="Group_1452"
                  data-name="Group 1452"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <rect
                    id="Rectangle_18"
                    data-name="Rectangle 18"
                    width="17.556"
                    height="13.654"
                    rx="2"
                    transform="translate(3.222 5.173)"
                    fill="none"
                    stroke="#edeff5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M3,7l8.75,6.5L20.5,7"
                    transform="translate(0.25 -0.194)"
                    fill="none"
                    stroke="#edeff5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </svg>
                <a href="mailto:import@royalpharma.com"
                  >import@royalpharma.com</a
                >
              </span>
              <span>
                <svg
                  id="Group_1453"
                  data-name="Group 1453"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_4255"
                    data-name="Path 4255"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_4256"
                    data-name="Path 4256"
                    d="M17.039,16.933h2.006A2,2,0,0,0,21.05,14.95V10.983A2,2,0,0,0,19.044,9H5.006A2,2,0,0,0,3,10.983V14.95a2,2,0,0,0,2.006,1.983H7.011"
                    transform="translate(-0.025 0.037)"
                    fill="none"
                    stroke="#edeff5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <path
                    id="Path_4257"
                    data-name="Path 4257"
                    d="M16.917,8.95V4.983A1.983,1.983,0,0,0,14.933,3H8.983A1.983,1.983,0,0,0,7,4.983V8.95"
                    transform="translate(0.042 -0.025)"
                    fill="none"
                    stroke="#edeff5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                  <rect
                    id="Rectangle_26"
                    data-name="Rectangle 26"
                    width="10.248"
                    height="8.54"
                    rx="2"
                    transform="translate(6.876 12.669)"
                    fill="none"
                    stroke="#edeff5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </svg>

                <a href="tel:+967-1-454997">+967-1-454997</a>
              </span>
              <span>
                <svg
                  id="Group_10"
                  data-name="Group 10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M5,4H9l2,5L8.5,10.5a11,11,0,0,0,5,5L15,13l5,2v4a2,2,0,0,1-2,2A16,16,0,0,1,3,6,2,2,0,0,1,5,4"
                    transform="translate(0 0)"
                    fill="none"
                    stroke="#edeff5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  />
                </svg>
                <a href="fax:+967-1-4549998">+967-1-4549998</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="https://dev-station.com" target="_blank"
      ><h3 class="copyright" style="color: #f4f7fc; margin: 20px">
        Made by DevStation 2022
      </h3></a
    >
  </div>
</template>

<script>
export default {
  name: "app-footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-image: linear-gradient(to right, #013299, #395faf);
  height: 319px;
  display: grid;
  place-items: center;
  height: 100%;
  position: relative;
  font-family: Ubuntu-R;
  margin-top: 71px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    right: 0;
    width: 20%;
    background-image: url("/src/assets/images/footerleftlogo.svg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
    @media (min-width: 1500px) {
      width: 26%;
      left: -15px;
    }
    @media (min-width: 991px) and (max-width: 1366px) {
      width: 26%;
      left: -161px;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  .container {
    .row {
      border-bottom: 2px solid #ffffff;
    }
    .logo-footer {
      display: grid;
      justify-content: center;
    }
    .links-web {
      .content-footer {
        text-align: left;
        display: grid;
        place-content: center;
        h4 {
          margin: 0;
          padding: 0;
          color: #8dc6f3;
          font-size: 1.125rem;
          text-transform: capitalize;
        }
        .first-content {
          color: red;
        }
        ul {
          margin: 0;
          padding: 0;
          margin-top: 16.4px;
          li {
            a {
              color: var(--color-text-navlink);
              text-decoration: none;
              font-size: 1.25rem;
            }
          }
        }
      }
    }
    .contact {
      .content-footer {
        display: grid;
        place-content: center;
        h3 {
          font-size: 1.125rem;
          color: #8dc6f3;
          text-align: left;
        }
        .list_links {
          span {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            svg {
              margin-right: 10.3px;
            }
            a {
              color: var(--color-text-navlink);
              font-size: 1.25rem;
              text-decoration: none;
              font-family: Ubuntu-R;
            }
          }
        }
      }
    }
  }
  a {
    text-decoration: none;
    h3 {
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    .container {
      .logo-footer {
        img {
          width: 73%;
        }
      }
      .links-web {
        text-align: left;

        .content-footer {
          text-align: left;
          margin-top: 40px;
          margin-bottom: 40px;
          place-content: flex-start;

          h4 {
            font-size: 1.2rem;
            font-family: Ubuntu-R;
          }
          ul {
            li {
              a {
                font-size: 1rem;
              }
            }
          }
        }
      }
      .contact {
        .content-footer {
          display: grid;
          place-content: start;
          h3 {
            font-size: 1.2rem;
            color: #8dc6f3;
            text-align: left;
          }
          .list_links {
            span {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              svg {
                margin-right: 10.3px;
                width: 22px;
              }
              a {
                color: var(--color-text-navlink);
                font-size: 1rem;
                text-decoration: none;
                font-family: Ubuntu-R;
              }
            }
          }
        }
      }
    }
    .copyright {
      font-size: 16px;
    }
  }
}
</style>