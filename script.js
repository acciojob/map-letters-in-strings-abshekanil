//your JS code here. If required.
mapLetters(str){
	let letterMap = {};
	for(let i=0; i<str.length; i++)
		{
			let char = str[i];
			if(char in letterMap)
			{
				letterMap[char].push(i);
			}else
			{
				letterMap[char] = [i];
			}
		}
	return letterMap;
}