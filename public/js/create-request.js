//import { totalmem } from "os";

var requestInfo;

$(document).ready(function() {
  $("#saveBtn").on("click", function(e) {
      e.preventDefault();
      var modalInfo = {
        itemName: $("#itemName").val().trim(),
        quantity: $("#quant").val().trim(),
        measureUnit: $("#measureUnit").val(),
        itemPrice: $("#estPrice").val().trim(),
        itemTotal: $("#quant").val() * $("#estPrice").val()
      }
      console.log(modalInfo.itemTotal);
      $("#newModalInfo").append(`<tr><td>${modalInfo.itemName}</td><td>${modalInfo.quantity}</td><td>${modalInfo.measureUnit}</td><td>$${modalInfo.itemPrice}</td><td>$${modalInfo.itemTotal}</td></tr>`);
      console.log("poo");
  });
});


$("#saveRequest").on("click", function() {
requestInfo = {
  dateNeeded: $("#dateNeeded").val().trim(),
  itemName: $("#itemName").val().trim(),
  quantity: $("#quant").val().trim(),
  measureUnit: $("#measureUnit").val(),
  itemPrice: $("#estPrice").val().trim(),
  itemTotal: modalInfo.itemTotal,
  taxRate: $("#taxRate").val().trim(),
  estimatedShipping: $("#estShip").val().trim(),
  justification: $("#justify").val().trim(),
  comments: $("#comments").val().trim()
};
});

//module.exports = requestInfo;
