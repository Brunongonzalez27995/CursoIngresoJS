/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadDeLamparas;
	var marca;
	var precioBruto;
	var descuento;
	var precioFinal;

	cantidadDeLamparas=document.getElementById('Cantidad').value;
	cantidadDeLamparas=parseInt(cantidadDeLamparas);
	marca=document.getElementById('Marca').value;
	precioBruto=cantidadDeLamparas*35;
	console.log("precioBruto",precioBruto);
	descuento=0;

	if(cantidadDeLamparas>5)
	{
		descuento=50;
	}
	else
	{
		if(cantidadDeLamparas==5)
		{
			if(marca=="ArgentinaLuz")
			{
				descuento=40;
			}else
			{
				descuento=30;
			}
		}else
		{
			if(cantidadDeLamparas==4)
			{
				if(marca="ArgentinaLuz"||"FelipeLamparas")
				{
					descuento=25
				}else
				{
					descuento=20
				}
			}else
			{
				if(cantidadDeLamparas==3)
				{

				}
			}
		}
	}

	precioFinal=precioBruto-precioBruto*descuento/100;
	console.info("precioFinal",precioFinal);
}
