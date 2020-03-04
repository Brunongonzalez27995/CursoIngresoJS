/*
De los movimientos de un banco necesito saber el nombre del cliente, la edad (debe ser mayor de edad)
sexo, tipo de transacción (extracción o deposito) e importe (validar que no sea negativo).

1-Promedio de edad
2-Nombre del más joven
3-Cantidad de hombres.
4-Cantidad de mujeres.
5-Sexo del importe mas alto.
6-Operacion mas utilizada.
7-Importe del mas viejo.

*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var tipoDeTransaccion;
	var importe;
	var contador;
	var acumuladorEdad;
	var promedioEdad;
	var respuesta;
	var edadMinima;
	var edadMinimaNombre;
	var cantidadHombres;
	var cantidadMujeres; 
	var importeMasAlto;
	var importeMasAltoSexo;
	var operacionDeposito;
	var operacionExtraccion;
	var operacionMasUtilizada;
	var edadMaxima;
	var edadMaximaImporte;

	contador=0;
	acumuladorEdad=0;
	cantidadHombres=0;
	cantidadMujeres=0;
	importeMasAlto=0;
	edadMaxima=0;
	edadMaximaImporte=0;
	operacionDeposito=0;
	operacionExtraccion=0;
	operacionMasUtilizada=0;

	while(respuesta!="no")
	{
		do
		{
			nombre=prompt("Ingrese su nombre");
		}while(!isNaN(nombre));

		do
		{
			edad=prompt("Ingrese su edad (debe ser mayor de edad");
			edad=parseInt(edad);	
		}while(isNaN(edad)||edad<18||edad>110);

		do
		{
			sexo=prompt("Ingrese su sexo, 'f' para 'femenino' y 'm' 'para masculino'");
		}while(!isNaN(sexo)||sexo!="m"&&sexo!="f");

		do
		{
			tipoDeTransaccion=prompt("Ingrese el tipo de transacción 'extracción' o 'deposito'");
			
		}while(!isNaN(tipoDeTransaccion)||tipoDeTransaccion!="extraccion"&&tipoDeTransaccion!="deposito");

		do
		{
			importe=prompt("Ingrese un importe entre '0' y '5000'");
			ìmporte=parseInt(importe);
		}while(isNaN(importe)||importe<0||importe>5000);
		//todo validado

		if(edadMinima>edad || contador==0)
		{
			edadMinima=edad;
			edadMinimaNombre=nombre;
		}

		if(sexo=="m")
		{
			cantidadHombres++;
		}else
		{
			cantidadMujeres++;
		}

		if(importeMasAlto<importe||importe==0)
		{
			importeMasAlto=importe;
			importeMasAltoSexo=sexo;
		}

		if(edadMaxima<edad || contador==0)
		{
			edadMaxima=edad;
			edadMaximaImporte=importe;
		}

		if(tipoDeTransaccion=="extraccion")
		{
			operacionExtraccion++;
		}
		else
		{
			operacionDeposito++;
		}
		

		acumuladorEdad=acumuladorEdad+edad;
		contador++;
		respuesta=prompt("Ingrese 'no' para finalizar la carga de datos");
	}

	if(operacionDeposito<operacionExtraccion)
		{
			operacionMasUtilizada="Extraccion";
		}
		else
		{
			operacionMasUtilizada="Deposito";
		}

	promedioEdad=acumuladorEdad/contador;

	document.write("El promedio es "+promedioEdad+"<br>");
	document.write("Nombre del/la más joven :"+edadMinimaNombre+"<br>");
	document.write("Cantidad de hombres "+cantidadHombres+"<br>");
	document.write("Cantidad de mujeres "+cantidadMujeres+"<br>");
	document.write("Sexo del importe mas alto. "+importeMasAltoSexo+"<br>");
	document.write("Operacion mas utilizada es: "+operacionMasUtilizada+"<br>")
	document.write("Importe del mas viejo es: "+edadMaximaImporte+"<br>");

}
