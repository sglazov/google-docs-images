(function( $ ) {
  'use strict';

  let doc = document;
  var imgName = 'newimage_';

  // блок стилей для блока, в котором показываем имя картинки
  var style = '.imgpath {' +
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

  // для каждой картинки в тексте показываем её всё
  $('img').each(function (index, element) {
    var imgpath = $(this).attr('src');
    $(element).parents('span').css('overflow', 'inherit');
    $(element).after('<span class="imgpath"></span>');
    $(element).next('.imgpath').html(imgpath +'<br>' + imgName + (index + 1));
    console.log('Путь к оригинальной картинке: %c' + $(element).attr('src') + '%c, переименованный правильный вариант: %c' + imgName + (index + 1), 'color: red;', 'color: inherit;', 'color: green;');
  });

  return false;
})( jQuery );
