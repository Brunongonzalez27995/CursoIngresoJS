function mostrar()
{

	var contador=0;
	var acumulador=0;
	contador=parseInt(contador);
	switch(acumulador<5)
	{
		contador=contador+1;
		contador=parseInt(contador);
		acumulador=contador;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN