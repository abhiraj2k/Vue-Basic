<template>
  <div class="card card-2">
    <div class="content-container">
      <div class="content-1">
        <div class="income">
          <div class="tag">Income</div>
          <div class="amount-wrapper">
            <div class="amount">2500</div>
            <span class="unit">USD</span>
          </div>
        </div>
        <div class="expense">
          <div class="tag">Expense</div>
          <div class="amount-wrapper">
            <div class="amount">500</div>
            <span class="unit">USD</span>
          </div>
        </div>
        <div class="contact">
          <i class="fas fa-address-card"></i>
          <div class="contact-name">
            <i class="fas fa-address-book"></i>
            <span>ABC, near xyz</span>
          </div>
        </div>
      </div>
      <div class="content-2">
        <button class="primary">Partner</button>
        <button class="secondary">Store</button>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Delete" };
</script>
<style scoped>
.card-2 .content-2 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}
.card-2 .content-2 button {
  margin-top: 20px;
  width: 90px;
  height: 30px;
  border-radius: 25px;
}
.card-2 .content-2 .primary {
  color: white;
  background-color: #dab215;
  border: none;
  box-shadow: -1px 1px 5px #856c0775;
}
</style>