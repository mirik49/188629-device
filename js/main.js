var link = document.querySelector(".write-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = document.querySelector(".form");
var login = document.querySelector(".login");
var email = document.querySelector(".email");
var textarea = document.querySelector(".textarea");
var isStorageSupport = true;

var storageLogin = "";
var storageEmail = "";
try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");

} catch (err) {
  isStorageSupport = false;
}
link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
    if (storageLogin) {
      login.value = storageLogin;
      email.focus();
    }
    else {
        login.focus();
      }
    if (storageLogin && storageEmail) {
      email.value = storageEmail;
      textarea.focus();

    }

});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  login.classList.remove("wrong-input");
  email.classList.remove("wrong-input");
  popup.offsetWidth = popup.offsetWidth;
});
form.addEventListener("submit", function(evt) {
  if (!login.value) {
    evt.preventDefault();
    login.classList.add("wrong-input");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", login.value);
    }
  }
  if (!email.value) {
    evt.preventDefault();
    email.classList.add("wrong-input");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("email", email.value);
    }
  }

});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      login.classList.remove("wrong-input");
      email.classList.remove("wrong-input");
    }
  }
});
var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
  window.addEventListener("keydown", function(evt) {

    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
          evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
  });
