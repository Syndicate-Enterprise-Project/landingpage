document.addEventListener("DOMContentLoaded", function () {
    var filterLinks = document.querySelectorAll('.b-isotope-filter a');
    var filterContainers = document.querySelectorAll('.grid-item');
    var fotoImage = document.querySelector('.foto');
    var videoImage = document.querySelector('.video');
    var activeFilter = '*'; // Set filter semua sebagai filter aktif secara default

    // Fungsi untuk menampilkan atau menyembunyikan elemen berdasarkan filter yang aktif
    function toggleFilterContainers(activeFilter) {
        filterContainers.forEach(function (container) {
            if (activeFilter === '*' || container.classList.contains(activeFilter)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

    // Fungsi untuk menampilkan atau menyembunyikan gambar sesuai dengan filter yang aktif
    function toggleImages(activeFilter) {
        if (activeFilter === '*') {
            fotoImage.style.display = 'block';
            videoImage.style.display = 'block';
        } else if (activeFilter === '.foto') {
            fotoImage.style.display = 'block';
            videoImage.style.display = 'none';
        } else if (activeFilter === '.video') {
            fotoImage.style.display = 'none';
            videoImage.style.display = 'block';
        }
    }

    // Memperbarui tampilan konten dan filter saat halaman dimuat
    toggleFilterContainers(activeFilter);
    toggleImages(activeFilter);

    // Tambahkan event listener untuk setiap link filter
    filterLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var clickedFilter = this.getAttribute('data-filter');

            // Jika filter yang diklik sama dengan filter yang sedang aktif
            if (clickedFilter === activeFilter) {
                return; // Hentikan eksekusi lebih lanjut
            }

            // Mengubah filter aktif
            activeFilter = clickedFilter;

            // Memperbarui tampilan konten berdasarkan filter yang aktif
            toggleFilterContainers(activeFilter);

            // Memperbarui tampilan gambar atau video sesuai dengan filter yang aktif
            toggleImages(activeFilter);

            // Menghapus kelas "current" dari semua link dan menambahkan kelas "current" pada link yang diklik
            filterLinks.forEach(function (link) {
                link.parentElement.classList.remove('current');
            });
            this.parentElement.classList.add('current');
        });
    });
});
