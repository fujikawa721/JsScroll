const BUTTON_CLICK_EVENT = document.getElementById('change');

BUTTON_CLICK_EVENT.addEventListener('click', () => {
  let object = document.getElementById('object');
  object.innerText = '変更しました';
});
