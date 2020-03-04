function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;

	while(contador<6)
	{		
		numero=prompt("Ingrese el "+contador+"º numero");
		numero=parseInt(numero);
		contador++;
		acumulador=parseInt(acumulador);
		acumulador=acumulador+numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN