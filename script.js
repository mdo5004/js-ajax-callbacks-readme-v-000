$(document).ready(function(){
    $.get("this_doesnt_exist.html", function(data) {
        console.log("Hey-oh!");
    }).fail(function(error){
        console.log("Something went wrong: " + error);
    })
});