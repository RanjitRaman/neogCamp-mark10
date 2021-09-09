var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
var calculateButton = document.querySelector("#calculate-button");
var denominationMarker = document.querySelectorAll(".notes-change");
var message = document.querySelector("#message");
var denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const calculateButtonHandler = () => {
  if (billAmount.value > 0 && cashAmount.value > billAmount.value) {
    var remainingAmount = cashAmount.value - billAmount.value;
    calculateAmounts(remainingAmount);
  } else if (billAmount.value > cashAmount.value) {
    messageHanlder("Do you want to wash plates?");
  } else if (billAmount.value <= 0) {
    messageHanlder("Enter correct bill amount");
  }
};

function calculateAmounts(amount) {
  for (var i = 0; i < denominations.length; i++) {
    var denominationsCount = Math.trunc(amount / denominations[i]);
    denominationMarker[i].innerText = denominationsCount;
    amount = amount % denominations[i];
  }
}
function messageHanlder(text) {
  message.style.display = "block";
  message.innerText = text;
}
calculateButton.addEventListener("click", calculateButtonHandler);
