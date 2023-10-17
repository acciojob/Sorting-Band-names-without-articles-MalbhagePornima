//your code here
let withoutArticles=[];
let map={};
for(let i=0;i<arr.length;i++)
	{
		let str=arr[i];
		str=str.replace(/|ban\b|\bthe\b|ba\b/gi, "");
		str=str.replace(/ +/gi, " ");
		str=str.trim();
		map[str]=arr[i];
		withoutArticles.push(str);
	}
for(let i=0;i<withoutArticles;i++)
	{
		console.log(map[withoutArticles[i] ]);
	}
