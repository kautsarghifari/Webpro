document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk melakukan request AJAX
    function loadData(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                callback(data);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    // Memuat data JSON dan menampilkan ke dalam HTML
    loadData("data_toko_buku.json", function(data) {
        var tokoInfoDiv = document.getElementById("toko-info");
        var koleksiBukuDiv = document.getElementById("koleksi-buku");

        // Menampilkan informasi toko
        tokoInfoDiv.innerHTML = "<h2>Nama Toko: " + data.nama_toko + "</h2>" +
                                "<p>Pengarang: " + data.pengarang + "</p>" +
                                "<p>Alamat: " + data.alamat + "</p>";

        // Menampilkan koleksi buku dalam bentuk tabel
        var tableHTML = "<h3>Koleksi Buku</h3><table border='1'><tr><th>Judul</th><th>Pengarang</th><th>Tahun Terbit</th></tr>";
        data.koleksi_buku.forEach(function(buku) {
            tableHTML += "<tr><td>" + buku.judul + "</td><td>" + buku.pengarang + "</td><td>" + buku.tahun_terbit + "</td></tr>";
        });
        tableHTML += "</table>";

        koleksiBukuDiv.innerHTML = tableHTML;
    });
});
