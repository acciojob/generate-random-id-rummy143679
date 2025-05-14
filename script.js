function makeid(l) {
  // write your code here
	const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
	let random = "";
	for (let index = 0; index < l; index++) {
		let num = Math.random()*str.length();
		str += str[num];
	}
	return str;
}

// Do not change the code below
const l = prompt("Enter a number.");
alert(makeid(l));
