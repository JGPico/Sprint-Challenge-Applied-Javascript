/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {
  const carouselDiv = document.createElement('div');
  const leftBtn = document.createElement('div');
  const mountainImage = document.createElement('img');
  const computerImage = document.createElement('img');
  const treesImage = document.createElement('img');
  const turntableImage = document.createElement('img');
  const rightBtn = document.createElement('div');

  carouselDiv.classList.add('carousel');
  leftBtn.classList.add('left-button');
  rightBtn.classList.add('right-button');

  carouselDiv.append(leftBtn);
  carouselDiv.append(mountainImage);
  carouselDiv.append(computerImage);
  carouselDiv.append(treesImage);
  carouselDiv.append(turntableImage);
  carouselDiv.append(rightBtn);

  leftBtn.textContent = 'Left';
  rightBtn.textContent = 'Right';
  mountainImage.src = './assets/carousel/mountains.jpeg';
  computerImage.src = './assets/carousel/computer.jpeg';
  treesImage.src = './assets/carousel/trees.jpeg';
  turntableImage.src = './assets/carousel/turntable.jpeg';

  return carouselDiv;
}

const carouselEntry = document.querySelector('.carousel-container');

carouselEntry.append(createCarousel());

const tigerTiger = document.createElement('p');
tigerTiger.textContent = 
'Tiger tiger, burning bright, in the forests of the night, What immportal hand or eye could frame thy fearful symmetry?';
carouselEntry.append(tigerTiger);

// Why is carouselEntry not appending anything?