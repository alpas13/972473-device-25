var contactFormLink = document.querySelector('.contact-info-button');
var popupContactForm = document.querySelector('.contact-form');
var isStorageSupport = true;
var storageName = '';
var storageEmail = '';
var mapLink = document.querySelector('.map-photo img');
var mapPopup = document.querySelector('.modal-map');

var submenuShowLink = document.querySelector('.navigation-catalog-title');
var submenu = document.querySelector('.catalog-submenu');

try {
  var closeContactForm = popupContactForm.querySelector('.modal-close');
  var contactFormName = popupContactForm.querySelector('#contact-form-name');
  var contactFormEmail = popupContactForm.querySelector('#contact-form-email');
  var contactFormText = popupContactForm.querySelector('#contact-form-text');
  var contactForm = popupContactForm.querySelector('form');
  var closeMapPopup = mapPopup.querySelector('.modal-close');
} catch (e) {

}

try {
  storageName = localStorage.getItem('Name');
  storageEmail = localStorage.getItem('Email');
} catch (e) {
  isStorageSupport = false;
}

try {
  contactFormLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupContactForm.classList.add('modal-show');
    popupContactForm.classList.add('modal-bounce');
    if (storageName) {
      contactFormName.value = storageName;
      contactFormEmail.value = storageEmail;
      contactFormText.focus();
    } else {
      contactFormName.focus();
    }
  });
} catch (e) {

}

try {
  closeContactForm.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupContactForm.classList.remove('modal-show');
    popupContactForm.classList.remove('modal-bounce');
    popupContactForm.classList.remove('modal-error');
  });
} catch (e) {

}

try {
  contactForm.addEventListener('submit', function (evt) {
    if (!contactFormName.value || !contactFormEmail.value || !contactFormText.value) {
      evt.preventDefault();
      popupContactForm.classList.remove('modal-error');
      popupContactForm.classList.remove('modal-bounce');
      popupContactForm.offsetWidth = popupContactForm.offsetWidth;
      popupContactForm.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('Name', contactFormName.value);
        localStorage.setItem('Email', contactFormEmail.value);
      }
    }
  });
} catch (e) {

}

try {
  mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
    mapPopup.classList.add('modal-bounce');
  });
} catch (e) {

}

try {
  closeMapPopup.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
    mapPopup.classList.remove('modal-bounce');
  });
} catch (e) {

}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupContactForm.classList.contains('modal-show')) {
      popupContactForm.classList.remove('modal-show');
      popupContactForm.classList.remove('modal-bounce');
      popupContactForm.classList.remove('modal-error');
    }
    if (mapPopup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
      mapPopup.classList.remove('modal-bounce');
    }
  }
});

submenuShowLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  submenu.classList.toggle('submenu-show');
});
