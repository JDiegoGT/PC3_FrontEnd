const adminUsers = {
  "axel.arangure.z@uni.pe": "70462186",
  "jeff.pahuacho.r@uni.pe": "72506175",
  "terrence.alcantara.t@uni.pe": "72299864"
};

// LOGIN

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const userType = document.getElementById('userType').value;
  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('errorMessage');

  errorMessage.style.color = 'red';
  errorMessage.textContent = '';

  if (!userType) {
    errorMessage.textContent = 'Selecciona un tipo de usuario.';
    return;
  }

  if (userType === 'administrador') {
    if (adminUsers[username] && adminUsers[username] === password) {
      // Guardar sesión simple
      sessionStorage.setItem('loggedUser', username);
      sessionStorage.setItem('role', 'administrador');
      window.location.href = 'admin-panel.html';
    } else {
      errorMessage.textContent = 'Correo o contraseña incorrectos para administrador.';
    }
  } else if (userType === 'cliente') {
    // Buscar en usuarios registrados
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.email === username && u.password === password);
    if (user) {
      sessionStorage.setItem('loggedUser', username);
      sessionStorage.setItem('role', 'cliente');
      window.location.href = 'Paciente.html';
    } else {
      errorMessage.textContent = 'Correo o contraseña incorrectos para cliente.';
    }
  }
});

// VERIFICAR SESIÓN EN PANEL ADMINISTRADOR Y CLIENTE

if (window.location.pathname.endsWith('admin-panel.html')) {
  if (sessionStorage.getItem('role') !== 'administrador') {
    alert('Acceso no autorizado.');
    window.location.href = 'login.html';
  }
}

if (window.location.pathname.endsWith('Paciente.html')) {
  if (sessionStorage.getItem('role') !== 'cliente') {
    alert('Acceso no autorizado.');
    window.location.href = 'login.html';
  }
}

// Cerrar sesión (en admin.html y cliente.html)

const logoutBtn = document.querySelector('.logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    sessionStorage.clear();
    window.location.href = 'index.html';
  });
}
