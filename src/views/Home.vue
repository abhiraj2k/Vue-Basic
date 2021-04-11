<template>
  <div class="card card-1">
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
        <div class="currency">
          <button>USD</button>
          <button>SWI</button>
          <button>SGD</button>
          <button>RUS</button>
          <button>JPN</button>
          <button>IND</button>
          <button>EUR</button>
          <button>CHF</button>
          <button>KOR</button>
          <button>THA</button>
          <button>TWD</button>
          <button>NOK</button>
          <button>CND</button>
          <button>CHN</button>
          <button>HKD</button>
          <button>SJC</button>
          <button>AUS</button>
          <button>SWE</button>
          <button>MYR</button>
          <button>G95</button>
          <button>NZL</button>
          <button>VND</button>
          <button>PHP</button>
        </div>
        <div class="keypad">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>x</button>
          <button>0</button>
          <button>-</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "Home" };
</script>
<style>
.card-wrapper {
  height: 80vh;
  margin: auto;
}
.card {
  height: 100%;
  border: 0.5px solid #013447;
  max-height: 100vh;
}
.content-container {
  height: 100%;
}
.content-1 {
  height: 50%;
  background-color: grey;
}
/* Content-1 */
.content-1 .income,
.content-1 .expense {
  height: 40%;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.amount-wrapper {
  color: antiquewhite;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
}
.content-1 .tag {
  font-size: 20px;
  color: white;
}
.content-1 .amount {
  font-size: 35px;
}
.content-1 .income {
  position: relative;
}
.content-1 .income::after {
  content: "";
  background-color: white;
  position: absolute;
  height: 1px;
  width: 96%;
  bottom: 0;
  left: 2%;
}

.content-1 .expense {
  position: relative;
}
.content-1 .expense::after {
  content: "";
  background-color: white;
  position: absolute;
  height: 1px;
  width: 96%;
  bottom: 0;
  left: 2%;
}
.content-1 .contact {
  height: 20%;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
}
.content-1 .contact i {
  cursor: pointer;
}
.content-1 .contact i:hover {
  transform: scale(1.1);
}
/* Content-2 */
.content-container .content-2 {
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.content-2 .currency {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 50%;
  height: 100%;
  margin: 0px 0px 0px 20px;
}
.content-2 button {
  outline: none;
  width: 47px;
  border: 1px solid #b8a041;
  background-color: #fff8da;
  color: #aa912f;
  margin: 8px 5px;
  box-shadow: -1px 1px 3px rgba(53, 53, 53, 0.493);
  cursor: pointer;
}
.content-2 button:active {
  background-color: #fff;
}
.content-2 button:hover {
  transform: scale(1.1);
}
.content-2 .keypad {
  height: 100%;
  width: 50%;
  padding-right: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: auto;
}
.content-2 .keypad button {
  border-radius: 50%;
  height: 35px;
  width: 35px;
  justify-self: center;
  /* margin: 2px 25px 18px 10px; */
}
@media only screen and (max-width: 600px) {
  /* .card {
        display: none;
    } */
  .content-container .content-1 {
    height: 30%;
  }
  .card-1 .content-container .content-2 {
    height: 70%;
    width: 100%;
  }
  .card-1 .content-container .currency {
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100%;
    width: 100%;
  }
  .card-1 .content-container .keypad {
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: auto;
    height: 55%;
  }
}
@media only screen and (max-width: 350px) {
  .card-1 .content-container .content-1 {
    font-size: 10px;
  }
  .card-1 .content-container .content-1 .amount {
    font-size: 20px;
  }
  .content-1 .expense,
  .content-1 .income {
    align-items: center;
    padding: 0 5px;
  }
  .card-1 .content-container .content-1 .contact {
    padding: 0 5px;
  }
  .card-1 .content-container .content-2 .currency button {
    font-size: 10px;
    width: 35px;
  }
  .footer {
    font-size: 1px;
  }
}
@media only screen and (max-height: 550px) {
  .content-container .content-1 {
    height: 40%;
  }
  .content-container .content-1 .income,
  .content-container .content-1 .expense {
    align-items: center;
    padding: 0 15px;
    font-size: 10px;
  }
  .card-1 .content-container .content-1 .amount {
    font-size: 20px;
  }
  .card-1 .content-container .content-1 .contact {
    font-size: 15px;
  }
  .tag {
    font-size: 10px;
  }
  .card-1 .content-container .keypad button {
    height: 25px;
    width: 25px;
  }
  .card-1 .content-container .content-2 .currency button {
    height: 20px;
    width: 40px;
  }
  .card-1 .content-container .content-2 {
    height: 60%;
  }
}
</style>