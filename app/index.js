require.ensure(["bootstrap-webpack", "jquery"], function(require){
var $ = require("jquery");
console.log($);

function InitBody(){
  var div = $("<div></div>").attr("class", "text-success").text("Hello Webpack");
  $("#wrapper").append(div);
}

InitBody();
  
});


