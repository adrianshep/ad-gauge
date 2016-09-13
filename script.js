$(document).ready(function(){
  // just adding a click event to the only element we have on the page.
  $("h1").on("click", function(){
    // var kwsdata = $.csv.toObjects('data.csv');
    $.ajax({
        type: "GET",
        url: "http://codepen.io/adrianshep/pen/jrWvjq.html",
        dataType: "text"
        // success: function(data) {processData(data);}
        }).done(function(response){
            var csvObjects = $.csv.toObjects(response);
            var objectsCount = csvObjects.length;
            var csv;
            var diff;
            var val;
            var keyword;
            var i;
            var status;
            for (i = 0; i< objectsCount; i++) {
              csv = csvObjects[i];
              diff = csv.Differential;
              keyword = csv.Keyword;
              val = parseFloat(diff);
              // console.log(val);

              if (val > 1.10){
                status = "high";
              }else if (val > 0.90){
                status = "medium";
              }else{
                status = "low";
              }

              $('.kwslist').append("<li class='" + status + "'>" + "" + (diff) + " " + (keyword) + "</li>");
            }
          })
  })
});
