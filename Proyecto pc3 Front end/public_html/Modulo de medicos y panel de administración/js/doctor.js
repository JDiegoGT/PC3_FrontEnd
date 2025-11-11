document.addEventListener('DOMContentLoaded', () => {
  const consultations = [
    { paciente: 'Juan Pérez', motivo: 'Dolor de cabeza', fecha: '2025-11-01' },
    { paciente: 'Ana Torres', motivo: 'Fiebre alta', fecha: '2025-11-03' },
  ];

  const tableBody = document.getElementById('consultationTable');
  const modal = document.getElementById('responseModal');
  const closeModal = document.getElementById('closeModal');
  const sendResponse = document.getElementById('sendResponse');
  const responseText = document.getElementById('responseText');

  // Llenar tabla
  consultations.forEach((c, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${c.paciente}</td>
      <td>${c.motivo}</td>
      <td>${c.fecha}</td>
      <td><button onclick="openModal(${i})">Responder</button></td>
    `;
    tableBody.appendChild(row);
  });

  // Función global para abrir modal
  window.openModal = function (index) {
    modal.classList.remove('hidden');
    modal.dataset.index = index;
  };

  // Cerrar modal
  closeModal.addEventListener('click', () => modal.classList.add('hidden'));

  // Enviar respuesta
  sendResponse.addEventListener('click', () => {
    const index = modal.dataset.index;
    const respuesta = responseText.value;
    if (respuesta.trim() === '') {
      alert('Debe escribir una respuesta.');
      return;
    }
    alert(`Respuesta enviada al paciente: ${consultations[index].paciente}`);
    responseText.value = '';
    modal.classList.add('hidden');
  });
});
