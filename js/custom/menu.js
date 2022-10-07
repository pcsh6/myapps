$(function() {
	$('select').on('change', function (e) {
	    var optionSelected = $("option:selected", this);
	    var valueSelected = this.value;
	    if(valueSelected =='MDL') {
	    	// $('#module').removeClass('d-none');
	    	$('#module, #group, #menu, #submenu').addClass('d-none');
	    }
	    if(valueSelected =='GRP') {
	    	$('#module').removeClass('d-none');
	    	$('#group, #menu, #submenu').addClass('d-none');
	    }
	    if(valueSelected =='MNU') {
	    	$('#module, #group').removeClass('d-none');
	    	$('#menu, #submenu').addClass('d-none');
	    }
	    if(valueSelected =='SUBM') {
	    	$('#module, #group, #menu').removeClass('d-none');
	    }
	});

	$("input[type='checkbox']").change(function() {
		console.log('alert')
		if(this.checked){
			$(this).attr('name', 'access[]');
		} else {
			$(this).removeAttr('name');
		}
	})
})