$(function() { //- после загрузки DOM-элементов

	if(document.getElementById('Data_User_Phone')){
	document.getElementById('Data_User_Phone').addEventListener('input', function(){
	if(this.value=='+7(7__)___-__-__' || this.value=='+7(8__)___-__-__') {
	this.value = '';
	return false;
	}
	});
	}

	$('input[type="tel"]').each(function(){
	this.addEventListener('input', function(){
	if(this.value=='+7(7__)___-__-__' || this.value=='+7(8__)___-__-__') {
	this.value = '';
	return false;}
	});
	});

});

/////////////////////

$(window).load(function() { //- после загрузки всей страницы, включая изображения
	$('#Phone, #Data_User_Phone, #buyOneClickFormPhone').each(function(){
	this.addEventListener('input', function(){
	if(this.value=='+7(7__)___-__-__' || this.value=='+7(8__)___-__-__') {
	this.value = '';
	return false;}
	});
	});
});

$(function() { //- после загрузки DOM-элементов
	$('#Phone, input[type="tel"]').each(function(){
	this.addEventListener('input', function(){
	if(this.value=='+7(7__)___-__-__' || this.value=='+7(8__)___-__-__') {
	this.value = '';
	return false;}
	});
	});
});


/////////////////// Chrome + Firefox + IE + Safari //////////////////////

$(function() {
	$('#Phone, #Data_User_Phone').each(function(){
		this.addEventListener('input', function(){
			if(this.value=='+7(7__)___-__-__' || this.value=='+7(8__)___-__-__') {
			this.value = '';
			return false;}
		});
	});

	//modal window
	$(document).on('click', '#buyOneClickFormPhone', function() {
		this.addEventListener('input', function(){
			if(this.value=='+7(7__)___-__-__' || this.value=='+7(8__)___-__-__') {
			this.value = '';
			return false;}
		});
	});
});