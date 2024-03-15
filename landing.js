document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const target = document.querySelector(card.dataset.target);
      target.style.display = 'block';
    });
  });