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


function showImage() {
    var selectBox = document.getElementById("omoda-car");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var image = document.getElementById("car-image");
    
    if (selectedValue === "omoda1") {
        image.src = "./assets/media/general/map-marker.png";
        image.style.display = "block";
    } else if (selectedValue === "omoda2") {
        image.src = "./assets/media/general/logo.png";
        image.style.display = "block";

    }
    else {
        image.style.display = "none";
    }
}