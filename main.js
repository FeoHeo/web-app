const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://sky-scanner3.p.rapidapi.com/flights/price-calendar-web?fromEntityId=YUL&toEntityId=ABJ&yearMonth=2024-07');
xhr.setRequestHeader('x-rapidapi-key', '624507c2d6mshd222a7c30b59febp16c25ejsn4f348a2b6a0b');
xhr.setRequestHeader('x-rapidapi-host', 'sky-scanner3.p.rapidapi.com');

xhr.send(data);