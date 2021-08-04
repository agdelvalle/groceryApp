const itemAdd = document.querySelector('#itemAdd');
var totalSpend = [];

itemAdd.addEventListener('click', function(){
    const price = document.getElementById('priceInput').value;
    const itemName = document.querySelector("#itemInput").value;
    const total = document.querySelector('#total');

    const priceInt = parseInt(price);
    totalSpend.push(priceInt);
    // debug
    // console.log(itemName);
    // console.log(price);
    
    // creates new tr element
    const newItem = document.createElement('tr');
    newItem.innerHTML = `<td>${itemName}</td>
    <td>${price}</td>
    <td><button id="edit" class="actionBtn">Edit</button><button id="remove" class="actionBtn">Remove</button></td>
    `;
    
    // append new td element to table
    const table = document.querySelector("table");
    table.appendChild(newItem);

    // adds all items in totalSpend array
    var totalSpendSum = totalSpend.reduce(function(a, b){
        return a + b;
    }, 0);

    // diplays total spend so far
    total.innerHTML = `<h3>Total Spend:${totalSpendSum}</h3>`
});

