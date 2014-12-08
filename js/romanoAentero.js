//                    0   1    5  10  50  100 500 1000 
	var arregloRoma = ["","I","V","X","L","C","D","M"];	
	var arregloEnteros = [0,1,5,10,50,100,500,1000];

	function convertirAentero( pRomano){
		var entero = 0;
		var letra = '';
		var anterior = 0;
		for(var i=0; i<pRomano.length;i++){
			letra = pRomano.charAt(i);
			for(var j=0; j<arregloRoma.length;j++){
				if(letra == arregloRoma[j]){					
					entero+= arregloEnteros[j];
					if(anterior<arregloEnteros[j]){
						entero = entero - anterior*2;
						anterior = arregloEnteros[j];
					}
					else{
						anterior = arregloEnteros[j];
					}
				}
			}
		}
		return entero;
	}
	var numero =1;
	var anterior =0;

	function recursividad(num){
		if(num == 0)
			return;			
		numero = anterior*2;
		 if(anterior ==0){
	    	numero =1;
	    	anterior =1;
	    }	
		console.log(numero);
		anterior = numero;
		num--;
		recursividad(num);

	}
	//recursividad(100000);

	function darValorXposicion(num){
		if(num == 1)
			return 1;				
		return 2*darValorXposicion( num-1);

	}
//	console.log(recursivo(7));

	function binarioReal(pBinario){
		var real = 0;
		for(var i=0; i< pBinario.length; i++){
			var letra = pBinario.charAt(i);
			if(letra=="1"){
				real += darValorXposicion(pBinario.length-i);
			}
		}
		return real;
	}

	/*function realBinario(pReal){
		var str ="";
		var parar = false;
		while(parar==false){
			var division = pReal/2;
			var residuo = Math.floor(pReal%2);	
			str+=""+residuo;			
			pReal = division;
			if(pReal<1)
				parar=true;
		}
	
		return str.split('').reverse().join('');
		
	}*/

	function realBinarioRecursivo(i){	
		return (i<1)?"":realBinarioRecursivo((i-(i%2))/2)+i%2; 
	}
	//console.log(realBinarioRecursivo(10));
	//console.log(binarioReal('1010'));


	function enteroAoctal(pEntero){
		var str ="";
		var parar = false;
		while(parar==false){
			var division = pEntero/8;
			var residuo = Math.floor(pEntero%8);	
			str+=""+residuo;			
			pEntero = division;
			if(pEntero<1)
				parar=true;
		}
		return str.split('').reverse().join('');
	}
	function enteroAoctalRecursivo(i){	
		return (i<1)?"":enteroAoctalRecursivo((i-(i%8))/8)+i%8; 
	}

	function octalAentero(pOctal){
		var resultado = 0;
		var potencia = pOctal.length-1;
		for(var i = 0; i<pOctal.length;i++){
			var letra = pOctal.charAt(i);			
			var numAux = parseInt(letra);
				numAux = numAux*Math.pow(8,potencia);				
				resultado+= numAux;
				potencia--;
				
		}
		return resultado;
	}
	//console.log(octalAentero("17446"));
	//console.log("octal: "+enteroAoctal(3208));
	//console.log("octalR: "+enteroAoctalRecursivo(3208));

	var arregloHexa = ["A","B","C","D","E","F"];
	var arregloEnt= [10,11,12,13,14,15];

	function retronarHexadicmal(pNum){
		var puntero = 0;
		for(var i =10; i<=15;i++){
			if(pNum ==i)
				return arregloHexa[puntero];

			puntero++;
		}
		return pNum;		
	}
	function retronarEntero(pNum){
		var puntero = 0;
		for(var i =0; i<=6;i++){
			if(pNum ==arregloHexa[i])
				return arregloEnt[puntero];			

			puntero++;
		}

		return pNum;		
	}
	
	function enteroAhexadecimal(pEntero){
		//convertimos primero el numero en binario pata facilitar la conversion a hexadecimal
		var binario = realBinarioRecursivo(pEntero);	
		var parar = false;
		var puntero = binario.length-1;
		var arrBinario = binario.split("");
		var resultado = ""; 
		while(parar==false){			
			var strAux = arrBinario[puntero-3]+arrBinario[puntero-2]+arrBinario[puntero-1]+arrBinario[puntero];
			var numAux = binarioReal(strAux);
			if(numAux>9){
				resultado+=retronarHexadicmal(numAux);
			}
			else{
				resultado+=""+numAux;
			}
			puntero=puntero-4;
			if(puntero<0)
				parar=true;

		}
		return resultado.split("").reverse().join("");
	}
	//console.log(enteroAhexadecimal(1235789));

	function hexadecimalAentero(pHexa){
		var puntero = pHexa.length-1;
		var resultado = 0;
		var arrAux = pHexa.split("");
		for (var i=0;i<pHexa.length;i++){
			var numAux = arrAux[i];
			numAux = retronarEntero(numAux);
			numAux = parseInt(numAux);				
			numAux = numAux*Math.pow(16,puntero);					
			resultado+= numAux;
			puntero--;	
		}
		return resultado;
	}
	console.log(hexadecimalAentero("AAA51"));
	console.prompt('Ingrese su nombre:','');
//console.log(realBinarioRecursivo(23560));
//enteroAhexadecimal(23560);
	