import { Empresa } from './empresa';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#empresaForm');
    const tabla = document.querySelector('#importacionForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const idProducto = form.idProducto.value;
        const nombreProducto = form.nombreProducto.value;
        const numeroProducto = form.numeroProducto.value;
        const precioProducto = parseInt(form.precioProducto.value);

        const nuevoEmpresa = new Empresa(idProducto, nombreProducto, numeroProducto, precioProducto);

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${nuevoEmpresa}</td>
        <td>${nuevoEmpresa}</td>
        <td>${nuevoAuto.getAnio()}</td>
    `;
        tabla.appendChild(row);

        form.reset();
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const idProducto = form.idProducto.value;
        const nombreProducto = form.nombreProducto.value;
        const anio = parseInt(form.anio.value);

        const nuevoAuto = new Auto(marca, modelo, anio);

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${nuevoAuto.getMarca()}</td>
        <td>${nuevoAuto.getModelo()}</td>
        <td>${nuevoAuto.getAnio()}</td>
        `;
        tabla.appendChild(row);

        form.reset();
    });
});