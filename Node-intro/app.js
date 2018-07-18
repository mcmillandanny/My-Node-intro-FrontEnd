console.log("Hello world from node!");

// console.log(__filename, __dirname);

let fs = require('fs');  // require is telling node ot go and get me something, and store it in the new variable called FS. require is 
// a function unique to node. FS = File System
let colors = require('colors');
let http = require('http');

fs.readFile(__dirname + '/message.txt', {encoding: 'utf-8'}, (err, data) => {
  console.log(err, data)
});


 http.createServer(function (req, res) {  	//req is short for request, res is short for resposne
	console.log('Got a request on port 1337'.red)
	// console.log(req);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.writeHead(200, {"content-type": "text/html"});

	var curseWord = [
		"Fuck",
		"Shit",
		"Ass",
		"Kiwi",
		"Taco Salad"
	]

	curseWordRandom = curseWord[ Math.floor (Math.random() * curseWord.length)];
	
	
	// if (req.url === "/pg13") {
	// 	word = 'butt';
	// }



	res.end(curseWordRandom);
}).listen(1337);
