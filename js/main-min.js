var link=document.querySelector(".write-link"),popup=document.querySelector(".modal-login"),close=document.querySelector(".modal-close"),form=document.querySelector(".form"),login=document.querySelector(".login"),email=document.querySelector(".email"),textarea=document.querySelector(".textarea"),isStorageSupport=!0,storageLogin="",storageEmail="";try{storageLogin=localStorage.getItem("login"),storageEmail=localStorage.getItem("email")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storageLogin?(login.value=storageLogin,email.focus()):login.focus(),storageLogin&&storageEmail&&(email.value=storageEmail,textarea.focus())}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),login.classList.remove("wrong-input"),email.classList.remove("wrong-input"),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth}),form.addEventListener("submit",function(e){login.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),popup.classList.add("modal-error"),popup.offsetWidth=popup.offsetWidth,login.classList.add("wrong-input")),email.value?isStorageSupport&&localStorage.setItem("email",email.value):(e.preventDefault(),popup.classList.add("modal-error"),popup.offsetWidth=popup.offsetWidth,email.classList.add("wrong-input"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),login.classList.remove("wrong-input"),email.classList.remove("wrong-input"),popup.classList.remove("modal-error")))});var mapLink=document.querySelector(".button-map"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show"))});
