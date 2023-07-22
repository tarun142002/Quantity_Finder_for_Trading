let capital = document.getElementById("capital");
let perTradeSl = document.getElementById("per-trade-sl");
let entry = document.getElementById("Entry");
let sl = document.getElementById("sl");
let slPerStock = document.getElementById("sl-per-stock");
let quantityInput = document.getElementById("quantity");


document.querySelector("button").addEventListener("click", calculateQuantity);

function calculateQuantity(event) {
  event.preventDefault();
  let capitalValue = parseFloat(capital.value);
  let perTradeSlValue = parseFloat(perTradeSl.value);
  let entryValue = parseFloat(entry.value);
  let slValue = parseFloat(sl.value);

  let slPerStockValue = entryValue - slValue;
  let quantityValue = perTradeSlValue / slPerStockValue;

  slPerStock.value = slPerStockValue;
  quantityInput.value = quantityValue;
}

