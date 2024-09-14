document.getElementById('phone').addEventListener('input', function (e) {
  let value = this.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
  if (value.length > 10) value = value.slice(0, 10); // Ограничиваем до 10 цифр

  // Форматируем номер
  let formattedValue = '';
  if (value.length > 0) {
    formattedValue += '(' + value.substring(0, 3);
  }
  if (value.length >= 3) {
    formattedValue += ') ' + value.substring(3, 6);
  }
  if (value.length >= 6) {
    formattedValue += '-' + value.substring(6, 8);
  }
  if (value.length >= 8) {
    formattedValue += '-' + value.substring(8, 10);
  }
  this.value = formattedValue;
});
