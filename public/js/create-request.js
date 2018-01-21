//import { totalmem } from "os";

var requestInfo;

$(document).ready(function() {
  $("#saveBtn").on("click", function(e) {
    e.preventDefault();
    var modalInfo = {
      itemName: $("#itemName").val().trim(),
      quantity: $("#quant").val().trim(),
      measureUnit: $("#measureUnit").val(),
      estimatedPrice: $("#estPrice").val().trim(),
      totalPrice: totalPrice(this.quantity, this.estimatedPrice)
    };
    console.log(modalInfo.totalPrice);
    $("#newModalInfo").append(`<tr><td>${modalInfo.itemName}</td><td>${modalInfo.quantity}</td><td>${modalInfo.measureUnit}</td><td>$${modalInfo.estimatedPrice}</td><td>$${modalInfo.totalPrice}</td></tr>`);
    console.log("poo");
  });
  $("#saveRequest").on("click", function() {
    requestInfo = {
      dateNeeded: $("#dateNeeded").val().trim(),
      itemName: $("#itemName").val().trim(),
      quantity: $("#quant").val().trim(),
      measureUnit: $("#measureUnit").val(),
      estimatedPrice: $("#estPrice").val().trim(),
      totalPrice: modalInfo.totalPrice,
      taxRate: $("#taxRate").val().trim(),
      estimatedShipping: $("#estShip").val().trim(),
      justification: $("#justify").val().trim(),
      comments: $("#comments").val().trim()
    };
  });
});

//module.exports = requestInfo;
