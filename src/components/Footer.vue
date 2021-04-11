<template>
  <div class="footer">
    <router-link to="/">
      <div class="contact">
        <i class="fas fa-address-card"></i>
        <span>Contact</span>
      </div>
    </router-link>
    <router-link to="/note">
      <div class="note">
        <i class="fas fa-book-open"></i>
        <span>Note</span>
      </div>
    </router-link>
    <router-link to="/delete">
      <div class="delete">
        <i class="fas fa-trash-alt"></i>
        <span>Delete</span>
      </div>
    </router-link>
    <router-link to="/save">
      <div class="save">
        <i class="fas fa-check"></i>
        <span>Save</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
  font-size: 1.25rem;
  border: 1px solid black;
  border-top: none;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 20px;
  color: #dab215;
}
.footer a {
  text-decoration: none;
  color: #dab215;
}
.footer div {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}
.footer div:hover {
  transform: scale(1.1);
}
@media only screen and (max-width: 400px) {
  .footer {
    font-size: 15px;
  }
}
@media only screen and (max-height: 550px) {
  .footer {
    font-size: 14px;
    height: 50px;
  }
}
</style>