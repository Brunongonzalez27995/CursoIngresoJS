function mostrar()
{
	var numeroIngresado; 
	numeroIngresado=prompt("Ingrese numero");
	var contador;
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=2;contador<numeroIngresado;contador++)
	{
		console.log(contador);
		if((numeroIngresado%contador)==0)
		{
			console.log(numeroIngresado+" No es primo");
			break;
		}
		else
		{
			console.log(numeroIngresado+"Es primo");
			break;
		}
	}



}//FIN DE LA FUNCIÓN