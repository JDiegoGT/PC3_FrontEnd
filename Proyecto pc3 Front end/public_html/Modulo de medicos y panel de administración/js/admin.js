document.addEventListener('DOMContentLoaded', () => {
  // Datos simulados
  const totalPatients = 25;
  const totalConsultations = 40;
  const answeredConsultations = 30;

  // Mostrar los datos
  document.getElementById('totalPatients').textContent = totalPatients;
  document.getElementById('totalConsultations').textContent = totalConsultations;
  document.getElementById('answeredConsultations').textContent = answeredConsultations;
});
