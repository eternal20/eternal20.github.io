var i=3;
var banyakkelompok = 0;
var kelompoknama = [];
// var cobalagi = [];
var hasilkelompok = [];

// hasilkelompok.push(kelompoknama);


console.log(hasilkelompok); 

function banyakjumlah(jumlah){
	console.log(jumlah); 
	var d = document.getElementById(jumlah).value;
	console.log("banyakkelompok "+d);
	return banyakkelompok = d;
}


function addRow() {
  const div = document.createElement('div');

  div.innerHTML = `
  <input class="angka" type="button" value="-" onclick="removeRow(this)" />
  <input type="text" placeholder="Nama `+i+'" id="nama'+(i-1)+'">';
  document.getElementById('tambah').appendChild(div);

  i++;
}

function removeRow(input) {
  document.getElementById('tambah').removeChild(input.parentNode);
}

function buatRow(hasilkelompok){
	const buat = document.createElement('div');

	buat.innerHTML = `
	<div class="row cf">
	<div 
	<div id="core2">
	`;
	document.getElementById('tambahRow').appendChild(buat);

	

	for (var i = 0; i < hasilkelompok.length; i++) {

		const buattabel = document.createElement('div');
		var ul = document.createElement('ul');
		var buatjudul = document.createElement(`div`);
		var buatcontainer = document.createElement(`div`);
		
		buatcontainer.innerHTML=`<div id="listcore" class="cf">`;
		buattabel.innerHTML = `<div id="listcontainer`+i+`" class="listcore">`;
		buatjudul.innerHTML = `<div class="h1" style="font-weight: bold;">Kelompok `+(i+1)+`</div>`;
		document.getElementById('core2').appendChild(buattabel);
		document.getElementById('listcontainer'+i).appendChild(buatjudul);
		document.getElementById('listcontainer'+i).appendChild(ul);

		console.log(hasilkelompok);	

		

		hasilkelompok[i].forEach(
			function(name){

				

				var li = document.createElement('li');
				ul.appendChild(li);
				li.innerHTML += name;
			}
		);
	}


}


function proses(){

	console.log(banyakkelompok);

	i=i-1
	
	var indeks=0;

	do{
		var idnama = "nama"+indeks;
		console.log(idnama);
		console.log("nama :"+idnama+"| indeks: "+indeks+" |i: "+i);
		var x = document.getElementById(idnama).value;
		kelompoknama.push(x);
		indeks++;
	}
	while(indeks<(i));
	var banyaknama = kelompoknama.length;
	
	console.log("kelompoknama1 : "+kelompoknama);
	shuffle(kelompoknama);
	console.log("kelompoknama2 : "+kelompoknama);
	// kelompoknama.forEach(hasil);
	console.log(banyaknama+", "+banyakkelompok);
	
	hasilkelompok = hasiljadi(banyaknama,banyakkelompok);
	// hasilkelompok.forEach(hasil);

	buatRow(hasilkelompok);

	


}

function hasiljadi(banyaknama,banyakkelompok){
	console.log("banyakkelompok ",hasilkelompok.length);

	for (var k = 0; k < banyakkelompok; k++) {
		hasilkelompok.push([]);
	}
	var k = 0
	for (var u = 0 ; u < banyaknama; u++) {
			console.log("iterasi : ",u);
			// console.log("hasilkelompok1 : "+hasilkelompok[k][u]);
			console.log(k);
			hasilkelompok[k].push(kelompoknama[u]);
			k++;
			if(k>=banyakkelompok){
				k=0;
			}
		console.log("hasilkelompok2 : "+hasilkelompok[u]);
		
	}
	console.log("banyakkelompok ",hasilkelompok);

	// hasilkelompok[k].push(kelompoknama);
	console.log(hasilkelompok);
	


	return hasilkelompok;

}



function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}


function hasil(names){
	
}
