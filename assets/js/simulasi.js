document.addEventListener("DOMContentLoaded", function () {
    var filterLinks = document.querySelectorAll('.b-isotope-filter a');
    var filterContainers = document.querySelectorAll('.filter-container');
    var omodaImage = document.querySelector('.omoda');
    var tiggoImage = document.querySelector('.tiggo');

    // Fungsi untuk menampilkan atau menyembunyikan elemen berdasarkan filter yang aktif
    function toggleFilterContainers(activeFilter) {
        filterContainers.forEach(function (container) {
            if (container.classList.contains(activeFilter)) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
        });
    }

    // Set filter "omoda" sebagai filter aktif dan tampilkan kontennya saat halaman dimuat
    var activeFilter = '.omoda';
    toggleFilterContainers(activeFilter);

    // Menampilkan atau menyembunyikan gambar sesuai dengan filter yang aktif
    omodaImage.style.display = 'block';
    tiggoImage.style.display = 'none';

    // Tambahkan kelas "current" pada link filter "omoda"
    filterLinks.forEach(function (link) {
        if (link.getAttribute('data-filter') === activeFilter) {
            link.parentElement.classList.add('current');
        } else {
            link.parentElement.classList.remove('current');
        }
    });

    // Tangani klik pada filter
    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Menghapus kelas "current" dari semua link
            filterLinks.forEach(function (link) {
                link.parentElement.classList.remove('current');
            });

            // Menambah kelas "current" pada link yang diklik
            this.parentElement.classList.add('current');

            // Mendapatkan nilai filter yang aktif
            activeFilter = this.getAttribute('data-filter');

            // Menampilkan atau menyembunyikan elemen berdasarkan filter yang aktif
            toggleFilterContainers(activeFilter);

            // Menampilkan atau menyembunyikan gambar sesuai dengan filter yang aktif
            if (activeFilter === '.omoda') {
                omodaImage.style.display = 'block';
                tiggoImage.style.display = 'none';
            } else if (activeFilter === '.tiggo') {
                omodaImage.style.display = 'none';
                tiggoImage.style.display = 'block';
            }
        });
    });
});


function hitungKredit() {
    // Logika perhitungan kredit

    var resultDiv = document.getElementById("result");
    resultDiv.style.display = "block"; // Menampilkan div hasil
}


function showImageOmoda() {
    var selectBox = document.getElementById("omoda-car");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var image = document.getElementById("car-image-omoda");
    
    if (selectedValue === "omoda5") {
        image.src = "./assets/media/general/Varian/CHERY-OMODA-5/Omoda 5 (2).png";
        image.style.display = "block";
    }else if (selectedValue === "omodae5") {
        image.src = "./assets/media/general/Varian/CHERY-OMODA-E5/1.png";
        image.style.display = "block";

    }else if (selectedValue === "omoda5gt") {
        image.src = "./assets/media/general/Varian/CHERY-OMODA-5-GT/Omoda 5 GT.png";
        image.style.display = "block";
    }
    else {
        image.style.display = "none";
    }
}

function showImageTiggo() {
    var selectBox = document.getElementById("tiggo-car");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var image = document.getElementById("car-image-tiggo");
    
    if (selectedValue === "tiggo5x") {
        image.src = "./assets/media/general/Varian/CHERY-TIGGO-5X/Tiggo-5X.png";
        image.style.display = "block";
    }else if (selectedValue === "tiggo7pro") {
        image.src = "./assets/media/general/Varian/CHERY-TIGGO-7-PRO/Tiggo 7 Pro.png";
        image.style.display = "block";

    }else if (selectedValue === "tiggo8pro") {
        image.src = "./assets/media/general/Varian/CHERY-TIGGO-8-PRO/Tiggo-8Pro.png";
        image.style.display = "block";
    }
    else {
        image.style.display = "none";
    }
}