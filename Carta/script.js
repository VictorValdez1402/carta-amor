const mensaje = `Para ti…
que llegaste sin avisar y poco a poco te convertiste
en el lugar donde mi corazón quiere quedarse.

No sé qué nos depare la vida,
pero sí sé que cada momento contigo
vale completamente la pena.

Y si algún día todo cambia,
incluso como un pequeño fantasma,
seguiría buscándote…
solo para quedarme a tu lado. 👻❤️`;

function abrirCarta() {
  const sobre = document.getElementById("sobre");
  sobre.classList.add("abrir");

  setTimeout(() => {
    document.getElementById("escena").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    escribirTexto();
    crearCorazones();
  }, 900);
}

function escribirTexto() {
  const elemento = document.getElementById("texto");
  let i = 0;

  const intervalo = setInterval(() => {
    elemento.innerHTML += mensaje[i] === "\n" ? "<br>" : mensaje[i];
    i++;

    if (i >= mensaje.length) clearInterval(intervalo);
  }, 45);
}

function crearCorazones() {
  const contenedor = document.getElementById("corazones");

  setInterval(() => {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";
    corazon.style.animationDuration = (Math.random() * 3 + 4) + "s";

    contenedor.appendChild(corazon);
    setTimeout(() => corazon.remove(), 7000);
  }, 300);
}

