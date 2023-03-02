
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

    console.table(rows);
}
dataTable();


