//your JS code here. If required.
function mapLetters(str){
	let letterMap = {};
	for(let i=0; i<str.length; i++)
		{
			let char = str[i];
			if(!(char in letterMap))
			{
				letterMap[char] = [];
				
			}
			letterMap[char].push(i);
		}
	return letterMap;
	
}