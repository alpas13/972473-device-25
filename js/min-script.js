var contactFormLink=document.querySelector(".contact-info-button"),popupContactForm=document.querySelector(".contact-form"),isStorageSupport=!0,storageName="",storageEmail="",mapLink=document.querySelector(".map-photo img"),mapPopup=document.querySelector(".modal-map"),submenuShowLink=document.querySelector(".navigation-catalog-title"),submenu=document.querySelector(".catalog-submenu");try{var closeContactForm=popupContactForm.querySelector(".modal-close"),contactFormName=popupContactForm.querySelector("#contact-form-name"),contactFormEmail=popupContactForm.querySelector("#contact-form-email"),contactFormText=popupContactForm.querySelector("#contact-form-text"),contactForm=popupContactForm.querySelector("form"),closeMapPopup=mapPopup.querySelector(".modal-close")}catch(o){}try{storageName=localStorage.getItem("Name"),storageEmail=localStorage.getItem("Email")}catch(o){isStorageSupport=!1}try{contactFormLink.addEventListener("click",function(o){o.preventDefault(),popupContactForm.classList.add("modal-show"),popupContactForm.classList.add("modal-bounce"),storageName?(contactFormName.value=storageName,contactFormEmail.value=storageEmail,contactFormText.focus()):contactFormName.focus()})}catch(o){}try{closeContactForm.addEventListener("click",function(o){o.preventDefault(),popupContactForm.classList.remove("modal-show"),popupContactForm.classList.remove("modal-bounce"),popupContactForm.classList.remove("modal-error")})}catch(o){}try{contactForm.addEventListener("submit",function(o){contactFormName.value&&contactFormEmail.value?isStorageSupport&&(localStorage.setItem("Name",contactFormName.value),localStorage.setItem("Email",contactFormEmail.value)):(o.preventDefault(),popupContactForm.classList.remove("modal-bounce"),contactFormName.value||contactFormEmail.value?contactFormName.value?contactFormEmail.setAttribute("Required","required"):contactFormName.setAttribute("Required","required"):(contactFormName.setAttribute("Required","required"),contactFormEmail.setAttribute("Required","required")))})}catch(o){}try{mapLink.addEventListener("click",function(o){o.preventDefault(),mapPopup.classList.add("modal-show"),mapPopup.classList.add("modal-bounce")})}catch(o){}try{closeMapPopup.addEventListener("click",function(o){o.preventDefault(),mapPopup.classList.remove("modal-show"),mapPopup.classList.remove("modal-bounce")})}catch(o){}window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),popupContactForm.classList.contains("modal-show")&&(popupContactForm.classList.remove("modal-show"),popupContactForm.classList.remove("modal-bounce"),popupContactForm.classList.remove("modal-error")),mapPopup.classList.contains("modal-show")&&(mapPopup.classList.remove("modal-show"),mapPopup.classList.remove("modal-bounce")))}),submenuShowLink.addEventListener("click",function(o){o.preventDefault(),submenu.classList.toggle("submenu-show")});