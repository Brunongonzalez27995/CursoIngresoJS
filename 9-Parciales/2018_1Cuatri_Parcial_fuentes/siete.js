/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
	var sexo;
	var notas;
	var contador;
	var acumuladorNotas=0;
	var notasMinimo;
	var notasMinimoMujeres;
	var notasMinimoVarones;
	var notasAprobadas;

	for(contador=0;contador<5;contador++)
	{
		notas=prompt("Ingrese un número de 1 a 10");
		notas=parseInt(notas);
		if(notas<=-1&&notas>10)
		{
			alert("Vuelva a comenzar el ingreso");
			break;
		}

		sexo=prompt("Ingrese 'f' para femenino y 'm' para masculino");
		acumuladorNotas=acumuladorNotas+notas;

		if(sexo=="f")
		{
			sexo="femenino";
		}
		else
		{
			if(sexo=="m")
			{
				sexo="masculino";
			}
		}

		if(notasMinimoVarones<notas&&sexo=="m")
		{
			notasMinimoVarones=notas;
		}
		else
		{
			if(notasMinimoMujeres<notas&&sexo=="f")
			{
				notasMinimoMujeres<numero
			}
		}


	}

alert("El promedio de las notas totales es "+acumuladorNotas/5);

}
