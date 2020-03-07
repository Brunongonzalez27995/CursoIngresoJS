function mostrar()
{
  var tipo;
  var precio;
  var cantidadUnidades;
  var marca;
  var fabricante;
  var respuesta;
  var barbijoMasCaro;
  var barbijoMasCaroFabricante;
  var barbijoMasCaroCantidadUnidades;
  var barbijoMasCaroMarca;
  var itemMasUnidades;
  var itemMasUnidadesFabricante;
  var itemMasUnidadesMarca;
  var itemMasUnidadesTipo;
  var acumuladorJabones;

  acumuladorJabones=0;
  barbijoMasCaro=0;
  itemMasUnidades=0;

  while(respuesta!="no")
  {
  	do
	{
		tipo=prompt("Ingrese el tipo de articulo 'barbijo' 'alcohol' 'jabon'");		
	}while(tipo!="barbijo"&&tipo!="alcohol"&&tipo!="jabon");

	do
	{
		precio=prompt("Ingrese el precio del articulo (100 a 300)");
		precio=parseInt(precio);
	}while(isNaN(precio)||precio<100||precio>300);

	do
	{
		cantidadUnidades=prompt("Ingrese la cantidad de unidades (de 1 a 1000)");
		cantidadUnidades=parseInt(cantidadUnidades);
	}while(isNaN(cantidadUnidades)||cantidadUnidades<1||cantidadUnidades>1000);

	do
	{	
		marca=prompt("Ingrese la marca del producto.");	
	}while(marca==0);

	do
	{	
		fabricante=prompt("Ingrese el fabricante del producto.");	
	}while(fabricante==0);

	// todo validado.

	if(barbijoMasCaro<precio&&tipo=="barbijo"||barbijoMasCaro==0&&tipo=="barbijo")
	{
		barbijoMasCaro=precio;
		barbijoMasCaroFabricante=fabricante;
		barbijoMasCaroMarca=marca;
		barbijoMasCaroCantidadUnidades=cantidadUnidades;

	}

	if(itemMasUnidades<cantidadUnidades||itemMasUnidades==0)
	{
		itemMasUnidades=cantidadUnidades;
  		itemMasUnidadesFabricante=fabricante;
  		itemMasUnidadesTipo=tipo;
  		itemMasUnidadesMarca=marca;	
	}

	if(tipo=="jabon")
	{
		acumuladorJabones=acumuladorJabones+cantidadUnidades;
	}

  	respuesta=prompt("'no' para dejar de ingresar datos.");

  }

  	document.write("Barbijo más caro, barbijo marca: "+barbijoMasCaroMarca+" cantidad de unidades: "+barbijoMasCaroCantidadUnidades+" fabricante: "+barbijoMasCaroFabricante+"<br>");
  	document.write("Item con más unidades: "+itemMasUnidadesTipo+" marca: "+itemMasUnidadesMarca+" fabricante: "+itemMasUnidadesFabricante+"<br>");
  	document.write("Cantidad de jabones en total: "+acumuladorJabones+"<br>");

}
