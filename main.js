function load_effect() {
  let element = document.getElementsByClassName("my_image-text");
  //要素がない場合は終了
  if (!element) return;

  for (let i = 0; i < element.length; i++) {
    element[i].classList.add("is-show");
  }
}
setTimeout(load_effect, 500); //500ミリ秒後に実行
