document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-item, .filter-pill, .btn, .hero-btn, .play-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.classList.contains('nav-item')) {
        document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
      }

      if (button.classList.contains('filter-pill')) {
        document.querySelectorAll('.filter-pill').forEach((item) => item.classList.remove('active'));
        button.classList.add('active');
      }
    });
  });

  const marqueeText = document.querySelector('.notice-text');
  if (marqueeText) {
    const loopText = marqueeText.textContent.trim();
    marqueeText.textContent = `${loopText} ${loopText}`;
  }
});
