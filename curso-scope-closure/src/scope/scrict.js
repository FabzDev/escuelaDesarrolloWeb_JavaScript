//pi = 3.1416;
//console.log(pi);
// En este caso JS interpreta esto como var pi = 3.1416

"use strict";
pi = 3.1416;
console.log(pi);

function myfunction() {
	"use strict";
	return (pi = 3.1416);
}

console.log(myfunction());
