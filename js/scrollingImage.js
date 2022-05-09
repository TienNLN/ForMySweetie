
[...document.querySelectorAll('.singleColumn_1')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});

[...document.querySelectorAll('.singleColumn_2')].map(column => {
	column.style.setProperty('--animation1', 'slide1');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});