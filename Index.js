function obtenerdatos() {
var nombre = document.getElementById('nombre').value;
var edad = parseFloat(document.getElementById('edad').value);

document.registro.nombreobtenido.value = nombre;
document.registro.edadobtenida.value = edad;
}
