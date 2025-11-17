const $personajesList = document.getElementById("personajesList");

fetch("https://hp-api.onrender.com/api/characters")
  .then(res => res.json())
  .then(personajes => {

    let html = ""; // acumulamos todo acá

    personajes.forEach(personaje => {
      
      let fechaNacimiento = personaje.dateOfBirth 
        ? personaje.dateOfBirth 
        : "Sin fecha";

      html += `
        <div class="grid-item bordes_redondeados house_${personaje.house}">
          <h2 class="h2_grid">
            <img class="logo_house" src="../img/houses/${personaje.house ? personaje.house : 'sin_casa'}.png" alt="Casa" />
            <span>${personaje.name}</span>
          </h2>

          <div>
            <img class="imagen_personaje bordes_redondeados" src="${personaje.image ? personaje.image : '../img/sin_imagen.png'}" alt="Imagen Personaje" />
            
            <div class="atributos"> 
              <div>Especie: ${personaje.species}</div>
              <div>Género: ${personaje.gender}</div>
              <div>Nacimiento: ${fechaNacimiento}</div>
              <div>Casa: ${personaje.house}</div>
            </div>
          </div>
        </div>
      `;
    });

    // inserción UNA sola vez
    $personajesList.innerHTML = html; 
  });
