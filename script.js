document.addEventListener('DOMContentLoaded', () => {
    const factElements = document.querySelectorAll('.factDescription');
    factElements.forEach((element, index) => {
        fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
          element.textContent = `Fact ${index + 1}: ${data.fact}`;
        })
        .catch(error => {
          console.log('Error al obtener el hecho sobre gatos:', error);
        });
    });
  });   