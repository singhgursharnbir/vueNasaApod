<template>
  <div id="app">
    <Header />
    <ApodMain />
    <Footer />
  </div>
</template>

<script>
import ApodMain from "./components/ApodMain.vue";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    ApodMain,
    Header,
    Footer
  }
};
</script>

<style>
.thumbImage {
  width: 50px;
  height: 50px;
}

.yellowTextColor {
  color: yellow;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.sliderVideo {
  width: 100%;
  height: 400px;
}
</style>
