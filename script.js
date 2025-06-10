function gerarCertificado() {
  const nome = document.getElementById("nome").value.trim();
  const nomeCertificado = document.getElementById("nome-certificado");
  const data = document.getElementById("data");

  if (nome === "") {
    alert("Digite um nome!");
    return;
  }

  nomeCertificado.textContent = nome;

  // Data atual
  const hoje = new Date();
  data.textContent = hoje.toLocaleDateString("pt-BR");
}

function baixarImagem() {
  const certificado = document.getElementById("certificado");
  //html2canvas: biblioteca JavaScript para converter elementos HTML em imagem.
  html2canvas(certificado).then(canvas => {
    const link = document.createElement("a");
    link.download = "certificado.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
