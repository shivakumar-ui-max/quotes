let btn = document.querySelector('.btn');
let quote = document.querySelector('#quote');
let author = document.querySelector('#name');

let quotes = [{
	quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” `,
	name: `Marilyn Monroe `
},
{
	quote: ` “Be yourself; everyone else is already taken.” `,
	name: ` Oscar Wilde `
},
{
	quote: ` “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”  `,
	name: `  Albert Einstein `
}
	,
{
	quote: ` “So many books, so little time.”  `,
	name: `  Frank Zappa  `
}
	,
{
	quote: `“A room without books is like a body without a soul.”  `,
	name: `  Marcus Tullius Cicero `
}
	,
{
	quote: `“ I am not handsome but I can give my hand to someone who needs help… Because beauty is required in the heart, not in face Beauty isn’t dependent on our external appearance. It radiates from within.”  `,
	name: ` APJ Abdul Kalam  `
}
	,
{
	quote: `“Be the change that you wish to see in the world.”`,
	name: `Mahatma Gandhi  `
}
	,
{
	quote: `“ Don't dwell in the past , don't dwell in future, concentrate on the present ”`,
	name: `&#128540; Chintu  `
}
	,

]
btn.addEventListener('click', () => {
	let random = Math.floor(Math.random() * quotes.length);
	author.innerHTML = quotes[random].name;
	quote.innerHTML = quotes[random].quote;

});