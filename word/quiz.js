document.addEventListener('change', function(e) {
  var input = e.target;
  if (!input.matches || !input.matches('.quiz-q input[type="radio"]')) return;
  var box = input.closest('.quiz-q');
  var feedback = box.querySelector('.q-feedback');
  if (input.value === box.getAttribute('data-answer')) {
    feedback.textContent = '\u2b55 \uc815\ub2f5\uc785\ub2c8\ub2e4!';
    feedback.className = 'q-feedback ok';
    box.classList.add('answered');
    var radios = box.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radios.length; i++) radios[i].disabled = true;
  } else {
    feedback.textContent = '\u274c \ub2e4\uc2dc \uc0dd\uac01\ud574 \ubcf4\uc138\uc694.';
    feedback.className = 'q-feedback no';
  }
});
