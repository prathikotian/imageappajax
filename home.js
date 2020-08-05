var button = document.getElementById("btn");
console.log('bb ' + button);
var randomImage = document.querySelector('#randomPic');
console.log('image == ' + randomImage)

button.addEventListener("click", function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status === 200) {
			var parsedResponse = JSON.parse(xhr.responseText);
			console.log(parsedResponse);
			randomImage.src = parsedResponse.message; 
		}
	}
	xhr.send();
});
