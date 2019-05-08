/* Documentation sample */

function loadPage(page) {

	var img = $('<img />');
	img.load(function() {
		var container = $('.sample-docs .p'+page);
		img.css({width: container.width(), height: container.height()});
		img.appendTo($('.sample-docs .p'+page));
		container.find('.loader').remove();
	});

	img.attr('src', 'pages/' +  (page-2) + '.png');

}

function addPage(page, book) {

	var id, pages = book.turn('pages');

	var element = $('<div/>', {});

	if (book.turn('addPage', element, page)) {
		if (page<28) {
			element.html('<div class="gradient"></div><div class="loader"></div>');
			loadPage(page);
		}
	}
}

function updateTabs() {
	
	var tabs = {2: 'Làm quen', 6:'Gia nhập', 10:'Hỗ trợ', 12:'Văn hóa'},
		left = [],
		right = [],
		book = $('.sample-docs'),
		actualPage = book.turn('page'),
		view = book.turn('view');

	for (var page in tabs) {
		var isHere = $.inArray(parseInt(page, 10), view)!=-1;

		if (page>actualPage && !isHere)
			right.push('<a href="#page/' + page + '">' + tabs[page] + '</a>');
		else if (isHere) {
			
			if (page%2===0)
				left.push('<a href="#page/' + page + '" class="on">' + tabs[page] + '</a>');
			else
				right.push('<a href="#page/' + page + '" class="on">' + tabs[page] + '</a>');
		} else
			left.push('<a href="#page/' + page + '">' + tabs[page] + '</a>');

	}

	$('.sample-docs .tabs .left').html(left.join(''));
	$('.sample-docs .tabs .right').html(right.join(''));

}


function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}


function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}


function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}


