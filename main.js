const data = JSON.stringify({
	from: 'auto',
	to: 'en',
	text: 'Xin chào cảm ơn bạn đã sử dụng dịch vụ của chúng tôi'
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://google-translate113.p.rapidapi.com/api/v1/translator/text');
xhr.setRequestHeader('x-rapidapi-key', '624507c2d6mshd222a7c30b59febp16c25ejsn4f348a2b6a0b');
xhr.setRequestHeader('x-rapidapi-host', 'google-translate113.p.rapidapi.com');
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(data);