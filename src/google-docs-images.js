if ( typeof imgName === 'undefined' ) {
  var imgName = 'new-image';
}

var doc = document;

// блок стилей для блока, в котором показываем имя картинки
var style = '.imgpathbox {' +
  'position: absolute;' +
  'left: auto;' +
  'text-align: right;' +
  'right: 1px;' +
  'top: 1px;' +
  'background-color: rgba(255,255,255,.8);' +
  'font-size: 13px;' +
  'line-height: 13px;' +
  'color: #000;' +
  'padding: 2px 4px;' +
'}';
doc.write('<style type="text/css">' + style + '</style>');

var imageItem = doc.getElementsByTagName('img');

for (var i = 0; i < imageItem.length; i++) {
  var imageItemSrc    = imageItem[i].getAttribute('src');
                        imageItem[i].setAttribute('download', imgName + '_' + (i + 1)); // эксперементальная штука, конечно
  var imgPathBox      = doc.createElement('span');                // создали новый узел
      imgPathBox.className = 'imgpathbox';                        // добавили классный класс
      imgPathBox.innerHTML = imageItemSrc + '<br>' + imgName + '_' + (i + 1); // добавили в контент информацию и картинке
  var imageItemParent = imageItem[i].parentElement;               // нашли родительский тег для картинки
      imageItemParent.style.overflow='inherit';                   // выключили overflow у родительского тега картинки
      imageItemParent.appendChild(imgPathBox);                    // добавили узел после картинки

  // дублируем всё в консоль
  console.log('Путь к оригинальной картинке: %c' + imageItemSrc + '%c, переименованный правильный вариант: %c' + imgName + '_' + (i + 1), 'color: red;', 'color: inherit;', 'color: green;');
}
