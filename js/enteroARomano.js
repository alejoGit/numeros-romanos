
	//                     1   5  10  50  100 500 1000 
	var arregloRomanos = ["I","V","X","L","C","D","M"];	
	//identifica un numero entero de uno a nueve y retorna su correspondiente en romano
	// pTipo nos indica que parte del numero queremos identificar [unidad,decima,centecima] -es el puntero del arreglo 
	function identificar( pNumero , pTipo){
		var iUnidad = 0;
		var iMedio= 1;
		var iFinal= 2;
		if (pTipo=="decima"){
			 iUnidad = 2;
			 iMedio= 3;
			 iFinal= 4;		
		}
		if(pTipo=="centecima"){
			 iUnidad = 4;
			 iMedio= 5;
			 iFinal= 6;
		}
		var numero = parseInt(pNumero);
		var strRomano = "";
		if(isNaN(numero)){
			console.log("Error: no ingreso un entero");
		}else{
			if (numero>9){
				return "Error: debe ingresar un numero menor o igual a 9";
			}else if(numero==0)
				return "";
			else if(numero == 4)
			 return  arregloRomanos[iUnidad]+arregloRomanos[iMedio];
			else if( numero == 5)									
				return arregloRomanos[iMedio];													
			else if(numero == 9)
				return arregloRomanos[iUnidad]+arregloRomanos[iFinal];			
			for( var i=0; i<numero; i++){
				strRomano += arregloRomanos[iUnidad];						
				 if(i+1 == 6){							
					strRomano = arregloRomanos[iMedio]+arregloRomanos[iUnidad];
				 }				
			}
		}
		return strRomano;			
	}

	function convertirEnRomano(pNumero){
			var numero = parseInt(pNumero);
			var strRomano = "";
			var miles = "";
			if(isNaN(numero)){
				console.log("Error: no ingreso un entero");
			}else{
				var strNumero = numero.toString();
				var arregloAux = strNumero.split("");
				if(arregloAux.length == 1)
					return identificar(numero,"unidad");
				else if (arregloAux.length == 2)
					return identificar(arregloAux[0],"decima")+identificar(arregloAux[1],"unidad");
				else if (arregloAux.length == 3)
					return identificar(arregloAux[0],"centecima")+identificar(arregloAux[1],"decima")+identificar(arregloAux[2],"unidad");
				else {
					var strAux = strNumero.substring(0, strNumero.length-3);	
					var numMilesima = parseInt(strAux);
					
					for (var i = 0; i< numMilesima; i++){
						miles += arregloRomanos[6];

					}
					if(miles.length>=4&& miles.length<10){
						
						miles = "<span class=raya>"+identificar(miles.length,"unidad")+"</span>";
					}
					else if(miles.length>=10&&miles.length<100){
						var str = miles.length.toString();
						var arr = str.split("");	
						var cadena =identificar(arr[0],"decima")+identificar(arr[1],"unidad");			
						miles = "<span class=raya>"+cadena+"</span>";
					}
					else if(miles.length>=100&&miles.length<1000){						
						var str = miles.length.toString();
						var arr = str.split("");	
						var cadena =identificar(arr[0],"centecima")+identificar(arr[1],"decima")+identificar(arr[2],"unidad");			
						miles = "<span class=raya>"+cadena+"</span>";
					}
					else if(miles.length>=1000 && miles.length <10000){

						var str = miles.length.toString();
						var arr = str.split("");	

						if(arr[0]==1){
							milesAux = "<span class=raya>"+arregloRomanos[6]+"</span>";
							miles = milesAux+ identificar(arregloAux[1],"centecima")+identificar(arregloAux[2],"decima")+identificar(arregloAux[3],"unidad");
						}
						else{							
							var milesAux ="";
							var numAux = 6;
							for (var i = 1; i<=arr[0];i++){
								milesAux += arregloRomanos[numAux];
								if(i==4)
									milesAux = convertirEnRomano(4);
								else if(i==5)
									milesAux = convertirEnRomano(5);
								else if(i==9)
									milesAux = convertirEnRomano(9);
								if(i == 6){							
									milesAux = arregloRomanos[1]+arregloRomanos[0];
									numAux = 0;
								 }

									
							}
							milesAux = "<span class=raya>"+milesAux+"</span>";
							miles = milesAux+ identificar(arregloAux[1],"centecima")+identificar(arregloAux[2],"decima")+identificar(arregloAux[3],"unidad");
							
						}			
					}
					else if(miles.length>=10000&& miles.length<100000){	

						var str = miles.length.toString();
						var arr = str.split("");
						if(arr[0]==1){
							milesAux = "<span class=doble>"+arregloRomanos[6]+"</span>";
							miles = milesAux+ identificar(arregloAux[1],"centecima")+identificar(arregloAux[2],"decima")+identificar(arregloAux[3],"unidad",arregloAux[4],"centecima")+identificar(arregloAux[5],"decima")+identificar(arregloAux[6],"unidad");
						}
						else{							
							var milesAux ="";
							var numAux = 6;
							for (var i = 1; i<=arr[0];i++){
								milesAux += arregloRomanos[numAux];
								if(i==4)
									milesAux = convertirEnRomano(4);
								else if(i==5)
									milesAux = convertirEnRomano(5);
								else if(i==9)
									milesAux = convertirEnRomano(9);
								if(i == 6){							
									milesAux = arregloRomanos[1]+arregloRomanos[0];
									numAux = 0;
								 }

									
							}
							milesAux = "<span class=doble>"+milesAux+"</span>";
							miles = milesAux+ identificar(arregloAux[1],"centecima")+identificar(arregloAux[2],"decima")+identificar(arregloAux[3],"unidad",arregloAux[4],"centecima")+identificar(arregloAux[5],"decima")+identificar(arregloAux[6],"unidad");

							
						}	
					}
					else if(miles.length>=10000){
						alert("ingrese un numero menor a 100 millones");
						$("#resultado").html("");
						return;
					}

					return miles+ identificar(arregloAux[arregloAux.length-3],"centecima")+identificar(arregloAux[arregloAux.length-2],"decima")+identificar(arregloAux[arregloAux.length-1],"unidad");
				}
			}
		}			
	//FIN DEL ALGORITMO
	//Mostrar tabla
	for (var i = 1 ; i<2000;i++){
		//console.log("entero: "+i+" Romano: "+convertirEnRomano(i));
		$("#tablaR tbody").append("<tr> <td> "+i+" </td><td> "+convertirEnRomano(i)+"</td> </tr>");
	}
	//callback - input de reconocimiento de voz de google
	function reconocimientoVoz(){
		var resultado =$("#resultado");
		var strNumero = $("#txtVoz").val();	
		if(strNumero == "fecha"){
			var f=new Date();
			var fec="Dia: "+convertirEnRomano(f.getDate())+"- Mes: "+convertirEnRomano(f.getDay())+"- Año :"+convertirEnRomano(f.getFullYear());
			resultado.html(fec);
			return;
		}	
		var numero = parseInt(strNumero);
		if(isNaN(numero)){
				resultado.html(convertirAentero(strNumero)).css("font-family","arial");
			}else{
				resultado.html(convertirEnRomano(strNumero)).css("font-family","arial");
			}		
	}
	$("#txtVoz").on("keyup",function(){
		reconocimientoVoz();
	});
	function getHora() {
		var f=new Date();
		var cad=convertirEnRomano(f.getHours())+":"+convertirEnRomano(f.getMinutes())+":"+convertirEnRomano(f.getSeconds());
	  $("#hora").html(cad);
	}
	setInterval("getHora()", 1000);




		