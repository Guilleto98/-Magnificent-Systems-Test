document.addEventListener('DOMContentLoaded', () => {
    
    const factElements = document.querySelectorAll('.factDescription'); // Here I save the elements with class factDescription

    factElements.forEach((element, index) => { // For each element in the factElements array, this loop iterates over the elements.
        
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