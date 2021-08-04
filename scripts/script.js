const itemAdd = document.querySelector("#itemAdd");

var totalSpend = [];
var itemList = [];
var itemCounter = 0;
var editCounter = 0;
var remCounter = 0;

// add new item and update total when "submit" is clicked
itemAdd.addEventListener("click", function () {
  const price = document.getElementById("priceInput").value;
  const itemName = document.querySelector("#itemInput").value;
  const total = document.querySelector("#total");

  const priceInt = parseInt(price);
  totalSpend.push(priceInt);

  // creates new tr element
  const newItem = document.createElement("tr");
  newItem.innerHTML = `<td  scope="row" id="item${itemCounter++}" class="listItem">${itemName}</td>
    <td scope="row" class="listPrice">${price}</td>
    <td><button type="button" id="edit${editCounter++}" class="actionBtn btn btn-outline-dark">Edit</button><button type="button" id="remove${remCounter++}" class="actionBtn removeBtn btn btn-outline-danger">Remove</button></td>
    `;

  // append new td element to table
  const table = document.querySelector("table");
  table.appendChild(newItem);

  function displaySum() {
    // adds all items in totalSpend array
    var totalSpendSum = totalSpend.reduce(function (a, b) {
      return a + b;
    }, 0);

    // diplays total spend so far
    total.innerHTML = `<h3>Total Spend:${totalSpendSum}</h3>`;
  }

  displaySum();

  // add event listener to remove button
  const button = newItem.querySelector(".removeBtn");
  //   const itemVal = newItem.querySelector(".listItem");
  const priceVal = parseInt(newItem.querySelector(".listPrice").innerText);
  const priceArr = totalSpend.indexOf(priceVal);
  button.addEventListener("click", (event) => {
    // console.log(itemVal.innerHTML);
    // console.log(priceVal.innerHTML);
    // console.log(priceArr);
    delete totalSpend[priceArr];
    newItem.remove();
    displaySum();
  });
});
