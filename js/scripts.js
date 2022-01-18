(function(){
	'use strict'
	console.log('Hello World!');
	let x = 1;
	console.log('x', x);

	const filterOdd = n => n % 2 !== 0
	const arrayOne = [1, 2, 3, 4, 5]
	const arrayTwo = [11, 22, 33, 44, 55]
	const arrayOneOdds = arrayOne.filter(filterOdd)
	const arrayTwoOdds = arrayTwo.filter(filterOdd)
	console.log(arrayOne)
	console.log(arrayOneOdds)
	console.log(arrayTwo)
	console.log(arrayTwoOdds)
}());