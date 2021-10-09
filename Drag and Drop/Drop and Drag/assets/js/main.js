const dropItems = document.getElementById('drop-item');
new Sortable(dropItems, {
    animation: 300,
	chosenClass: "sortable-chosen", 
	dragClass: "sortable-drag"
});