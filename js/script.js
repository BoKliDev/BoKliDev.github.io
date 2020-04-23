const dollarValueEl = document.querySelector('.js-dollarValue');
const rubValueEl = document.querySelector('.js-rubValue');
const ACCESS_KEY = '599b76f6d18d67a2b7f38638773407f5';
const BASE_URL = 'http://data.fixer.io/api/';
let USD;
let RUB;

fetch(`${BASE_URL}latest?access_key=${ACCESS_KEY}`)
  .then(response => response.json())
  .then(result => {
    USD = result.rates.USD;
    RUB = result.rates.RUB;
    dollarValueEl.insertAdjacentHTML('beforeend', USD);
    rubValueEl.insertAdjacentHTML('beforeend', RUB);
  });

const allNewsBtnEl = document.querySelector('.js-allNewsBtn');
const popupEl = document.querySelector('.js-popup');
const body = document.querySelector('body');

popupEl.addEventListener('click', () => {
  popupEl.classList.remove('popupShow');

  enableScroll();
});

allNewsBtnEl.addEventListener('click', (ev) => {
  ev.preventDefault();

  popupEl.classList.add('popupShow');

  disableScroll();
})

const prevDef = (e) => {
  e.preventDefault();
}

const prevDefKey = (e) => {
  if (e.keyCode == 38 || e.keyCode == 40) {
    e.preventDefault();
  }
}

function disableScroll() {
  body.addEventListener('touchmove', prevDef, { passive: false })

  body.addEventListener('wheel', prevDef, { passive: false })

  body.addEventListener('keydown', prevDefKey)
}

function enableScroll() {
  body.removeEventListener('wheel', prevDef)

  body.removeEventListener('touchmove', prevDef)

  body.removeEventListener('keydown', prevDefKey)
}

const crossImg = document.querySelector('#crossImg');
const burgerImg = document.querySelector('#burgerImg');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burgerMenu');
const burgerText = document.querySelectorAll('.burgerMenu p');

crossImg.style.transform = "scale(0)";
burgerMenu.style.transform = "scaleY(0)";

burger.addEventListener('click', () => {
  if (crossImg.style.transform === "scale(0)") {
    burgerImg.style.transform = "scale(0)";
    crossImg.style.transform = "scale(1)";
    burgerMenu.style.transform = "scaleY(1)";
    setTimeout(() => burgerText.forEach((e) => e.style.transform = "translateY(0)"), 300)
  } else {
    crossImg.style.transform = "scale(0)";
    burgerImg.style.transform = "scale(1)";
    setTimeout(() => burgerText.forEach((e) => e.style.transform = "translateY(-500px)"), 300)
    burgerMenu.style.transform = "scaleY(0)";
  }
})

const searchIcon = document.querySelector('.search-icon');
const searchField = document.querySelector('.search_field');
const searchForm = document.querySelector('.search_form');
searchField.style.transform = 'scaleX(0)'

searchIcon.addEventListener('click', (e) => {
  if (searchField.style.transform === 'scaleX(1)') {
    searchField.style.transform = 'scaleX(0)'
  } else {
    searchField.style.transform = 'scaleX(1)'
  }
})



body.addEventListener('click', (e) => {
  if (searchField.style.transform === 'scaleX(1)' && e.target !== searchField && e.target !== searchIcon) {
    searchField.style.transform = 'scaleX(0)';
  }
})


