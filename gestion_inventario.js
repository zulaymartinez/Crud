const transactionForm = document.getElementById('transactionForm');
const transactionTableBody = document.getElementById('transactionTableBody');
let totalIngresos = 0;
let totalGastos = 0;
let totalPrestamos = 0;

transactionForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const tipo = document.getElementById('tipo').value;
    const producto = document.getElementById('producto').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const caja = document.getElementById('caja').value;
    const etiqueta = document.getElementById('etiqueta').value;

    // Realizar cálculos
    if (tipo === 'Ingreso') {
        totalIngresos += valor;
        document.getElementById('totalIngresos').textContent = totalIngresos;
    } else if (tipo === 'Gasto') {
        totalGastos += valor;
        document.getElementById('totalGastos').textContent = totalGastos;
    } else if (tipo === 'Préstamo') {
        totalPrestamos += valor;
        document.getElementById('totalPrestamos').textContent = totalPrestamos;
    }

    // Añadir la fila a la tabla de inventario
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${fecha}</td>
        <td>${tipo}</td>
        <td>${producto}</td>
        <td>${valor}</td>
        <td>${caja}</td>
        <td>${etiqueta}</td>
    `;
    transactionTableBody.appendChild(row);

    // Limpiar el formulario después de enviar
    transactionForm.reset();
});
