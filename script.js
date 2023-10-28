let btn_mode = document.querySelector('#switch');
btn_mode.onclick = alter_mode;

//Função que altera do modo claro para escuro e vice-versa
function alter_mode()
{
  let img_light = document.querySelector('#profile img');
  let light_mode = document.querySelector('html');
  light_mode.classList.toggle('light');
  
  //Analisa se está em light mode, se sim, altera a img e senão mantém
  if (light_mode.classList.contains('light'))
  {
    img_light.setAttribute('src', './assets/avatar-light.png');
    img_light.setAttribute('alt', 'Foto de alguém sorrindo, usando óculos escuros e uma jaqueta preta, sem barba e fundo azul');
  } else {
    img_light.setAttribute('src', './assets/avatar.png');
    img_light.setAttribute('alt', 'Foto de alguém sorrindo, usando óculos e camisa preta, barba e fundo amarelo');
  }
}
