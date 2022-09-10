const estudios = document.querySelector('#container_carousel');
const pop_up = document.querySelector('.pop_up');

estudios.addEventListener('click', (evento)=>{
        evento.preventDefault();

        // Tomar el ID de la imagen
        let cursoSeleccionado = evento.target.id;

        // Crear pop_up
        pop_up.innerHTML = `<span id="close">&times;</span>
                            <img src="./imagenes/cursos/${cursoSeleccionado}/0.jpg" id="pop_img" alt="pop_up">
                            <button class="botonera_pop bg-gradient" id="anterior">Anterior</button>
                            <button class="botonera_pop bg-gradient" id="siguiente">Siguiente</button`;

        // Botones de cambio de imagen y curso
        let maximo = 10;
        let curso1 = document.querySelector('#curso1').id;
        let curso2 = document.querySelector('#curso2').id;
        
        if(cursoSeleccionado == curso1){
            maximo = 12;
        };

        if(cursoSeleccionado == curso2){
            maximo = 0;
        };

        // Boton Siguiente
        const botonS = document.querySelector('#siguiente');
        const imagen = document.querySelector('#pop_img');
        let numero = 0;
        botonS.onclick = () =>{
            numero++
            if(numero > maximo){
                numero = 0;
            }else{
                imagen.src = `./imagenes/cursos/${cursoSeleccionado}/${numero}.jpg`;
            }
            console.log(numero);
        };

        // Boton Anterior
        const botonA = document.querySelector('#anterior');
        botonA.onclick = () =>{
            if(numero < 1){
                numero = 0;
            }else{
                numero--;
                imagen.src = `./imagenes/cursos/${cursoSeleccionado}/${numero}.jpg`
            };
            console.log(numero);
        };
        
        // Mostrar el pop_up
        document.querySelector('.pop_up').style.display = 'block';

        // Ocultar el pop_up
        document.querySelector('#close').onclick = () => {
            document.querySelector('.pop_up').style.display = 'none';
        };
});



