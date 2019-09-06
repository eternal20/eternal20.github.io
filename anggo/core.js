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

  // 

function addRow() {
  const div = document.createElement('div');
  div.classList.add("tambahnama")
  div.innerHTML = `
  <input class="inputnama" type="text" placeholder="Nama `+i+`" id="nama`+(i-1)+`">
  <input type="button" value="-" onclick="removeRow(this)" />`;
  document.getElementById('tambah').appendChild(div);

  i++;
}

function removeRow(input) {
  document.getElementById('tambah').removeChild(input.parentNode);
}

function buatRow(hasilkelompok){
	const buat = document.createElement('div');

	buat.innerHTML = `
	<div class="row cf" id="rowjadi">
		<h1>Hasil Kelompok</h1>
		<div id="core2">
		<button class="tombol tangka" onclick="proses()">Acak lagi</button>
	</div>
	`;
	document.getElementById('tambahRow').appendChild(buat);

	var tombollihat = document.getElementById('idtombollihat');

	if (tombollihat==null) {
		const lihat = document.createElement('a');
		lihat.href = "#tambahRow"
		lihat.innerHTML = `
		<button id="idtombollihat" class="tombol" style="color: black;">lihat hasil</button>
		`;
		document.getElementById('lihat').appendChild(lihat);
	}
	


	

	for (var i = 0; i < hasilkelompok.length; i++) {

		const buattabel = document.createElement('div');
			buattabel.innerHTML = `<div id="buatcontainer`+i+`" class="listcore">`;
				document.getElementById('core2').appendChild(buattabel);

		var buatcontainer = document.createElement(`div`);
			buatcontainer.innerHTML = `<div id="listcore`+i+`" class="cf">`;
				document.getElementById('buatcontainer'+i).appendChild(buatcontainer);


		var buatjudul = document.createElement(`div`);
		var ul = document.createElement('ul');
			buatjudul.innerHTML = `<div class="h1" style="font-weight: bold;">Kelompok `+(i+1)+`</div>`;
				document.getElementById('listcore'+i).appendChild(buatjudul);
				document.getElementById('listcore'+i).appendChild(ul);

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

	var element = document.getElementById('rowjadi');
	
	console.log(element);
	
	if (element!=null) {

		kelompoknama = [];
		hasilkelompok = [];
	    element.parentNode.removeChild(element);	
	}


	console.log(banyakkelompok);
	
	var indeks=0;

	do{
		var idnama = "nama"+indeks;
		console.log(idnama);
		console.log("nama :"+idnama+"| indeks: "+indeks+" |i: "+(i-1));
		var x = document.getElementById(idnama).value;
		kelompoknama.push(x);
		indeks++;
	}
	while(indeks<(i-1));
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
	var k = 0;
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
