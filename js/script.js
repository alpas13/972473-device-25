var contactFormLink = document.querySelector('.contact-info-button');
var popupContactForm = document.querySelector('.contact-form');
var closeContactForm = popupContactForm.querySelector('.modal-close');
var contactFormName = popupContactForm.querySelector('#contact-form-name');
var contactFormEmail = popupContactForm.querySelector('#contact-form-email');
var contactFormText = popupContactForm.querySelector('#contact-form-text');
var contactForm = popupContactForm.querySelector('form');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';
var mapLink = document.querySelector('.map-photo img');
var mapPopup = document.querySelector('.modal-map');
var closeMapPopup = mapPopup.querySelector('.modal-close');

try {
  storageName = localStorage.getItem('Name');
  storageEmail = localStorage.getItem('Email');
} catch (e) {
  isStorageSupport = false;
}

contactFormLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupContactForm.classList.add('modal-show');
  if (storageName) {
    contactFormName.value = storageName;
    contactFormEmail.value = storageEmail;
    contactFormText.focus();
  } else {
    contactFormName.focus();
  }
});

closeContactForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupContactForm.classList.remove('modal-show');
  popupContactForm.classList.remove('modal-error');
});

contactForm.addEventListener('submit', function (evt) {
  if (!contactFormName.value || !contactFormEmail.value || !contactFormText.value) {
    evt.preventDefault();
    popupContactForm.classList.remove('modal-error');
    popupContactForm.offsetWidth = popupContactForm.offsetWidth;
    popupContactForm.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('Name', contactFormName.value);
      localStorage.setItem('Email', contactFormEmail.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupContactForm.classList.contains('modal-show')) {
      popupContactForm.classList.remove('modal-show');
      popupContactForm.classList.remove('modal-error');
    }
  }
});

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

closeMapPopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if(mapPopup.classList.contains('modal-show')) {
    mapPopup.classList.remove('modal-show');
  }
});
