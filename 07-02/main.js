
// TUgas Menampilkan tabel html ke console

function dataTable() {
    var table = document.getElementById("tabel_siswa");
    var header = [];
    var rows = [];
    // Loop isi <tr> pada indeks 0
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        header.push(table.rows[0].cells[i].innerHTML);
    }
    // Loop isi <tr> mulai dari indeks 1
    for (var i = 1; i < table.rows.length; i++) {
        var row = {};
        // Loop Array of Object
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            row[header[j]] = table.rows[i].cells[j].innerHTML;
        }
        rows.push(row);
    }
    // rows.push(row);

    return(rows);
}

let isi = dataTable();
console.table(isi);

// Tugas Tabel dari JS

let container = document.getElementsByClassName('container');
let tbl = document.createElement('table');
container[0].appendChild(tbl);
tbl.id = 'tblcustom';

let data = Object.keys(isi[0]); // Mengambil data Array of Object dari data tabel kemarin
let tblCustom = document.getElementById("tblcustom");
function tHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
}
tHead(tblCustom, data);

function tBody(table, obj) {
    let tbody = table.createTBody();
    for (let element of obj) {
      let row = tbody.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
}
tBody(tblCustom, isi);


// Menampilkan Gambar

let imgContainer = document.getElementsByClassName('image');
let img = document.createElement('img');
imgContainer[0].appendChild(img);
img.src = './img/degods.jpg'
img.style = `
width:10rem;
border-radius: 50%;
`








