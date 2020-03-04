/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
 */
function mostrar()
{
	var NombreHuesped;
	var CantidadDePesonas;
	var CantidadDeDias;
	var FormaDePago;
	var Respuesta;
	var MaximoDePesonas;
	var MaximoDePersonasNombre;
	var MaximoCantidadDeDias;
	var MaximoCantidadDeDiasNombre;
	var contador;

	contador=0;
	Respuesta="s";

	while(Respuesta=="s")
	{
		NombreHuesped=prompt("Ingrese su nombre");
		CantidadDePesonas=prompt("Ingrese su nombre");
		CantidadDePesonas=parseInt(CantidadDePesonas);
		
		do
		{
			CantidadDePesonas=prompt("Ingrese la cantidad de personas");
			CantidadDePesonas=parseInt(CantidadDePesonas);

		}while(isNaN(CantidadDePesonas)&&CantidadDePesonas>20&&CantidadDePesonas<1);

		do
		{
			CantidadDeDias=prompt("Ingrese la cantidad de días de estadía");
			CantidadDeDias=parseInt(CantidadDeDias);

		}while(isNaN(CantidadDeDias)||CantidadDeDias>31&&CantidadDeDias<1);

		do
		{
			FormaDePago=prompt("Ingrese su forma de pago");
		}while(!isNan(FormaDePago)||FormaDePago="efectivo" ||FormaDePago="credito" ||FormaDePago="QR");

		if(contador==0||CantidadDePesonas>MaximoDePesonas)
		{
			MaximoDePesonas=CantidadDePesonas;
			MaximoDePersonasNombre=NombreHuesped;
		}

		if(contador==0||CantidadDeDias>MaximoCantidadDeDias)
		{
			MaximoCantidadDeDias=CantidadDeDias;
			MaximoCantidadDeDiasNombre=NombreHuesped;
		}

		respuesta=prompt("s para continuar");
		contado++

	}

}
