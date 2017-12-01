const checker = function() {
  if (document.querySelector('.is-due-now')) {
    console.log(document.querySelector('.is-due-now').title);
  }
}

window.setInterval(checker, 10000);
