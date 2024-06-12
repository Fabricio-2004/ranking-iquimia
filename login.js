const container = document.querySelector(".container");

function validarCampos() {
  var user = document.getElementById('usuario').value;
  var pass = document.getElementById('password').value;

  if (user === "" || pass === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  }
  return true;
}

const loginButton = document.getElementById('iniciarsesion');


loginButton.addEventListener('click', async (e) => {
  e.preventDefault();
    const usuario = document.querySelector('#usuario').value;
    const contraseña = document.querySelector('#password').value;

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://iquimia-production.up.railway.app/login/"+usuario, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result[0].password)
      if(result[0].password == contraseña ){
        window.location.href = 'ranking.html';
      }
    })
    .catch((error) => console.error(error));
  });