let capital = document.getElementById("capital");
let perTradeSl = document.getElementById("per-trade-sl");
let entry = document.getElementById("Entry");
let sl = document.getElementById("sl");
let slPerStock = document.getElementById("sl-per-stock");
let quantityInput = document.getElementById("quantity");
let finalLossInput = document.getElementById("final_loss");

document.querySelector("button").addEventListener("click", calculateQuantity);

function calculateQuantity(event) {
  event.preventDefault();
  let capitalValue = parseInt(capital.value);
  let perTradeSlValue = parseInt(perTradeSl.value);
  let entryValue = parseInt(entry.value);
  let slValue = parseInt(sl.value);

  let slPerStockValue = entryValue - slValue;
  let quantityValue = Math.floor(perTradeSlValue / slPerStockValue);
  let finalLossValue = slPerStockValue * quantityValue;

  slPerStock.value = parseInt(slPerStockValue);
  quantityInput.value = parseInt(quantityValue);
  finalLossInput.value = parseInt(finalLossValue);
}
