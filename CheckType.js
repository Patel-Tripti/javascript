var a = null;
console.log(typeof(a));

var b = undefined;
console.log(typeof(b));

var c = 1n;
console.log(typeof(c));

console.log(`undefined == null => ${undefined == null} ` );
console.log("undefined === null"+undefined === null);
console.log("20*null =>"+20*null );     //0
console.log("20*undefined =>"+20*undefined );       //nan
console.log(20 + undefined );                 //nan
console.log('20' + undefined );
console.log(20 + null );
console.log('20' + null );
console.log(5%0 );
console.log(5/0 );
// '20'+undefined