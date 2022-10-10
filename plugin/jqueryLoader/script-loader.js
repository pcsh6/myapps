var pageUrl = window.location.href,
	root = window.location.origin+"/"+pageUrl.split("/")[3]+"/"+pageUrl.split("/")[4]+"/";

function showLoader() {
	$('body').append('<div class="dLoader"><div><img src="'+root+'assets/images/dLoader.gif"><p><b><i>Loading...</i></b></p></div></div>')
}
function hideLoader() {
	$('.dLoader').fadeOut()
}

function showDivLoader(a) {
	a.append('<div id="dLoader" style="text-align:center;"><div style="margin-bottom:10px;"><img src="img/dLoader.gif"></div><div style="font-weight:bold;"><i>Please wait...</i></div></div>')
}
function hideDivLoader(a) {
	$('#dLoader').fadeOut();
}