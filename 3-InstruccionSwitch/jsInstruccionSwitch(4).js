function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días")
			break;
		case "Febrero":
			alert("Tiene 28 o 29 días")
			break;
		default :
			alert("Tiene 31 días")
			break;
	}
} //FIN DE LA FUNCIÓN