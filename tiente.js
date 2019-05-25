function xuly(){
	console.log('da vao ham')
	var nhapsotien = document.getElementById('nhapsotien').value;
	var tientu = document.getElementById("from").value;
	var tienden = document.getElementById("to").value;
	if(from==="Vietnam"){
			value_from=1;
		}else{
			value_from=23000;
		}
	if(to==="dolamy"){
		 value_to=23000;
	}else{
		 value_to=1;
	}
	var money= nhapsotien*value_from/value_to;
	document.getElementById('ketqua').innerHTML="so tien can chuyen la:"+money;
	
}


	

