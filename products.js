document.addEventListener("DOMContentLoaded", () => {

    const navText = document.querySelector(".nav-text");
    const letters = navText.textContent.split("");
    navText.textContent = "";
  
    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      navText.appendChild(span);
    });

    let currentIndex = 0;
  const colors = ["red", "blue", "green", "orange", "purple"];

  function animateLetters() {
    const spans = navText.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.transform = "scale(1)";
      span.style.color = "black";
    });

    const currentSpan = spans[currentIndex];
    currentSpan.style.transform = "scale(1.5)";
    currentSpan.style.color = colors[currentIndex % colors.length];

    currentIndex = (currentIndex + 1) % spans.length;
    setTimeout(animateLetters, 500);
  }

  animateLetters();

    // Change nav background on scroll
  const nav = document.querySelector('nav');
  const vid = document.querySelector('video');
  const button1 = document.querySelector('button1');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
          nav.style.backgroundColor = '#41a7f5';
          nav.style.padding = '1px';
          nav.style.top = '0px';
          nav.style.height = '40px';
          nav.style.width = '100%';
      } else {
        nav.style.backgroundColor = '#41a7f5';
        nav.style.padding = '';
        nav.style.top = '';
        nav.style.height = '';
  }});
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const currentPrice = card.querySelector('.current-price');
    const button = document.createElement('button');
    button.classList.add('button-85');
    button.textContent = 'Ajouter au panier';
    button.style.display = 'none';
    card.appendChild(button);
    card.addEventListener('mouseover', () => {
      currentPrice.style.display = 'none';
      button.style.display = 'block';
      button.style.marginLeft = '20%';

    });

    card.addEventListener('mouseout', () => {
      currentPrice.style.display = 'block';
      button.style.display = 'none';
    });
  });
const cartIcon = document.querySelector('a img[alt="Cart"]');
let cartCount = 0;
const cartCounter = document.createElement('span');
cartCounter.style.position = 'absolute';
cartCounter.style.top = '0';
cartCounter.style.right = '1';
cartCounter.style.backgroundColor = 'red';
cartCounter.style.color = 'white';
cartCounter.style.borderRadius = '50%';
cartCounter.style.padding = '2px 6px';
cartCounter.style.fontSize = '12px';
cartCounter.style.display = 'none';
cartIcon.parentElement.style.position = 'relative';
cartIcon.parentElement.appendChild(cartCounter);

productCards.forEach(card => {
  const button = card.querySelector('.button-85');
  const quantitySelector = document.createElement('div');
  quantitySelector.classList.add('quantity-selector');

  const decreaseButton = document.createElement('button');
  decreaseButton.classList.add('decrease-quantity');
  decreaseButton.textContent = '-';

  const quantitySpan = document.createElement('span');
  quantitySpan.classList.add('quantity');
  quantitySpan.textContent = '1';

  const increaseButton = document.createElement('button');
  increaseButton.classList.add('increase-quantity');
  increaseButton.textContent = '+';

  quantitySelector.appendChild(decreaseButton);
  quantitySelector.appendChild(quantitySpan);
  quantitySelector.appendChild(increaseButton);
  quantitySelector.style.display = 'flex';
  quantitySelector.style.justifyContent = 'space-between';
  quantitySelector.style.marginTop = '10px';
  card.insertBefore(quantitySelector, button);

  let quantity = 1;

  decreaseButton.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantitySpan.textContent = quantity;
    }
  });

  increaseButton.addEventListener('click', () => {
    quantity++;
    quantitySpan.textContent = quantity;
  });

  button.addEventListener('click', () => {
    cartCount += quantity;
    cartCounter.textContent = cartCount;
    cartCounter.style.display = 'block';
    quantity = 1;
    quantitySpan.textContent = quantity;
    
  });

});
});

