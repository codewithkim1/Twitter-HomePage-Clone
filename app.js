const tweetBtn = document.querySelector('.tweet-btn');
const tweets = document.querySelector('.tweets');

tweetBtn.addEventListener('click', function() {
  const tweet = document.createElement('div');
  tweet.classList.add('tweet');

  const avatar = document.createElement('img');
  avatar.src = './img/avatar.png';
  avatar.alt = 'avatar';

  const tweetContent = document.createElement('div');
  tweetContent.classList.add('tweet-content');

  const username = document.createElement('h3');
  username.innerHTML = 'Username 3';

  const text = document.createElement('p');
  text.innerHTML = 'New tweet text goes here';

  tweetContent.appendChild(username);
  tweetContent.appendChild(text);

  tweet.appendChild(avatar);
  tweet.appendChild(tweetContent);

  tweets.prepend(tweet);
});
