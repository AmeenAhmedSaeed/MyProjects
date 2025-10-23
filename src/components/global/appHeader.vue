<template>
  <div class="home">
    <div class="headertwo fixed-top" v-if="$route.name != 'home'">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand"
            ><router-link to="/"
              ><img
                src="../../assets/images/headerlogotwo.svg"
                alt="headerlogotwo" /></router-link
          ></a>
          <button
            class="
              navbar-toggler
              collapsed
              d-flex d-lg-none
              flex-column
              justify-content-around
            "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-md-auto mb-2 mb-lg-0 middelnav">
              <li class="nav-item">
                <router-link to="/" exact="" class="nav-link active"
                  >Home</router-link
                >
                <ul class="dropdown-hover">
                  <li><a href="#second-section">Our Offerings</a></li>
                  <li><a href="#thired-section">latest News</a></li>
                  <li><a href="#fourth-section">Our People</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/about" exact="" class="nav-link"
                  >About us</router-link
                >
                <ul class="dropdown-hover">
                  <li><a href="#first-blocks">Who We Are</a></li>
                  <li><a href="#section-three">Our Mission</a></li>
                  <li><a href="#last-section">Our Principles</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/marketingview" exact="" class="nav-link"
                  >Marketing distribution</router-link
                >
                <ul class="dropdown-hover">
                  <li><a href="#fourth_section">Our People</a></li>
                  <li><a href="#fifth_section">Royal Pharmain Yemen</a></li>
                  <li><a href="#section_six">2018 Business Heights</a></li>
                  <li><a href="#section_seven">Our Infrastructures</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/news" exact="" class="nav-link"
                  >News</router-link
                >
              </li>
            </ul>
            <router-link to="/contactus" tag="button" class="btn-go"
              >Contact US</router-link
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
};
</script>

<style  lang="scss" scoped>
.headertwo {
  font-family: Ubuntu-R;
  background-image: linear-gradient(to right, #013299, #395faf);
  nav {
    a {
      text-decoration: none;
      color: var(--color-text-navlink);
      z-index: 55;
    }
    .middelnav li {
      position: relative;
      font-size: 20px;
    }
    .middelnav li:not(:last-child) {
      margin-right: 60px;
      font-weight: normal;
      @media (max-width: 991px) {
        margin-right: 0px;
      }
    }
    .middelnav li a:not(.router-link-active) {
      color: #8dc6f3;
      font-weight: normal;
    }

    .middelnav li .router-link-active {
      font-weight: bold;
      color: #f4f7fc;
      font-size: 20px;
      font-family: Ubuntu-B;
      &::after {
        content: "";
        background-image: url("../../assets/images/navlinkslogo.svg");
        background-repeat: no-repeat;
        position: absolute;
        top: 7px;
        left: 37%;
        width: 100%;
        height: 30%;
        @media (max-width: 991px) {
          top: 5px;
          left: 47%;
        }
      }
    }
    .nav-item {
      position: relative;
    }
    .nav-item:not(:last-child)::after {
      content: "";
      position: absolute;
      border-width: 8px;
      border-style: solid;
      border-color: white transparent transparent transparent;
      top: 45%;
      transform: translateX(-45%);
      right: -22px;
      border-radius: 3px;
      z-index: 5;
    }
    @media (max-width: 991px) {
      .nav-item:not(:last-child)::after {
        right: 5px;
      }
    }
    .nav-item .dropdown-hover {
      position: absolute;
      top: 80px;
      left: 0;
      background-color: #8dc6f3;
      width: 200px;
      text-align: left;
      border-radius: 10px;
      margin: 0;
      padding: 10px 5px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition: opacity 0.3s, top 0.3s;
      opacity: 0;
      z-index: 5555;
    }
    @media (max-width: 991px) {
      .nav-item .dropdown-hover {
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
      }
    }
    .nav-item .dropdown-hover::before {
      content: "";
      position: absolute;
      top: -20px;
      left: 10px;
      border-width: 10px;
      border-color: transparent transparent #8dc6f3 transparent;
      border-style: solid;
    }
    @media (max-width: 991px) {
      .nav-item .dropdown-hover::before {
        left: 90px;
        border-color: transparent transparent #fff transparent;
      }
    }
    .nav-item:hover .dropdown-hover {
      top: 60px;
      opacity: 1;
    }
    .nav-item .dropdown-hover li {
      margin: 5px;
      padding: 5px 10px;
      transition: 0.3s;
      position: relative;
      color: #fff;
    }

    .nav-item .dropdown-hover li::before {
      content: "";
      position: absolute;
      left: 0px;
      top: 0px;
      width: 0px;
      height: 100%;
      background-color: #013299;
      transition: 0.3s;
      border-radius: 5px;
      z-index: -1;
    }
    .nav-item .dropdown-hover li:hover::before {
      width: 100%;
    }
    .nav-item .dropdown-hover li:hover {
      padding-left: 20px;
    }
    .nav-item .dropdown-hover li > a {
      text-decoration: none;
      color: #fff;
      font-size: 14px;
    }
    @media (max-width: 991px) {
      .nav-item .dropdown-hover li > a {
        color: #aaa;
      }
    }
    .btn-go {
      border: none;
      background-image: linear-gradient(to right, #e2f3ff, #f4f7fc);
      color: var(--color_text_buttontwo);
      width: 144px;
      height: 43px;
      border-radius: 28px;
      font-size: 1.25rem;
    }
    .navbar-toggler {
      width: 30px;
      height: 30px;
      position: relative;
      transition: 0.5s ease-in-out;
    }
    .navbar-toggler,
    .navbar-toggler:focus,
    .navbar-toggler:active,
    .navbar-toggler-icon:focus {
      outline: none;
      box-shadow: none;
      border: 0;
    }
    .navbar-toggler span {
      margin: 0;
      padding: 0;
    }
    .navbar-toggler span:nth-child(2) {
      width: 15px;
    }
    .navbar-toggler:hover span:nth-child(2) {
      width: 100%;
    }
    .toggler-icon {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      background-color: white;
      transition: 0.25s ease-in-out;
    }
    .middle-bar {
      margin-top: 0px;
    }
    .navbar-toggler .top-bar {
      margin-top: 0;
      transform: rotate(135deg);
    }
    .navbar-toggler .middle-bar {
      opacity: 0;
      filter: alpha(opacity=0);
    }
    .navbar-toggler .bottom-bar {
      margin-top: 0px;
      transform: rotate(-135deg);
    }
    .navbar-toggler.collapsed .top-bar {
      margin-top: -20px;
      transform: rotate(0deg);
    }
    .navbar-toggler.collapsed .middle-bar {
      opacity: 1;
      filter: alpha(opacity=100);
    }
    .navbar-toggler.collapsed .bottom-bar {
      margin-top: 20px;
      transform: rotate(0deg);
    }
  }
}
</style>