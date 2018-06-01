
function pyramid(nor) {
	var spacecount = nor;
	for (i=1; i<=nor; i++) {
		const num = [];		
			for(m=spacecount-1; m>0; m-- ) {
					num.push(" ");
				}
			for(k=1; k<=2*i-1; k++) {
				if(k%2 == 0) {
					num.push(" ")
				}
				else {
					num.push(i);
				}
				
			}
		
		console.log(num.join(" "));
		spacecount--;
	}
}

pyramid(5);