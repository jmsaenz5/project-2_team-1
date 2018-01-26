//import { totalmem } from "os";
var newItemObject;
var requestInfo;
var arr;
var itemSubTotal = 0;

//<td><button type= "submit" class="editBtn">Edit</button></td><td><button type="submit" class="deleteBtn">Delete</button></td>

function itemAdding() {
  var itemQuant = $("#quant").val().trim();
  var estimatedPrice = $("#estPrice").val().trim();
  var itemTotalPrice = (itemQuant * estimatedPrice).toFixed(2);
  $("#subTotal").val("");
  var modalInfo = {
    itemName: $("#itemName").val().trim(),
    quantity: $("#quant").val().trim(),
    measureUnit: $("#measureUnit").val(),
    estimatedPrice: $("#estPrice").val().trim(),
    totalPrice: itemTotalPrice
  };
  $("#newModalInfo").append(`<tr class="allRows"><td class="tableItems">${modalInfo.itemName} </td><td class="tableQuant">${modalInfo.quantity} </td><td class="tableUnit">${modalInfo.measureUnit} </td><td class="tablePrice">$${modalInfo.estimatedPrice} </td><td class="tableTotal">${modalInfo.totalPrice} </td></tr>`
  );

  $("#itemName").val("");
  $("#quant").val("");
  $("#measureUnit").val("");
  $("#estPrice").val("");

  var wholeTable = document.getElementById("newModalInfo").textContent;
  var newArray = wholeTable.trim().split(" ");
  console.log(newArray);
  arr = [];
  for (var i = 0; i < newArray.length; i += 5) {
    newItemObject = {
      itemName: newArray[i],
      quantity: newArray[i + 1],
      measureUnit: newArray[i + 2],
      itemPrice: newArray[i + 3],
      itemTotal: newArray[i + 4]
    };
    arr.push(newItemObject);
    itemSubTotal = 0;
    for (var j = 0; j < arr.length; j += 1) {
      (itemSubTotal += parseFloat(arr[j].itemTotal)).toFixed(2);
      console.log(itemSubTotal);
    }
    console.log(newItemObject);
    console.log(arr);
  }
  $("#subTotal").html(`${itemSubTotal}`);
}
//If there's time: Add a checkbox and add/delete buttons next to each table item
$(document).ready(function() {
  $("#saveBtn").on("click", function(e) {
    e.preventDefault();
    itemAdding();
  });

  $("#addBtn").on("click", function(e) {
    e.preventDefault();
    itemAdding();
  });

  $(".deleteBtn").on("click", function(e) {
    e.preventDefault();
  });
  $(".editBtn").on("click", function(e) {
    e.preventDefault();
  });

  $("#calcTotal").on("click", function(e) {
    e.preventDefault();
    var itemTaxRate = $("#taxRate").val().trim();
    var estimatedShipping = $("#estShip").val().trim();
    itemSubTotal = document.getElementById("subTotal").textContent;
    var taxOnItems = itemSubTotal * (parseFloat(itemTaxRate) / 100);
    var calculate = (parseFloat(itemSubTotal) + taxOnItems + parseFloat(estimatedShipping)).toFixed(2);
    console.log(calculate);
    $("#finalTotal").html(`Total: $${calculate}`);
  });

  $("#saveRequest").on("click", function(e) {
    e.preventDefault();
    var itemTaxRate = $("#taxRate").val().trim();
    var estimatedShipping = $("#estShip").val().trim();
    itemSubTotal = document.getElementById("subTotal").textContent;
    var taxOnItems = itemSubTotal * (parseFloat(itemTaxRate) / 100);
    var calculate = (parseFloat(itemSubTotal) + taxOnItems + parseFloat(estimatedShipping)).toFixed(2);
    requestInfo = {
      dateNeeded: $("#dateNeeded").val().trim(),
      itemInfo: arr,
      // subTotal:
      taxRate: $("#taxRate").val().trim(),
      estimatedShipping: $("#estShip").val().trim(),
      purchaseRequestTotal: calculate,
      justification: $("#justify").val().trim(),
      comments: $("#comments").val().trim()
    };
    console.log(requestInfo);
    //$.post("./api/Initiator", requestInfo);
  });
});
