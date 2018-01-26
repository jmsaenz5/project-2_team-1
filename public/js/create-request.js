//import { totalmem } from "os";
var newItemObject;
var requestInfo;
//If there's time: Add a checkbox and add/delete buttons next to each table item
$(document).ready(function() {
  $("#saveBtn").on("click", function(e) {
    e.preventDefault();
    var modalInfo = {
      itemName: $("#itemName")
        .val()
        .trim(),
      quantity: $("#quant")
        .val()
        .trim(),
      measureUnit: $("#measureUnit").val(),
      itemPrice: $("#estPrice")
        .val()
        .trim(),
      itemTotal:
        $("#quant").val() *
        $("#estPrice")
          .val()
          .trim()
    };
    console.log(modalInfo.itemTotal);
    $("#newModalInfo").append(
      `<tr><td>${modalInfo.itemName}</td><td>${modalInfo.quantity}</td><td>${
        modalInfo.measureUnit
      }</td><td>$${modalInfo.itemPrice}</td><td>$${
        modalInfo.itemTotal
      }</td><td><button type="submit" id="editItem" class="btn btn-info>Edit</button></td></tr>`
    );
    console.log("poo");
    $("#itemName").val("");
    $("#quant").val("");
    $("#measureUnit").val("");
    $("#estPrice").val("");
  });
  $("#cancelBtn").on("click", function(e){
    e.preventDefault();
    $("#itemName").val("");
    $("#quant").val("");
    $("#measureUnit").val("");
    $("#estPrice").val("");
  });

  $("#addBtn").on("click", function(e) {
    e.preventDefault();
    var modalInfo = {
      itemName: $("#itemName")
        .val()
        .trim(),
      quantity: $("#quant")
        .val()
        .trim(),
      measureUnit: $("#measureUnit").val(),
      estimatedPrice: $("#estPrice")
        .val()
        .trim(),
      totalPrice:
        $("#quant").val() *
        $("#estPrice")
          .val()
          .trim()
    };
    console.log("shit dammit");
    $("#newModalInfo").append(
      `<tr class="allRows"><td class="tableItems">${
        modalInfo.itemName
      } </td><td class="tableQuant">${
        modalInfo.quantity
      } </td><td class="tableUnit">${
        modalInfo.measureUnit
      } </td><td class="tablePrice">$${
        modalInfo.estimatedPrice
      } </td><td class="tableTotal">$${modalInfo.totalPrice} </td></tr>`
    );
    console.log("poo-gas");

    $("#itemName").val("");
    $("#quant").val("");
    $("#measureUnit").val("");
    $("#estPrice").val("");
    var individualItems;
    var eachItem = document.querySelectorAll("#itemTable .allRows");
    var allItems = $(".tableItems").html();
    console.log(allItems.textContent);
    var allTheRows = $(".allRows");
    var allQuant = document.getElementsByClassName("tableQuant");
    var allUnit = document.getElementsByClassName("tableUnit");
    var allPrice = document.getElementsByClassName("tablePrice");
    var allTotal = document.getElementsByClassName("tableTotal");
    var wholeTable = document.getElementById("newModalInfo").textContent;
    var newArray = wholeTable.trim().split(" ");
    console.log(newArray);
    var arr =[];
    for (var i =0; i<newArray.length; i+=5) {
      newItemObject = {
        itemName: newArray[i],
        quantity: newArray[i+1],
        measureUnit: newArray[i+2],
        itemPrice: newArray[i+3],
        itemTotal: newArray[i+4]
      };
      arr.push(newItemObject);
      console.log(newItemObject);
      console.log(arr);
    }
  });

  $("#saveRequest").on("click", function(e) {
    e.preventDefault();
    requestInfo = {
      dateNeeded: $("#dateNeeded").val().trim(),
      itemInfo: newItemObject,
      // subTotal:
      taxRate: $("#taxRate").val().trim(),
      estimatedShipping: $("#estShip").val().trim(),
      purchaseRequestTotal:
      newItemObject.itemTotal *
          $("#taxRate").val() + $("estShip").val(),
      justification: $("#justify").val().trim(),
      comments: $("#comments").val().trim()
    };
    console.log(requestInfo);
    //$.post("./api/Initiator", requestInfo);
  });
});
