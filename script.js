// waiting for dom to load
$(document).ready(function(){
  // just adding a click event to the only element we have on the page.
  $("h1").on("click", function(){
    var url = "https://api.wunderground.com/api/f28a93cae85945b6/geolookup/conditions/q/va/midlothian.json"
    $.ajax({
      // the URL endpoint for the JSON object
      url: url,
      // type of request
      type: "get",
      // datatype xml or json
      dataType: "json"
    // promise that executes on successful ajax call
    }).done(function(response)(){
      console.log(response.current_observation.temp_f)
    })
    // promise that executes on unsuccessful ajax call
    }).fail(function(){
      console.log("ajax request fails!")
    // promise that executes either way
    }).always(function(){
      console.log("this always happens regardless of successful ajax request or not")
    })
  })
})
