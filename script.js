function setUserName() {
  const nameInput = document.querySelector('.ChatInput__InputWithSmallGutter-fOaQzB input');
  nameInput.value = 'Your Name'; // Replace 'Your Name' with the desired name
  const nameSubmitButton = document.querySelector('.ChatInput__InputWithSmallGutter-fOaQzB button');
  nameSubmitButton.click();
}
function sendMessage(message) {
  const textbox = document.getElementsByClassName("sc-bdVaJa eFZRmf")[1];
  textbox.value = message;
  const button = document.getElementsByClassName("Button__Wrap-ivpgWU dSirvr ButtonBase__WrapperButton-bsASeg cylsQk");
  button[1].click();
}
