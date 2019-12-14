/*
	-----------------------------------
	Class Inheritance and super Calls
 */
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
let copyOfGreatThings = [...greatThings];
copyOfGreatThings.push('summer');

printThreeThings(...yummyThings);
console.log(greatThings);
console.log(copyOfGreatThings);

/*
	-----------------------------------
	Template Strings
 */
const favoriteFood = 'gelato';
const iLoveFood = `The year is ${(new Date()).getFullYear()} and my favorite food is ${favoriteFood}`;
console.log(iLoveFood);

/*
	-----------------------------------
	Map and WeakMap
 */

/*
let foods = new Map();

foods.set('italian', 'gelato');
foods.set('mexican', 'tortas');
foods.set('canadian', 'poutine');

let southernUsStates = ['Tennessee', 'Kentucky', 'Texas'];
foods.set(southernUsStates, 'hot chicken');

console.log(
	foods.get('italian'),
	foods.has('french'),
	foods.get(southernUsStates),
	foods.size
);
*/

let foods = new WeakMap();

foods.set(['italian'], 'gelato');
foods.set(['mexican'], 'tortas');
foods.set(['canadian'], 'poutine');

let southernUsStates = ['Tennessee', 'Kentucky', 'Texas'];
foods.set(southernUsStates, 'hot chicken');
southernUsStates = null;

console.log(
	foods.get(['italian']),
	foods.has(['french']),
	foods.get(southernUsStates),
	foods.size
);
