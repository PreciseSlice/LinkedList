//Form functionality

$(document).ready(function(){
	$('.first-article').hide();
});

$('.submit').on('click', function(event) {
	event.preventDefault();
	var websiteInput = $('.website-user-input').val();
	var urlInput = $('.url-user-input').val();
	$('.bookmark-container').prepend(
		`<article class="first-article">
			<h2 class=website-title>${websiteInput}</h2>
			<hr />
			<form>
			<a href="${urlInput}" class="url-placeholder">${urlInput}</a>
			<hr />
				<button class="read">Read</button>
				<button class="delete">Delete</button>
			</form>
		</article>`
	);
});



// $websiteInput.prepend(h2);

// $urlInput.innerHTML(a);

// $( ".inner" ).prepend( "<p>Test</p>" );

//.append