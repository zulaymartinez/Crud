// Obtener elementos del DOM
const inventoryForm = document.getElementById('inventoryForm');
const inventoryTableBody = document.getElementById('inventoryTableBody');

// Añadir inventario
inventoryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const producto = document.getElementById('producto').value;
    const valor = document.getElementById('valor').value;
    const cantidad = document.getElementById('cantidad').value;
    const total = valor * cantidad;

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${producto}</td>
        <td>${valor}</td>
        <td>${cantidad}</td>
        <td>${total}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Eliminar</button>
        </td>
    `;

    inventoryTableBody.appendChild(row);

    // Limpiar formulario y cerrar modal
    inventoryForm.reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById('registroModal'));
    modal.hide();
});

// Eliminar fila
function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
