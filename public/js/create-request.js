var requestInfo;
$(document).ready(function() {
  $("#saveBtn").on("click", function(e) {
    e.preventDefault();
    var modalInfo = {
      itemName: $("#itemName").val().trim(),
      quantity: $("#quant").val().trim(),
      measureUnit: $("#measureUnit").val(),
      estimatedPrice: $("#estPrice").val().trim(),
      totalPrice: this.quantity * this.estimatedPrice
    };
    console.log("farts");
    $("#newItemName").append(`<p>Item Name: ${modalInfo.itemName}</p>`);
    $("#newItemQuant").append(`<p>Quantity: ${modalInfo.quantity}</p>`);
    $("#newItemMeasure").append(
      `<p>Unit of Measure: ${modalInfo.measureUnit}</p>`
    );
    $("#newItemPrice").append(
      `<p>Estimated Price: $${modalInfo.estimatedPrice}</p>`
    );
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
module.exports = requestInfo;
