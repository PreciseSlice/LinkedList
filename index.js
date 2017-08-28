//Form functionality

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

$('.bookmark-container').on('click', function(event){
	event.preventDefault();
	var currentCard= $(event.target).closest('article');
	if(event.target.className === 'read') { 
		currentCard.toggleClass('read-link');
	}
	if(event.target.className === 'delete') {
		currentCard.slideUp();	
	}
});


