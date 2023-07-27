
document.addEventListener('DOMContentLoaded', () => {
  const factElements = document.querySelectorAll('.factDescription');

  factElements.forEach((element) => {
    element.addEventListener('click', async () => {
      const factItem = element.parentElement;
      const activeItem = document.querySelector('.factItem.active');
      const img = element.parentElement.querySelector('.apiImages img')

      const getCatFact = async ()=>{
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const apiText = factItem.querySelector('.apiText');
        apiText.textContent = data.fact;
        img.style.width = '100%'
    }

    const getCatImg = async ()=>{
        const getCatImg = await fetch('https://api.thecatapi.com/v1/images/search');
        const infoCats = await getCatImg.json()
        const urlImg = infoCats[0].url
        img.src = urlImg
    }

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

        getCatFact()
        getCatImg()


        accordionText.textContent = 'Click to close fact';
        accordionSign.textContent = '-';
      } else {
        accordionText.textContent = 'Click to open fact';
        accordionSign.textContent = '+';
      }
    });
  });

  const factListImg = document.getElementById('factListImg');
  const logo = document.getElementById('logo');
  const logoInvertido = document.getElementById('logoInvertido')

  factListImg.addEventListener('mouseover', () => {
    logo.style.display = 'none';
    logoInvertido.style.display = 'block'
  });

  factListImg.addEventListener('mouseout', () => {
    logo.style.display = 'block';
    logoInvertido.style.display = 'none'
  });
});
