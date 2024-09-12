document.getElementById('toggle').addEventListener('click', function () {
    var text = document.getElementById('text');
    if (text.style.display === 'none') {
      text.style.display = 'block';
    } else {
      text.style.display = 'none';
    }
  });