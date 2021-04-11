<template>
  <div class="card card-4">
    <div class="content-container">
      <div class="content">
        <div class="content-head">
          <div class="person-detail">
            <div class="type">Borrow</div>
            <div class="name">John Doe</div>
          </div>
          <div class="amount-details">
            <div class="amount">2500 USD</div>
            <div class="partner">Partner</div>
          </div>
        </div>

        <div class="description">
          <div class="note">Note:</div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              suscipit sint consequatur delectus, enim doloribus voluptatem
              accusantium voluptas aliquid officiis!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Note" };
</script>
<style scoped>
.card-4 .content {
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
}
.card-4 .content .content-head {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-4 .content .content-head .person-detail .type {
  font-size: 15px;
}
.card-4 .content .content-head .person-detail .name {
  font-weight: 700;
}
.card-4 .content .content-head .amount-details {
  text-align: end;
}
.card-4 .content .content-head .amount-details .partner {
  font-size: 15px;
}
.card-4 .content .description {
  margin-top: 20px;
  font-size: 15px;
}
.card-4 .content .description .note {
  font-size: 18;
  font-weight: 600;
}
</style>