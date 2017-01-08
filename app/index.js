
require('bootstrap-webpack');

var $ = require("jquery");

function InitBody(){
  var div = $("<div></div>").attr("class", "text-success").text("Hello Webpack");
  $("#wrapper").append(div);
}

InitBody();


