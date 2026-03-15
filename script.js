function enviarWhatsapp(){

const os = document.getElementById("os").value;
const setor = document.getElementById("setor").value;
const local = document.getElementById("local").value;
const modelo = document.getElementById("modelo").value;
const problema = document.getElementById("problema").value;
const tecnico = document.getElementById("tecnico").value;

const mensagem = `*SOLICITAÇÃO DE CHAMADO*

OS: ${os}
Local: ${local}
Setor: ${setor}

Modelo: ${modelo}
Problema: ${problema}

Aberto por: ${tecnico}`;

const url = "https://wa.me/?text=" + encodeURIComponent(mensagem);

window.open(url, "_blank");

}