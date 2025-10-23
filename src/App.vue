<template>
  <div id="app">
    <pre-loader />
    <appHeader />
    <transition name="fade">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script>
import appHeader from "@/components/global/appHeader.vue";
import appFooter from "@/components/global/appFooter.vue";
import PreLoader from "./components/global/preLoader.vue";
export default {
  name: "App",
  components: {
    appHeader,
    appFooter,
    PreLoader,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Ubuntu", sans-serif;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
