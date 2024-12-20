// Obtener el botón por su ID
const boton = document.getElementById('aa');
const segundo = document.getElementById('bb');
const tercero = document.getElementById('cc');

// Asociar un evento al botón para que abra el otro archivo .html
boton.addEventListener('click', function() {
  window.location.href = 'index.a.html';  // Cambia 'otra_pagina.html' por la ruta correcta
});
segundo.addEventListener('click', function(){
    window.location.href = 'index.c.html';
})
tercero.addEventListener('click', function(){
    window.location.href = 'index.b.html';
})
