function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while((sexo!="m")&&(sexo!="f"))
	{
		sexo=prompt("ingrese f ó m .");
	}

document.getElementById('Sexo').value=sexo;

if(sexo=="m")
{
	document.getElementById('Sexo').value="Masculino";
}else
{
	document.getElementById('Sexo').value="Femenino";
}

}//FIN DE LA FUNCIÓN