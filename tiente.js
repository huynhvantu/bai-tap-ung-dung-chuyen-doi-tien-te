function xuly(){
	console.log('da vao ham')
	var sotien = document.getElementById("nhapsotien").value;
	var tientu = document.getElementById("from").value;	
	var tienden = document.getElementById("to").value;
	if(tientu==="Vnd"){
			value_from = 1;
		}else{
			value_from = 23000;
		}
	if(tienden==="Vnđ"){
		 value_to = 1;
	}else{
		 value_to = 23000;
	}
	 var  money= sotien*value_from/value_to;

	document.getElementById('ketqua').innerHTML=" Result:"+money + (tienden);
	
}


	

