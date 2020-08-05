const dogApi = 'https://dog.ceo/api/breeds/image/random';
let button = document.getElementById("btn");
let randomImage = document.querySelector('#randomPic');

window.onload = (event) => {
	console.log('page is fully loaded');
	let loadxhr = new XMLHttpRequest();
	loadxhr.open('GET', dogApi);
	loadxhr.onreadystatechange = () => {
		if (loadxhr.readyState === 4 && loadxhr.status === 200) {
			let response = JSON.parse(loadxhr.responseText);
			randomImage.src = response.message;
		}
	}
	loadxhr.send()
  };

button.addEventListener("click", () => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', dogApi);
	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4 && xhr.status === 200) {
			var parsedResponse = JSON.parse(xhr.responseText);
			randomImage.src = parsedResponse.message; 
		}
	}
	xhr.send();
});
