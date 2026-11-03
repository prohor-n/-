/* 1. Удалить слова длиннее 7 букв — результат в pop-up */
function removeLongWords(){
  var text = document.getElementById('sentence1').value;
  var kept = text.split(/\s+/).filter(function(w){
    var letters = (w.match(/\p{L}/gu) || []).length;
    return w !== '' && letters <= 7;
  });
  alert('Результат: ' + kept.join(' '));
}

/* 2. Самая частая буква — результат в pop-up */
function mostFrequentLetter(){
  var text = document.getElementById('sentence2').value.toLowerCase();
  var letters = text.match(/\p{L}/gu) || [];
  if (letters.length === 0){ alert('В тексте нет букв'); return; }
  var count = {}, best = letters[0];
  letters.forEach(function(ch){
    count[ch] = (count[ch] || 0) + 1;
    if (count[ch] > count[best]) best = ch;
  });
  alert('Чаще всего встречается буква «' + best + '» — ' + count[best] + ' раз(а)');
}

/* 3. Смена цвета фона по кнопкам */
function setBg(color){ document.body.style.background = color; }

/* 4. Часики в заголовке (Title) */
function startTitleClock(){
  var base = document.title;
  function tick(){
    document.title = new Date().toLocaleTimeString('ru-RU') + ' | ' + base;
  }
  tick();
  setInterval(tick, 1000);
}

/* 5. Текущая дата в pop-up */
function showDate(){
  alert('Сегодня: ' + new Date().toLocaleDateString('ru-RU', {
    weekday:'long', day:'numeric', month:'long', year:'numeric'
  }));
}

if (document.body.dataset.clock === 'on') startTitleClock();
