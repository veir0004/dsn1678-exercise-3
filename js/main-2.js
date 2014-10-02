// JavaScript Document

var salesLeft = $('.sales-left');
var detailsLeft = $('.details-left');

var salesLeftClickHandler = function () {
	var isActive = detailsLeft.attr('data-state');
	
	if (isActive == 'active') {
		detailsLeft.attr('data-state', 'inactive'); 
	} else {
		detailsLeft.attr('data-state', 'active');
	}
};

salesLeft.on('click', salesLeftClickHandler);

var salesRight = $('.sales-right');
var detailsRight = $('.details-right');

var salesRightClickHandler = function () {
	var isActive = detailsRight.attr('data-state');
	
	if (isActive == 'active') {
		detailsRight.attr('data-state', 'inactive'); 
	} else {
		detailsRight.attr('data-state', 'active');
	}
};

salesRight.on('click', salesRightClickHandler);