function openNewWin(e) {  
	var newWin = Alloy.createController('newWin', {});

	newWin.navGroup = $.navGroup;
	
	$.navGroup.open(newWin.getView());
}

$.index.open();
