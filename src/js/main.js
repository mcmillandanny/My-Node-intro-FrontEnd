console.log(`Node-Intro FrontEnd`);
	
let $theh1 = document.querySelector('h1');
	axios
		.get('http://localhost:1337')
		.then(function (response) {
			console.log(response);

			var data = response.data;
			console.log(data)
			$theh1.innerHTML = data;
		})

		.catch(function (error) {
			console.log(error);
		})
