$(document).ready(function(){
  // just adding a click event to the only element we have on the page.
  $("h1").on("click", function(){
    // var kwsdata = $.csv.toObjects('data.csv');
    $.ajax({
        type: "GET",
        url: "data.csv",
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
            // response.sort(function(a, b) {
            //     return parseFloat(a.Differential) - parseFloat(b.Differential);
            //     });
            //     console.log($.csv.toObjects(response))
          // $(response).sort("Differential", "asc")(function(response){

          //   for (var i=0; i<$.csv.toObjects(response).length; i++) {
          //     $('.kwslist').append("<li>" + "" + ($.csv.toObjects(response)[i].Differential) + " " + ($.csv.toObjects(response)[i].Keyword) + "</li>");
          //       if (parseFloat(($.csv.toObjects(response)[i].Differential)) > 1.10) {
          //         $("li").addClass("red"); }
          //         else if (parseFloat(($.csv.toObjects(response)[i].Differential)) > 0.90) {
          //         $("li").addClass("yellow");
          //         }
          //         else {
          //           $("li").addClass("green");
          //           }
          //   }
          //  })

           // console.log(($.csv.toObjects(response)[i].Differential));
//       response.sort(function(a, b) {
//   return parseFloat(a.Differential) - parseFloat(b.Differential);
// });
             //  console.log($.csv.toObjects(response));
          // })


    // console.log(kwsdata);
    // var kwsObject = JSON.stringify(kwsdata);
    //     console.log(kwsObject);
//     $.getJSON( "kwsdata", function( kwsdata ) {
//     console.log(JSON.stringify(kwsdata));
// });
    // $.ajax({
    //   // the URL endpoint for the JSON object
    //   url: url,
    //   // type of request
    //   type: "get",
    //   // datatype xml or json
    //   dataType: "json"
    // // promise that executes on successful ajax call
    // }).done(function(){
    //   console.log("ajax request success!")
    // // promise that executes on unsuccessful ajax call
    // }).fail(function(){
    //   console.log("ajax request fails!")
    // // promise that executes either way
    // }).always(function(){
    //   console.log("this always happens regardless of successful ajax request or not")
    // })
  })
});
