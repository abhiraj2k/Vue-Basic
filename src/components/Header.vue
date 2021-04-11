<template>
  <div class="header">
    <div class="upper">
      <div class="logo"><i class="fab fa-500px"></i></div>
      <div class="icons">
        <i class="fas fa-exchange-alt"></i>
        <i class="fas fa-plus-circle"></i>
        <i class="fas fa-dollar-sign"></i>
      </div>
      <div class="hamburger">
        <i class="fas fa-bars"></i>
      </div>
    </div>
    <div class="lower">
      <div class="name-info">
        <i class="fas fa-archive"></i>
        <span class="name">Abhishek B</span>
      </div>
      <div class="contact-info">
        <i class="fas fa-dollar-sign"></i>
        <span class="contact">915692xxxx</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  height: 10vh;
}
/* Header Upper */
.header .upper {
  background-color: #013447;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #ffeeac;
  height: 50%;
}
.header .upper .icons {
  display: flex;
  justify-content: space-around;
  width: 50%;
}
.header i {
  cursor: pointer;
}
/* Header Lower */
.header .lower {
  height: 50%;
  padding: 10px;
  background-color: rgb(201, 201, 201);
  color: #ffeeac;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header .lower span {
  color: black;
}
</style>