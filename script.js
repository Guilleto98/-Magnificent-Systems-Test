
document.addEventListener('DOMContentLoaded', () => { // Con esta funcion me aseguro que se ejecute siempre que cargaron todos los elementos del DOM
  const factElements = document.querySelectorAll('.factDescription'); // Selecciono todos los elementos que tienen la clase .factDescription

  factElements.forEach((element) => {// Itero sobre cada elemento
    element.addEventListener('click', async () => { // Añado un evento 'click' a cada elemento
      const factItem = element.parentElement; // Almaceno al padre de cada elemento en la constante factItem
      const activeItem = document.querySelector('.factItem.active');// Busco el primer elemento con la clase 'factItem' y 'active', identifico el elemento activo
      const apiImages = document.querySelector('.apiImages')// Selecciono el primer elemento con la clase "apiImages"
      const img = element.parentElement.querySelector('.apiImages img') //Obtengo el elemento de imagen (<img>) dentro del elemento padre de "factDescription" y lo almacena en la variable img.


      //Esta función realiza una solicitud a la API de "catfact.ninja" para obtener un hecho aleatorio sobre gatos.
      //Luego, limita el texto del hecho a 60 caracteres y lo muestra en el elemento con la clase "apiText" dentro del factItem.
      const getCatFact = async ()=>{
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        const limitedText = data.fact.slice(0, 60);
        const apiText = factItem.querySelector('.apiText');
        apiText.textContent = limitedText;
    }

    //Esta función realiza una solicitud a la API de "thecatapi.com" para obtener una imagen aleatoria de un gato.
    //Luego, establece la URL de la imagen en el atributo src de la imagen (img) y ajusta el estilo del elemento
    // "apiImages" para mostrar la imagen correctamente.
    const getCatImg = async ()=>{
        const getCatImg = await fetch('https://api.thecatapi.com/v1/images/search');
        const infoCats = await getCatImg.json()
        const urlImg = infoCats[0].url
        img.src = urlImg
        img.style.width = '100%'
        apiImages.style.padding = '10px'
    }

      if (activeItem && activeItem !== factItem) { // Verifico si existe algun elemento previamente activo y si no es el mismo que acaba de recibir el evento "click". Si es asi procede a cerrar el elemento activo.
        activeItem.classList.remove('active');// Quito la clase "active"
        
        const apiText = factItem.querySelector('.apiText');
        apiText.classList.remove('active');
        
        const accordionContainer = factItem.querySelector('.accordionContainer');
        accordionContainer.classList.remove('active');
        
        const additionalInfo = activeItem.querySelector('.additionalInfo');
        additionalInfo.classList.remove('active');
        
        const accordionText = activeItem.querySelector('.accordionText');
        accordionText.textContent = 'Click to open fact';
        
        const accordionSign = activeItem.querySelector('.accordionSign');
        accordionSign.textContent = '+';
      }

      factItem.classList.toggle('active'); // Alternar la clase 'active' en el elemento factItem, lo que mostrará u ocultará el contenido del acordeón.
      
      const additionalInfo = factItem.querySelector('.additionalInfo');
      additionalInfo.classList.toggle('active');
      
      const accordionContainer = factItem.querySelector('.accordionContainer');
      accordionContainer.classList.toggle('active');
      
      const apiText = factItem.querySelector('.apiText');
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
