$(document).ready(function () {

	$('#add-button').click(function() {
	$('ul').append('<li class="item">' + $('input#add-item').val() + '</li>' + '<button class="remove">Remove</button>');
	});

	$('#remove-button').click(function() {
		alert("clicked");
	$('ul').remove('<li class="item">' - $('input#add-item').val() - '</li>' - '<button class="remove">Remove</button>');
	});
});