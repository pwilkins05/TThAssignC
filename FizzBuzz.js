(function () {
	var line;
	
	// only prints fizz or buzz, not both
	//Curious on whats this for? seems like its not appending the line?
	for (var i = 1; i <= 100; i++) {
		line = "";
		
		if (i % 3 == 0) line = "Fizz";
		if (i % 5 == 0) line += "Buzz";
		//if (i % 3 == 0 && i % 5 == 0) line = "Fizz Buzz";
		
		if (line != "")
			console.log(line);
		else 
			console.log(i);
	}
})();