const nama = "bagas akbar gunawan"; 
let usia = 5;

let biodata = document.getElementById('biodata')
console.log(biodata);

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia <= 20) {
        generasi = "generasi remaja"
    } 
    else if ( usia > 21 && usia <= 30) {
        generasi = "generasi dewasa"    
    }
    else if (usia > 30) {
        generasi = "generasi tua"    
    }
    else {
    generasi = "generasi anak anak"    
    }

    return biodata.innerHTML = generasi ;

}

console.log(nama);
console.log(usia);
generateBiodata();

