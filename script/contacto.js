const aFormuario = document.querySelector('#aFormulario');
const correo = document.querySelector('.pop_correo');
const patron = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

aFormuario.addEventListener('click', (evento)=>{
    evento.preventDefault();

    correo.innerHTML = `<span id="close_correo">&times;</span>
                            <form action="https://formsubmit.co/16123da63a1a6d3ac35668615cbece3f" method="POST">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Coloca tu mail, para contactarte</label>
                                    <input type="email" class="form-control" id="input_correo" name="email" placeholder="mail@dominio.com" required pattern=${patron}>
                                </div>
                                <div class="mb-3">
                                    <label for="mensaje" class="form-label">Escribi tu mensaje</label>
                                    <textarea type="text" class="form-control" id="mensaje" rows="3" name="mensaje" required></textarea>
                                </div>
                                <input id="botonera_pop_correo" class="bg-gradient" type="submit" value="Enviar">
                            </form>`;

    
    document.querySelector('.pop_correo').style.display = 'block';

    document.querySelector('#close_correo').onclick = () => {
        document.querySelector('.pop_correo').style.display = 'none';
    };

    const mail = document.querySelector("#input_correo");
    const boton = document.querySelector("#botonera_pop_correo");
    console.log(mail.pattern);
    console.log(patron.test(mail.value));

    mail.addEventListener('keyup', (evento)=>{
        evento.preventDefault();
        console.log('levantaste la tecla')
        if(!patron.test(mail.value)){
            boton.style.display = 'none';
        }else{
            boton.style.display = 'block';
        };        
    });                      
});

