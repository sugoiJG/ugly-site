const button = document.querySelector('#moveButton');
const popup = document.querySelector('#popup');
const imageUrls = [
  './advertise.gif',
  './dog.png',
  'https://example.com/image3.jpg',
  // add more image URLs here
];

button.addEventListener('click', () => {
  const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
  
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});

document.addEventListener('click', function() {
  const position = getRandomPosition();
  const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  const img = document.createElement('img');
  img.src = imageUrl;
  img.style.position = 'absolute';
  img.style.top = position.y + 'px';
  img.style.left = position.x + 'px';
  popup.appendChild(img);
  popup.style.display = 'block';
});

function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  return { x, y };
}
