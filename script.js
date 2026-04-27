let total = 0;

function tambahKeranjang(nama, harga) {
    let list = document.getElementById("listKeranjang");

    let item = document.createElement("li");
    item.innerText = nama + " - Rp " + harga;

    list.appendChild(item);

    total += harga;
    document.getElementById("total").innerText = total;
}