<template>
  <div class="container">
    <Header />
    <div class="card-wrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200;1,300&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}
/* Container */
.container {
  max-width: 600px;
  margin: auto;
  padding: 0;
  overflow: scroll;
}
.card-wrapper {
  height: 100vh;
  margin: auto;
}
.card {
  height: 100%;
  border: 0.5px solid #013447;
  max-height: 100vh;
}
</style>
