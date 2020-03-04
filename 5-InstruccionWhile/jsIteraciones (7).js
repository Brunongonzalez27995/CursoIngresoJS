function mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	while(numero!="00")
	{		
		numero=prompt("Ingrese el "+contador+"º numero o escriba 00 para terminar de ingresar números");
		numero=parseInt(numero);
		acumulador=parseInt(acumulador);
		acumulador=acumulador+numero;
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/(contador-1);


}//FIN DE LA FUNCIÓN