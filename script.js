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
      //  console.log(response)
      for (var i=0; i<$.csv.toObjects(response).length; i++) {
        $('.kwslist').append("<li>" + ($.csv.toObjects(response)[i].Keyword) + "</li>");
      }
             //  console.log($.csv.toObjects(response));
     });


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
})
