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
	//parent manatee functionality
	$(".manatee-float").fadeIn().animate({width:"300px", left: "35%"}, 15000);
	//baby manatee functionality
	$(".manatee-float2").fadeIn().animate({width:"150px", top: "25%", left: "58%"}, 15000);

	// document.getElementById('watchLiveLink').on("click", function() {
	// 	document.querySelector('#movie-holder').scrollIntoView({ 
	//   		behavior: 'smooth'; 
	// 	});	
	// });


	//smooth scroll
	 $('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	 //API embedded info request
	function arkiveEmbedCallback(data){
	  var iframeCreation='<iframe id="frame" name="widget" src="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
	  var iframe=window.location.protocol+"//"+(data.results[0].url);
	  if(data.error!='null'){
	    document.getElementById("arkiveIframe").innerHTML=iframeCreation;
	    var iframeAttr=parent.document.getElementById("frame");
	    iframeAttr.height=570;
	    iframeAttr.width=672;
	    iframeAttr.src=iframe;
	  }
	}
	(function(){
	  function async_load(){
	    var s=document.createElement('script');s.type='text/javascript';s.async=true;
	    s.src='http://api.arkive.org/v2/embedScript/species/speciesName/Trichechus%20manatus?key=_Zek5NG_MCi2n9nruzXLOX0iE8pxr-OzSt2AEA34ZHY1&id=4ff16eb0-031e-4629-8557-9cb7012b1f58&w=650&h=570&mtype=all&tn=0&text=1&callback=arkiveEmbedCallback';
	    var x=document.getElementsByTagName('script')[0];
	    x.parentNode.insertBefore(s,x);
	  }
	  if(window.attachEvent){
	    window.attachEvent('onload',async_load);
	  }else{
	    window.addEventListener('load',async_load,false);
	  }
	})();
	

	//arkive embedded feature1
	// function arkiveEmbedCallback(data) {
	// 	var iframeCreation = '<iframe id="frame" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
	// 	var iframe = window.location.protocol + "//" + (data.results[0].url);
	// 	if (data.error != 'null') {
	//   	    document.getElementById("arkiveIframe").innerHTML = iframeCreation;
	// 	    var iframeAttr = parent.document.getElementById("frame");
	// 	    iframeAttr.height = arkiveApiHeight;
	// 	    iframeAttr.width = arkiveApiWidth + 22;
	// 	    iframeAttr.src = iframe;
	//     }
	// };
	
	// (function () {
	//     function async_load() {
	//         var s = document.createElement('script'); 
	//         s.type = 'text/javascript';
	//         s.async = true;
	//         s.src = 'https://api.arkive.org/v2/embedScript/species/scientificName/' + arkiveApiSpeciesName + '?key=' + arkiveApiKey + '&mtype=all&w=' + arkiveApiWidth + '&h=' + arkiveApiHeight + '&tn=' + (arkiveApiImages ? 1 : 0) + '&text=' + (arkiveApiText ? 1 : 0) + '&callback=arkiveEmbedCallback';
	//         var x = document.getElementsByTagName('script')[0];
	//         x.parentNode.insertBefore(s, x);
	//     }
	//     if (window.attachEvent)
	//         window.attachEvent('onload', async_load);
	//     else
	//         window.addEventListener('load', async_load, false);
	// })
	// ();

	//arkive embedded feature2
	// function arkiveEmbedCallback_2(data) {
	// 	var iframeCreation = '<iframe id="frame_2" name="widget" src ="#" width="100%" height="1" marginheight="0" marginwidth="0" frameborder="no"></iframe>';
	// 	var iframe = window.location.protocol + "//" + (data.results[0].url);
	// 	if (data.error != 'null') {
	//   	    document.getElementById("arkiveIframe_2").innerHTML = iframeCreation;
	// 	    var iframeAttr = parent.document.getElementById("frame_2");
	// 	    iframeAttr.height = arkiveApiHeight;
	// 	    iframeAttr.width = arkiveApiWidth + 22;
	// 	    iframeAttr.src = iframe;
	//     }
	// };
	
	// (function () {
	//     function async_load_2() {
	//         var s = document.createElement('script'); 
	//         s.type = 'text/javascript';
	//         s.async = true;
	//         s.src = 'https://api.arkive.org/v2/embedScript/species/scientificName/' + arkiveApiSpeciesName_2 + '?key=' + arkiveApiKey + '&mtype=all&w=' + arkiveApiWidth + '&h=' + arkiveApiHeight + '&tn=' + (arkiveApiImages ? 1 : 0) + '&text=' + (arkiveApiText ? 1 : 0) + '&callback=arkiveEmbedCallback_2';
	//         var x = document.getElementsByTagName('script')[0];
	//         x.parentNode.insertBefore(s, x);
	//     }
	//     if (window.attachEvent)
	//         window.attachEvent('onload', async_load_2);
	//     else
	//         window.addEventListener('load', async_load_2, false);
	// })
	// ();
                    

});//closing document ready function

