document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.querySelector('.card-body').style.display = 'block';
    });
  
    card.addEventListener('mouseout', () => {
      card.querySelector('.card-body').style.display = 'none';
    });
  });