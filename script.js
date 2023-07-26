document.addEventListener('DOMContentLoaded', () => {
  const factElements = document.querySelectorAll('.factDescription');

  factElements.forEach((element) => {
    element.addEventListener('click', async () => {
      const factItem = element.parentElement;
      const activeItem = document.querySelector('.factItem.active');

      if (activeItem && activeItem !== factItem) {
        activeItem.classList.remove('active');
        const additionalInfo = activeItem.querySelector('.additionalInfo');
        const accordionContainer = factItem.querySelector('.accordionContainer');
        const apiText = factItem.querySelector('.apiText');
        apiText.classList.remove('active');
        accordionContainer.classList.remove('active');
        additionalInfo.classList.remove('active');
        const accordionText = activeItem.querySelector('.accordionText');
        accordionText.textContent = 'Click to open fact';
        const accordionSign = activeItem.querySelector('.accordionSign');
        accordionSign.textContent = '+';
      }

      factItem.classList.toggle('active');
      const additionalInfo = factItem.querySelector('.additionalInfo');
      const accordionContainer = factItem.querySelector('.accordionContainer');
      const apiText = factItem.querySelector('.apiText');
      additionalInfo.classList.toggle('active');
      accordionContainer.classList.toggle('active');
      apiText.classList.toggle('active'); 
      const accordionText = factItem.querySelector('.accordionText');
      const accordionSign = factItem.querySelector('.accordionSign');

      if (additionalInfo.classList.contains('active')) {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const apiText = factItem.querySelector('.apiText');
        apiText.textContent = data.fact;
        accordionText.textContent = 'Click to close fact';
        accordionSign.textContent = '-';
      } else {
        accordionText.textContent = 'Click to open fact';
        accordionSign.textContent = '+';
      }
    });
  });
});
