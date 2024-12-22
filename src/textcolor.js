const BUTTON_CLICK_EVENT = document.getElementById('change');

BUTTON_CLICK_EVENT.addEventListener('click', () => {
  let object = document.getElementById('object');
  object.style.color = '#ffffff';            //文字色を白にする
  object.style.backgroundColor = '#ff0000';  //背景色を赤にする
});

const BUTTON_CLICK_EVENT2 = document.getElementById('change2');
let changeText = "変化しました！";
BUTTON_CLICK_EVENT2.addEventListener('click', () => {
  let object = document.getElementById('object2');
  let tempText = object.textContent;
  object.innerText = changeText;
  changeText = tempText;
});