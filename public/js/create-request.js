//import { totalmem } from "os";

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
      var newItemObject = {
        itemName: newArray[i],
        quantity: newArray[i+=1],
        measureUnit: newArray[i+=2],
        itemPrice: newArray[i+=3],
        itemTotal: newArray[i+=4]
      };
      arr.push(newItemObject);
      console.log(newItemObject);
      console.log(arr);
    }
    /*function newItem(itemName, quantity, measureUnit, itemPrice, itemTable) {
    for (var i = 0; i < newArray.length; i += 1) {
      for (var j = 1; j < parseint((newArray.length += 1)); j += 1) {
        [j] = newArray.slice(4);
          itemName: allItems,
          quantity: allQuant,
          measureUnit: allUnit,
          itemPrice: allPrice,
          itemTotal: allItems,
          everything: eachItem
      
        };
      }
    }*/
  });

  /*$("#saveRequest").on("click", function() {
    requestInfo = {
      dateNeeded: $("#dateNeeded").val().trim(),
      itemInfo: {
        itemName: $("#itemName").val().trim(),
        quantity: $("#quant").val().trim(),
        measureUnit: $("#measureUnit").val(),
        itemPrice: $("#estPrice").val().trim(),
        itemTotal: modalInfo.itemTotal
      },
      // subTotal:
      taxRate: $("#taxRate").val().trim(),
      estimatedShipping: $("#estShip").val().trim(),
      purchaseRequestTotal:
      //Order of operations?  
      modalInfo.itemTotal *
          $("#taxRate").val().trim() + $("estShip").val().trim(),
      justification: $("#justify").val().trim(),
      comments: $("#comments").val().trim()
    };
    $.post("./api/Initiator", requestInfo);
  });*/
});
