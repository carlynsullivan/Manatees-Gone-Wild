// var url = "http://en.wikipedia.org/w/api.php?action=query&titles=Manatee&format=jsonfm"

// //potentially add to url: &origin=https://en.wikipedia.org ???

// var request = {
// 	url: url,
// 	method: "GET"
// }

// $.ajax(request).done(function(response) {
// 	console.log(response)
// });

$(document).ready(function() {

	$(".manatee-float").fadeIn().animate({width:"300px"}, 12000);

	$(".manatee-float2").fadeIn().animate({width:"150px", top: "25%", left: "58%"}, 12000);	

});

