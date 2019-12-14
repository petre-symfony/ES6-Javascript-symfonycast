class AGreatClass {
	constructor(greatNumber) {
		this.greatNumber = greatNumber;
	}

	returnGreatThings() {
		return this.greatNumber;
	}
}

class AnotherGreatClass extends AGreatClass{
	constructor(greatNumber, greatWord) {
		super(greatNumber);

		this.greatWord = greatWord;
	}

	returnGreatThings() {
		let greatNumber = super.returnGreatThings();

		return [greatNumber, this.greatWord];
	}
}

const aGreatObject = new AnotherGreatClass(42, 'adventure');
console.log(
	aGreatObject.returnGreatThings()
);

/*
 ---------------------------------------------------------
 Spread Operator
 */
let printThreeThings = function(thing1, thing2, thing3) {
	console.log(thing1, thing2, thing3);
};

let yummyThings = ['pizza', 'gelato', 'sushi', 'cheeseburger'];
let greatThings = ['swimming', 'sunsets', ...yummyThings, 'New Orleans'];

printThreeThings(...yummyThings);
console.log(greatThings);