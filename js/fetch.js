const $personajesList = document.getElementById("personajesList");

fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) =>{
    console.log(respuesta);
   return respuesta.json();
  })
  .then((data) => {
    
    const personajes = data;
  //  console.log(personajes);

    personajes.forEach(
      (personaje) => {
        var fechaNacimiento;

        if(personaje.dateOfBirth === null)
          fechaNacimiento = "Sin Fecha";
        else
          fechaNacimiento = personaje.dateOfBirth;

        var fechaNacimiento = personaje.dateOfBirth === null?"sin fecha":personaje.dateOfBirth;

        $personajesList.innerHTML += 
        `<div class="grid-item bordes_redondeados  house_${personaje.house}">
        <h2 class="h2_grid" ><img class='logo_house' src='../img/houses/${(personaje.house)?personaje.house:'sin_casa'}.png' alt="Casa" /><span>${personaje.name}</span></h2>
      
        <div>
        <img class="imagen_personaje bordes_redondeados" src="${(personaje.image)?personaje.image:'../img/sin_imagen.png'}" alt="Imagen Personaje" />
        <div class="atributos"> 
          <div> Especie: ${personaje.species}</div>
          <div>Género: ${personaje.gender}</div>
         <div>Nacimiento: ${fechaNacimiento} </div>
        <div>Casa: ${personaje.house}</div>`;

      }
    );
  
  });