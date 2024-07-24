const btnEnviar = document.querySelector(".btn-enviar");
const enviarModal = document.querySelector(".enviar-modal");
const btnFechar = document.querySelector(".btn-fechar");
const msgErro = document.querySelector(".modal-msg-erro");
const msgSucesso = document.querySelector(".modal-msg-sucesso");
const inputNome = document.querySelector(".input_nome");
const inputEmail = document.querySelector(".input_email");

const validarDados = ({ nome, email }) => {
  const nomeValido = nome && nome.length >= 3;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValido = email && emailRegex.test(email);

  return {
    nomeValido,
    emailValido,
  };
};

const pegarDados = () => {
  const dados = {
    nome: inputNome.value,
    email: inputEmail.value,
  };

  const { nomeValido, emailValido } = validarDados(dados);
  document.querySelector("form").reset();
  return nomeValido && emailValido ? "sucesso" : "erro";
};

const formatarModal = (statusRegister) => {
  msgSucesso.style.display = (statusRegister === 'sucesso' ? 'block' : 'none');
  msgErro.style.display = (statusRegister === 'erro' ? 'block' : 'none');
  btnFechar.classList.add(statusRegister === 'sucesso' ? 'bg-sucesso' : 'bg-erro');
  btnFechar.classList.remove(statusRegister === 'sucesso' ? 'bg-erro' : 'bg-sucesso');
};


const mostrarModal = (statusRegister) => {
  formatarModal(statusRegister);
  enviarModal.showModal();
};

const fecharModal = () => {
  btnFechar.addEventListener("click", () => {
    enviarModal.close();
  });
};

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  const status = pegarDados();
  mostrarModal(status);
  fecharModal();
});
