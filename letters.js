
function arrangeLetters (word) {
	var newWord = [];
	var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
	for (i=0; i<alphabets.length; i++) {
		for (j=0; j<word.length; j++) {
			if (alphabets[i] == word[j]) {
				newWord.push(alphabets[i]);
			}
		}
	}	 	
	return newWord;
}

var wordOrder = arrangeLetters("coderbyte");
console.log(wordOrder.join(""));
