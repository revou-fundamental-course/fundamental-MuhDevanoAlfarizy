let name = prompt("Halo, siapa namamu?", "");
document.getElementById("name").innerHTML = name;

function replaceName() {
    let name = prompt("Halo, siapa namamu?", "");
    document.getElementById("name").innerHTML = name;
}

// document.getElementById("changeName").addEventListener("click", function () {
//     replaceName();
// });

// let nameInput = document.getElementById("name-input");

// document.getElementById("kirim").addEventListener("click", function () {
//     const nama = nameInput.value;
//     if (nama == "") {
//         document.getElementById("errorName").innerHTML = "Nama tidak boleh kosong!";
//     } else {
//         document.getElementById("name").innerHTML = nama;
//     }
// });

// function validateForm() {
//     const nama = document.forms["messageForm"]["name-input"].value;
//     if (nama == "") {
//         document.getElementById("errorName").innerHTML = "Tidak boleh kosong";
//         return false;
//     }
//     document.getElementById("name").innerHTML = nama;
//     document.getElementById("errorName").innerHTML = "";
//     return false;
// }
