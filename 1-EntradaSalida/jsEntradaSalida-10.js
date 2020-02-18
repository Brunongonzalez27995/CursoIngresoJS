/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var primerNumero
	var descuento
	var resultado

	primerNumero=document.getElementById('importe');
	primerNumero=parseInt(primerNumero);
	descuento=primerNumero*(25/100);
	resultado=primerNumero-descuento;
	document.getElementById('resultado').value=resultado
	console.log(resultado);

}
