

function aff_rectres(){


	if(document.getElementById("rectres").style.visibility == "hidden")
	{

		document.getElementById("rectres").style.visibility = "visible";
	}

	else
	{

		document.getElementById("rectres").style.visibility = "hidden";
		document.getElementById("rectconf").style.visibility = "hidden";
	}
	return true;

}

var destination = "Aucune Destination";
console.log(destination);

function houra1(){
	destination = "Fidji";
	document.getElementById("rectconf").style.visibility = "visible";
	document.getElementById("affdest").innerHTML = destination;
	
	
}
function houra2(){
	destination = "Pologne";
	document.getElementById("rectconf").style.visibility = "visible";
	document.getElementById("affdest").innerHTML = destination;
	
	
}
function houra3(){
	destination = "National Park Service, Etats-Unis";
	document.getElementById("rectconf").style.visibility = "visible";
	document.getElementById("affdest").innerHTML = destination;
	
	
}
function houra4(){
	destination = "Groenland";
	document.getElementById("rectconf").style.visibility = "visible";
	document.getElementById("affdest").innerHTML = destination;

	
}


function affprix(){
	recup = document.getElementById("number").value;
	montant =  recup*=250;
	if (document.getElementById('ere').checked){
		montant*=1.5;
	}
	document.getElementById("prix").innerHTML = montant;

}
	
function prixdiv(){
	montant /=1.5;
	document.getElementById("prix").innerHTML = montant;


}

function retourfois2(){
	if (document.getElementById('retour').checked){
		montant *= 2
		document.getElementById("prix").innerHTML = montant;
	}
	
}

function simplediv2(){
	
	montant /= 2
	document.getElementById("prix").innerHTML = montant;

	

}
