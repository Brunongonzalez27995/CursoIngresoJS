/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var primerNumero;
	var aumento;
	var resultado;

	primerNumero=document.getElementById('sueldo').value;
	primerNumero=parseInt(primerNumero);
	aumento=primerNumero*10/100;
	aumento=parseInt(aumento);
	resultado=(primerNumero+aumento);
	
	document.getElementById('resultado').value=resultado
	console.log(resultado);

}
