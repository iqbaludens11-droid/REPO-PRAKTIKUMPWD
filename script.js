
$(document).ready(function() {

    // Data produk
    let produk = [
        {id: 1, nama: "Laptop", harga: 5000000, stok: 5},
        {id: 2, nama: "Mouse", harga: 100000, stok: 10},
        {id: 3, nama: "Keyboard", harga: 200000, stok: 8},
        {id: 4, nama: "Headset", harga: 150000, stok: 6},
        {id: 5, nama: "Monitor", harga: 1500000, stok: 4},
        {id: 6, nama: "Webcam", harga: 300000, stok: 0}
    ];

    let keranjang = [];

    // Menampilkan produk
    for (let i = 0; i < produk.length; i++) {

        let div = document.createElement("div");
        div.className = "item";

        let nama = document.createElement("p");
        nama.appendChild(document.createTextNode(produk[i].nama));

        let harga = document.createElement("p");
        harga.appendChild(document.createTextNode("Rp " + produk[i].harga));

        let stok = document.createElement("p");
        stok.appendChild(document.createTextNode("Stok: " + produk[i].stok));

        let tombol = document.createElement("button");
        tombol.appendChild(document.createTextNode("Tambah ke Keranjang"));

        tombol.setAttribute("onclick", "tambah(" + produk[i].id + ")");

        div.appendChild(nama);
        div.appendChild(harga);
        div.appendChild(stok);
        div.appendChild(tombol);

        document.getElementById("produk").appendChild(div);
    }

    // Fungsi tambah produk
    window.tambah = function(id) {

        let barang = produk[id - 1];

        if (barang.stok == 0) {
            alert("Stok produk habis!");
        } else {

            let ada = false;

            for (let i = 0; i < keranjang.length; i++) {
                if (keranjang[i].id == id) {
                    keranjang[i].jumlah++;
                    ada = true;
                }
            }

            if (ada == false) {
                keranjang.push({
                    id: barang.id,
                    nama: barang.nama,
                    harga: barang.harga,
                    jumlah: 1
                });
            }

            barang.stok--;

            tampilkan();
        }
    };

    // Menampilkan keranjang
    function tampilkan() {

        $("#isi").empty();

        let total = 0;
        let jumlah = 0;

        for (let i = 0; i < keranjang.length; i++) {

            let item = $("<p>");

            item.append(
                keranjang[i].nama + " x " +
                keranjang[i].jumlah + " - Rp " +
                (keranjang[i].harga * keranjang[i].jumlah)
            );

            let tombol = $("<button>");
            tombol.text("Hapus");

            tombol.click(function() {
                hapus(i);
            });

            item.append(tombol);

            $("#isi").append(item);
            item.hide().fadeIn();

            total += keranjang[i].harga * keranjang[i].jumlah;
            jumlah += keranjang[i].jumlah;
        }

        $("#total").text(total);
        $("#jumlah").text(jumlah);
    }

    // Fungsi menghapus produk
    function hapus(index) {

        if (confirm("Hapus produk ini?")) {

            let id = keranjang[index].id;

            produk[id - 1].stok += keranjang[index].jumlah;

            keranjang.splice(index, 1);

            tampilkan();
        }
    }

    // Mengosongkan keranjang
    $("#kosongkan").click(function() {

        if (confirm("Kosongkan keranjang?")) {

            for (let i = 0; i < keranjang.length; i++) {
                let id = keranjang[i].id;
                produk[id - 1].stok += keranjang[i].jumlah;
            }

            keranjang = [];

            $("#isi").empty();
            $("#total").text(0);
            $("#jumlah").text(0);
        }
    });

    // Buka tutup keranjang
    $("#buka").click(function() {
        $("#keranjang").fadeToggle();
    });

    // Pencarian produk
    $("#cari").keyup(function() {

        let kata = $(this).val().toLowerCase();

        $(".item").each(function() {

            let nama = $(this).find("p").first().text().toLowerCase();

            if (nama.includes(kata)) {
                $(this).toggle(true);
            } else {
                $(this).toggle(false);
            }
        });
    });

    // Checkout
    $("#checkout").click(function() {

        if (keranjang.length == 0) {
            alert("Keranjang masih kosong!");
        } else {

            let nama = prompt("Masukkan nama pembeli:");

            if (nama == null || nama.trim() == "") {
                alert("Nama pembeli harus diisi!");
            } else {

                let hasil = "<h3>Pesanan " + nama + "</h3>";
                let total = 0;

                for (let i = 0; i < keranjang.length; i++) {

                    hasil += "<p>" + keranjang[i].nama +
                    " x " + keranjang[i].jumlah + "</p>";

                    total += keranjang[i].harga * keranjang[i].jumlah;
                }

                hasil += "<h3>Total: Rp " + total + "</h3>";

                $("#hasil").html(hasil);

                alert("Checkout berhasil!");

                keranjang = [];
                tampilkan();
            }
        }
    });

});
