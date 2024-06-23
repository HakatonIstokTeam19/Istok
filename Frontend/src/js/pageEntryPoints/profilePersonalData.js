import initModals from "../shared/handleModals.js";

window.addEventListener("DOMContentLoaded", () => {
    initModals();

    function maskPasswordById(id) {
      const passwordText = document.querySelector(id);
      const passwordTextValue = passwordText.textContent;
      const passwordTextLength = passwordTextValue.length;
      const passwordTextMask = "\u25CF".repeat(passwordTextLength);
      passwordText.textContent = passwordTextMask;
    }

    maskPasswordById(".profile__password-mask");

  });