<template>
  <div class="card card-3">
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
        <div class="description">
          <p>Any Description</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: "Save" };
</script>
<style scoped>
.card-3 .content-2 {
  position: relative;
}
.card-3 .content-2 .description {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  /* min-height: 90%;
    min-width: 90%; */
  border: 2px solid #dab215;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
}
</style>