// Test - ReactiveX JS

var Rx = require('rx');

// Creating an observable model.

var arr = [3,4,5,6,7,8];
var observable = Rx.Observable.fromArray(arr);
observable.map( x => x+1 );
var subscription = observable.subscribe(x => console.log(x), x => console.log(x));
console.log("inserting new element");
arr.push(40);
console.log(observable);

