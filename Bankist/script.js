'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//cookie message
const header = document.querySelector('.header');

const message = document.createElement('div');
message.classList.add('test');

message.innerHTML =
  'We Use Cookies for betterment.  <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

///////////
////////////
//smooth scroll(old way)

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
/*

btnScrollTo.addEventListener("click", function (e) {
  const s1Cordinates = section1.getBoundingClientRect(); //gives relative distance between section top and viewport top
  console.log(s1Cordinates);

  //  console.log(e.target.getBoundingClientRect())
  window.scrollTo({
    left: s1Cordinates.left + window.pageXOffset,//relative height+height scrolled thorugh page
    top: s1Cordinates.top + window.pageYOffset,
    behavior: "smooth",
  });
});*/

//scroll(new way)
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el, i) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = el.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     // document
//     //   .getElementById(`section--${i + 1}`)
//     //   .scrollIntoView({ behavior: 'smooth' });
//   });
// });

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/// Tabbed Component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const contentContainer = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  //tabs activation
  const clicked = e.target.closest('.operations__tab');
  if (!clicked) return;
  tabs.forEach(b => b.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //content activation
  contentContainer.forEach(c =>
    c.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/// nav Fading Effect

const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

///nav Sticking

const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
