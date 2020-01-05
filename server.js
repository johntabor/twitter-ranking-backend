const express = require("express");
const Twitter = require('twitter');

const client = new Twitter({
	consumer_key: 'ICS9rsg7jyt5zFntpU3BsDDyf',
	consumer_secret: 'hMM2zPpWpEjhlG4wTqfAbkOfWoveE85ZpOAJO1DwAQUPUFJgzl',
	access_token_key: '1058530601689583619-2bYvpixPfjMfv0vIAgFW7AUXQ9yYlJ',
	access_token_secret: 'DNzlngQXErL3lnjDGg1d7QpBVG6LDbcYQv7nKt4c1NHTD',
});


// MOCK DATA TO USE SO I DONT USE TOO MANY API REQUESTS
const followers = [
	1163563912765292500,
	2820706447,
	1972087915,
	211390613,
	542234413,
	1148644205499179000,
	972453637,
	1117467421206560800,
	716461412,
	412914400,
	53116474,
	1400923038,
	1071487783699537900,
	404890829,
	2903891792,
	34612333,
	1055290356047269900,
	203958419 
];

const old_followers = [
	1163563912765292500,
	2820706447,
	1972087915,
	211390613,
	542234413,
	1148644205499179000,
	972453637,
	1117467421206560800,
	716461412,
	412914400,
	53116474,
	1400923038,
	1071487783699537900,
	404890829,
	2903891792,
];

const getNewFollowers = (newFollowers, oldFollowers) => {
	return newFollowers.filter(follower => !oldFollowers.includes(follower));
};

const app = express();
app.listen(3000, () => {
	console.log("running on port 3000");
	
	const newFollowers = getNewFollowers(followers, old_followers);
	const karaId = 174618314; // so i can get someones ID. what if i don't follow them?

	client.get('followers/list', { user_id: karaId}, (err, data ,res) => {
		console.log(data.users);
	});
	/*
	client.get('followers/list', (err, data, res) => {
		console.log(data.users.length);
	}); */
	/*
	client.get('users/lookup', { userid: [203958419]}, (err, data, res) => {
		console.log(data);
	});*/
});