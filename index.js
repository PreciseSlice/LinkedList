// GLobal Variables


var websiteInput = $('.website-user-input');

var urlInput = $('.url-user-input');

var totalLinkCounter = 0;

var totalReadCounter = 0;


// Event Listeners


$('.submit').on('click', prependCard);

$('.submit').on('click', totalLinksOnPage)

$('.submit').on('click', totalUnread)




$('.bookmark-container').on('click', function(event){
	event.preventDefault();
	var currentCard= $(event.target).closest('article');
	
	if(event.target.className === 'read') { 
		currentCard.toggleClass('read-link');
		totalUnread();
  }

	if(event.target.className === 'delete') {
		currentCard.remove();
		deleteCounter();
		totalLinksOnPage();
		totalUnread();	
	}
});

websiteInput.on('input', enableSubmitBtn);
urlInput.on('input', enableSubmitBtn);

$('.bookmark-container').on('click', totalRead);

// $('.bookmark-container').on('click', totalUnread);


// Functions 


function prependCard(event) {
	event.preventDefault();
	var websiteInputValue = websiteInput.val();
	var urlInputValue = urlInput.val();
	
	$('.bookmark-container').prepend(
		
		`<article class="first-article">
			<h2 class=website-title>${websiteInputValue}</h2>
			<hr />
			<form>
			<a href="${urlInputValue}" class="url-placeholder">${urlInputValue}</a>
			<hr />
				<button class="read">Read</button>
				<button class="delete">Delete</button>
			</form>
		</article>`
	);
	redisableSubmitBtn();
	deleteInputFields();
	incramentCounter();
}

function enableSubmitBtn() {
	if(websiteInput.val() !== '' && urlInput.val() !== '') {
		$('.submit').attr('disabled',false);
	}
} 

function redisableSubmitBtn(){
	$('.submit').attr('disabled', true);
}

function deleteInputFields(){
	websiteInput.val('');
	urlInput.val('');
}

function incramentCounter(){

	// console.log(totalLinkCounter);
	totalLinkCounter++;
	// console.log(totalLinkCounter);
}

function deleteCounter(){
	// console.log(totalLinkCounter);
	totalLinkCounter--;
	// console.log(totalLinkCounter);
}

function totalLinksOnPage(){
	var y = $('.first-article').length;
	// console.log(y);
}

function totalRead(){
	var n = $('.read-link').length;
	// console.log(n);
}


function totalUnread(){
	var y = $('.first-article').length;
	var n = $('.read-link').length;
	console.log(y-n);
}
