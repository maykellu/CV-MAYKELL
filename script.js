const elements = document.querySelectorAll('.box, .timeline-item, .software, .contact-card');

window.addEventListener('scroll', ()=>{

  elements.forEach(el=>{

    const top = el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';

    }

  });

});

elements.forEach(el=>{

  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'all 0.8s ease';

});


/* =========================
CHAT WHATSAPP PREMIUM
========================= */

const wrapper = document.getElementById("chatWrapper");
const typing = document.getElementById("typing");
const sound = document.getElementById("notifSound");

const text =
"Hola 👋 Mucho gusto, te saluda el Ingeniero Maykell Umaña. Te responderé lo más pronto posible.";

let i = 0;

/* APARECER AUTOMATICAMENTE */

setTimeout(() => {

    wrapper.classList.add("show");

    sound.play();

    typeEffect();

}, 2500);


/* EFECTO TYPING */

function typeEffect(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeEffect, 35);
    }

}