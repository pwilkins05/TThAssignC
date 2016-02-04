(function () {
	var line;
	
	// only prints fizz or buzz, not both
	for (var i = 1; i <= 100; i++) {
		line = "";
		
		if (i % 3 == 0) line = "Fizz";
		if (i % 5 == 0) line += "Buzz";
		
		if (line != "")
			console.log(line);
		else 
			console.log(i);
	}
})();